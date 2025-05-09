import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

type Props = {
  text: string;
  time: string;
  from: 'me' | 'other';
  senderName?: string;
};

export default function ChatBubble({ text, time, from, senderName }: Props) {
  const isMe = from === 'me';

  return (
    <View style={[styles.cont, { alignItems: isMe ? 'flex-end' : 'flex-start' }]}>
      <View style={styles.head}>
        <Text>{isMe ? 'Yo,' : `${senderName || 'Anónimo'},`}</Text>
        <Text>{time}</Text>
      </View>
      <View style={styles.info}>
        <Text>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    paddingVertical: 10,
    gap: 3,
  },
  head: {
    flexDirection: 'row',
    gap: 2,
    width: '75%',
  },
  info: {
    borderWidth: 1,
    padding: 7,
    backgroundColor: Colors.light.secondary,
    width: '75%',
    borderRadius: 5,
  },
});
