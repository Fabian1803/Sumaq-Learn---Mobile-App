import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import ChatInputTab from '@/components/dashboard/chat/ChatInputTab'
import ChatBubble from '@/components/dashboard/chat/ChatBubble'

export default function ChatUser() {
  return (
    <View className='flex-1'>
      <View className='flex-row justify-center items-center gap-3 pb-3 bg-light-neutral border-b-[3px]'>
        <View className="border-2 border-light-tile4"
          style={{ overflow: 'hidden', width: 60, height: 60, borderRadius: 60 }}>
          <Image
            source={require('@/assets/images/blanco.png')}
            className='h-full w-full'
            resizeMode='cover'
          />
        </View>
        <Text>Fabian Mauro Rivera Morales</Text>
      </View>
      <ScrollView className='flex-1 p-3'>
        <ChatBubble from="me" text="Hola, ¿cómo estás?" time="12:00PM" />
        <ChatBubble from="other" senderName="María" text="¡Bien, gracias!" time="12:01PM" />
      </ScrollView>
      <ChatInputTab />
    </View>
  )
}