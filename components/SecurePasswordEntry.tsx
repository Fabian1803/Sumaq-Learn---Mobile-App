import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
type Proms = {
    colorText: string;
    colorBg: string;
    text: string;
    value?: string;
    onChange?: (value: string) => void;
  };
  
  export default function SecurePasswordEntry({ colorText, colorBg, text, value, onChange }: Proms) {
    const [passBtn, setPassBtn] = useState(false);
  
    return (
      <View
        className="flex flex-row items-center rounded-[8px] px-[12px]"
        style={{ backgroundColor: colorBg }}
      >
        <Icon name="lock" size={20} color={colorText} style={{ marginRight: 10 }} />
        <TextInput
          className="flex h-[50px] text-[16px] w-[79%] flex-1"
          style={{ color: colorText }}
          placeholder={text}
          placeholderTextColor={colorText}
          secureTextEntry={!passBtn}
          value={value}
          onChangeText={onChange}
        />
        <TouchableOpacity onPress={() => setPassBtn(!passBtn)} className="p-[10px]">
          <Icon name={passBtn ? 'eye' : 'eye-off'} size={20} color={colorText} />
        </TouchableOpacity>
      </View>
    );
  }
  