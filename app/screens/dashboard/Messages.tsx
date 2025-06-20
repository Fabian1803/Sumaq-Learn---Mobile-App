import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ChatDropDown from '@/components/dashboard/ChatDropDown'
import UserMessage from '@/components/dashboard/chat/UserMessage'
import { router } from 'expo-router'

export default function Messages() {
  return (
    <View className='flex-1'>
      <View className='flex-row pb-3 p-3 items-center border-b-2
       border-b-light-fourth bg-light-neutral'>
        <Text className='flex-1 text-2xl font-semibold'>Chat</Text>
        <ChatDropDown />
      </View >
      <ScrollView showsVerticalScrollIndicator={false} className='h-full p-3 bg-light-primary'>
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
      </ScrollView>
      <TouchableOpacity className=' bottom-0 absolute right-0 border-2 w-20 h-20 m-4 justify-center 
      items-center rounded-full bg-light-orange'
      onPress={() => (router.push('/screens/tabs/messages/SearchUser'))}>
        <Text className='text-3xl text-light-fourth font-semibold'>+</Text>
      </TouchableOpacity>
    </View>
  )
}