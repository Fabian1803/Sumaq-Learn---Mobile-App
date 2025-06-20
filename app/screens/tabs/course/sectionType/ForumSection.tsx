import { View, Text, ScrollView, Image, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from '@/constants/Colors'
import ForumAnswer from '../components/ForumAnswer'
import { useLocalSearchParams } from 'expo-router'
import { API_BASE_URL } from '@/services/api'
import moment from 'moment'
import 'moment/locale/es'
import CommentModal from '../editsComponent/CoursePanelModal'
import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';

moment.locale('es')
interface JwtPayload {
  sub: string;
  firstName: string;
  lastName: string;
  username: string;
}


interface Comment {
  user_id: number;
  username: string;
  full_name: string;
  text: string;
  created_at: string; // en vez de timestamp
  replies: Comment[];
}

type ForumContent = {
  _id: string
  forum_id: number
  title: string
  description: string
  images: string[]
  comments: {
    user_id: number
    username: string
    full_name: string
    text: string
    created_at: string
    replies: {
      user_id: number
      username: string
      full_name: string
      text: string
      created_at: string
    }[]
  }[]
  is_graded: boolean
  start_date: string
  end_date: string
  status: string
  created_by: {
    user_id: number
    full_name: string
  }
}

export default function ForumSection() {
  const { idCourse } = useLocalSearchParams<{ idCourse: string }>()
  const [forum, setForum] = useState<ForumContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [userId, setUserId] = useState<number | null>(null);
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);


  useEffect(() => {
    const getUserDataFromToken = async () => {
      try {
        const token = await SecureStore.getItemAsync('jwt');
        if (!token) throw new Error('Token no encontrado');
        const decoded = jwtDecode<JwtPayload>(token);
        setDecodedToken(decoded);
        setUserId(parseInt(decoded.sub));
      } catch (error) {
        console.error('Error obteniendo userId:', error);
      }
    };

    getUserDataFromToken();
    const fetchForum = async () => {
      try {
        console.log('Intentando cargar foro con ID:', idCourse);
        if (!idCourse) {
          throw new Error('No se proporcionó ID de foro');
        }
        const url = `${API_BASE_URL}/forum/${idCourse}`;
        console.log('URL de la petición:', url);
        const response = await fetch(url);

        console.log('Respuesta recibida, status:', response.status);
        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.message || `Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Datos recibidos:', data);

        setForum(data);
      } catch (err: unknown) {
        let errorMessage = 'Error desconocido';
        if (err instanceof Error) {
          errorMessage = err.message;
          console.error('Error completo:', err);
        }
        setError(`No se pudo cargar el foro: ${errorMessage}`);
      } finally {
        setLoading(false);
      }
    }
    fetchForum()
  }, [idCourse])

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color={Colors.light.primary} />
      </View>
    )
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">{error}</Text>
      </View>
    )
  }

  if (!forum) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>No se encontró el foro</Text>
      </View>
    )
  }

  const formatDate = (dateString: string) => {
    return moment(dateString).format('dddd, D [de] MMMM [de] YYYY [a las] h:mm a')
  }

  const firstName = decodedToken?.firstName || '';
  const lastName = decodedToken?.lastName || '';
  const fullName = `${firstName} ${lastName}`.trim();
  const username = decodedToken?.username || '';

  return (
    <ScrollView className='bg-light-neutral'>
      <CommentModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        text={newComment}
        setText={setNewComment}
        onSubmit={async (text) => {
          console.log('Comentario enviado:', text);
          try {
            if (!idCourse || !text.trim()) return;

            const payload = {
              user_id: userId,
              username: username,
              full_name: fullName,
              text: text.trim(),
              created_at: new Date().toISOString(),
              replies: [] as any[],
            };

            console.log('Payload que se enviará:', payload);

            const response = await fetch(`${API_BASE_URL}/forum/${idCourse}/comment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || 'Error al enviar comentario');

            console.log('Comentario agregado con ID:', data.comment_id);

            const nuevoComentario = {
              ...payload, // reutilizamos el mismo objeto
            };

            setForum((prev) =>
              prev
                ? {
                  ...prev,
                  comments: [
                    {
                      ...payload,
                      user_id: payload.user_id ?? 0,  // reemplaza null por 0 o un valor seguro
                      replies: payload.replies as Comment[],  // castear correctamente si hace falta
                    },
                    ...prev.comments,
                  ],
                }
                : prev
            );


            setNewComment('');
          } catch (err: any) {
            console.error('Error al enviar comentario:', err.message);
          }
        }}


      />
      <View className='p-3 gap-3 bg-light-neutral'>
        <Text className='font-semibold text-2xl'>{forum.title}</Text>
        <View className='gap-3 flex-row items-center'>
          <Text className='text-lg'>Foro {forum.is_graded ? 'calificado' : 'no calificado'}</Text>
          <View className={`bg-light-${forum.status === 'entregado' ? 'true' : 'yellow'} flex-row items-center gap-2 px-2 py-1 border-[1px]`}>
            <Icon name="infocirlceo" size={20} color={Colors.light.fourth} />
            <Text>
              {forum.status === 'entregado' ? 'Entregado' :
                forum.status === 'vencido' ? 'Vencido' : 'Por entregar'}
            </Text>
          </View>
        </View>

        <View className='border-[1px] bg-light-primary px-3 py-2 flex-row gap-3 items-center'>
          <Icon name="calendar" size={40} color={Colors.light.fourth} />
          <View className='flex-1'>
            <Text className='text-xl font-medium'>Fecha disponible</Text>
            <Text>
              {formatDate(forum.start_date)} - {formatDate(forum.end_date)}
            </Text>
          </View>
        </View>

        <View className='py-2 gap-2'>
          <Text className='text-xl font-medium'>Descripción</Text>
          <Text className='text-xl mb-2'>{forum.description}</Text>
          {forum.images.length > 0 && (
            <View className='aspect-[1.9] overflow-hidden'>
              <Image
                source={{ uri: forum.images[0] }}
                resizeMode='cover'
                className='h-full w-full'
              />
            </View>
          )}
        </View>

        <Pressable
          className='bg-light-orange p-3 mb-2 border-2'
          onPress={() => setIsModalVisible(true)}
        >
          <Text className='text-lg font-medium text-center'>Agregar comentario</Text>
        </Pressable>
      </View>

      <View className='border-t-2 bg-light-primary p-3 pb-20 gap-2'>
        {forum.comments.map((comment, index) => (
          <ForumAnswer
            key={index}
            messager={comment.text}
            username={comment.full_name || comment.username}
            timestamp={comment.created_at}
          >
            <View className='gap-2'>
              {comment.replies.map((reply, replyIndex) => (
                <ForumAnswer
                  key={replyIndex}
                  isRespuest
                  messager={reply.text}
                  username={reply.full_name || reply.username}
                  timestamp={reply.created_at}
                />
              ))}
            </View>
          </ForumAnswer>
        ))}
      </View>
    </ScrollView>
  )
}
