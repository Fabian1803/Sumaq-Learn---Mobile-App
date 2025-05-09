import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchInput from '@/components/auth/SearchInput'
import { useSelection } from '@/context/SelectionContext'
import { router } from 'expo-router'
import { CustomHeader } from '@/components/auth/CustomHeader'

type School = {
  id: string;
  name: string;
};

const UNIVERSITIES = [
  { id: '1', name: 'Universidad Nacional de Ingeniería' },
  { id: '2', name: 'Universidad Nacional Mayor de San Marcos' },
  { id: '3', name: 'Pontificia Universidad Católica del Perú' },
  { id: '4', name: 'Universidad de Lima' },
  { id: '5', name: 'Universidad San Martín de Porres' },
  { id: '6', name: 'Universidad Peruana Cayetano Heredia' },
  { id: '7', name: 'Universidad del Pacífico' },
  { id: '8', name: 'Universidad ESAN' },
  { id: '9', name: 'Universidad de Piura' },
  { id: '10', name: 'Universidad Ricardo Palma' },
]

export default function SearchSchoolScreen() {
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState<typeof UNIVERSITIES>([])
  const { selectedSchool, setSelectedSchool } = useSelection();
  useEffect(() => {
    if (searchText.length >= 3) {
      const filtered = UNIVERSITIES.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
      setFilteredData(filtered)
    } else {
      setFilteredData([]) // Vacía la lista si hay menos de 3 caracteres
    }
  }, [searchText])

  const handleSelectSchool = (school: School) => {
    setSelectedSchool(school.id);
  };
  
  return (
    <View className='flex-1 bg-light-primary'>
      <CustomHeader
        title="Buscar"
        showNext
        isNextEnabled={!!selectedSchool}
        onNext={() => router.push('/screens/login/LoginScreen')}
      />
      
      <SearchInput 
        value={searchText} 
        onChangeText={setSearchText}
        placeholder="Buscar universidad (mín. 3 letras)"
      />
      
      {searchText.length < 3 ? (
        <View className='flex-1 justify-center items-center p-5'>
          <Text className='text-xl text-light-fourth font-semibold text-center'>
            Escribe al menos 3 letras para buscar
          </Text>
        </View>
      ) : filteredData.length === 0 ? (
        <View className='flex-1 justify-center items-center p-5'>
          <Text className=' text-light-fourth text-xl text-center'>
            No se encontraron universidades
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelectSchool(item)}
              className={`p-4 border-b border-light-secondary ${
                selectedSchool === item.id ? 'bg-light-secondary' : ''
              }`}
            >
              <Text className='text-base'>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}