import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable
} from 'react-native';
import { Colors } from '@/constants/Colors';

interface CommentModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
  text: string;
  setText: (value: string) => void;
}

export default function CommentModal({
  visible,
  onClose,
  onSubmit,
  text,
  setText
}: CommentModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Escribe tu comentario</Text>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            placeholder="Escribe aquí..."
            value={text}
            onChangeText={setText}
          />
          <View style={styles.buttonRow}>
            <Pressable onPress={onClose} style={[styles.button, styles.cancel]}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>
            <Pressable onPress={() => {
              onSubmit(text)
              onClose()
            }} style={[styles.button, styles.send]}>
              <Text style={styles.buttonText}>Enviar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.light.neutral,
    padding: 20,
    borderRadius: 12,
    width: '90%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: Colors.light.primary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  cancel: {
    backgroundColor: Colors.light.orange,
  },
  send: {
    backgroundColor: Colors.light.primary,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
