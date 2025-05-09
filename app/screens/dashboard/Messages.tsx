import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ChatDropDown from '@/components/dashboard/ChatDropDown'
import UserMessage from '@/components/dashboard/UserMessage'
import { router } from 'expo-router'

export default function Messages() {
  return (
    <View className='bg-light-primary flex-1'>
      <View className='flex-row pb-3 px-5 items-center border-b-[3px] border-b-light-fourth'>
        <Text className='flex-1 text-2xl'>Chat</Text>
        <ChatDropDown />
      </View >
      <ScrollView className='h-full p-3'>
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
      </ScrollView>
      <TouchableOpacity className=' bottom-0 absolute right-0 border-[3px] w-20 h-20 m-4 justify-center 
      items-center rounded-full bg-light-secondary'
      onPress={() => (router.push('/screens/screenMessages/SearchUser'))}>
        <Text className='text-3xl text-light-fourth font-semibold'>+</Text>
      </TouchableOpacity>
    </View>
  )
}