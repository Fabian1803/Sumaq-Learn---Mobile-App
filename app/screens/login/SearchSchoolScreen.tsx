import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchInput from '@/components/auth/SearchInput'
import { useSelection } from '@/context/SelectionContext'
import { router } from 'expo-router'
import { CustomHeader } from '@/components/auth/CustomHeader'
import { API_BASE_URL } from '@/services/api'

type School = {
  id: string;
  name: string;
};


export default function SearchSchoolScreen() {
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState<School[]>([])
  const { selectedSchool, setSelectedSchool } = useSelection();
  useEffect(() => {
    const fetchData = async () => {
      if (searchText.length >= 3) {
        try {
          const response = await fetch(`${API_BASE_URL}/institutes/search?query=${searchText}`);
          const data: School[] = await response.json();
          setFilteredData(data);
        } catch (error) {
          console.error("Error al buscar universidades:", error);
          setFilteredData([]);
        }
      } else {
        setFilteredData([]);
      }
    };

    fetchData();
  }, [searchText]);

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
          <Text className='text-xl text-light-fourth font-semibold text-center '>
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
              className={`p-4 border-b border-light-secondary ${selectedSchool === item.id ? 'bg-light-secondary' : ''
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