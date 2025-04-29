import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import SearchInput from '@/components/SearchInput'
import { useSelection } from '@/context/SelectionContext'
import { router, useNavigation } from 'expo-router'
import { CustomHeader } from '@/components/CustomHeader'

// Agrega esto justo después de los imports
type School = {
  id: string;
  name: string;
};
// Lista estática de universidades (puedes moverla a un archivo aparte)
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
  const { selectedSchool } = useSelection();
  const { setSelectedSchool } = useSelection();
 
  // Filtra universidades cuando searchText tiene 3+ caracteres
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
    <View style={styles.container}>
      <CustomHeader
        title="Buscar"
        showNext
        isNextEnabled={!!selectedSchool}
        onNext={() => router.push('/screens/LoginScreen')}
      />
      <SearchInput 
        value={searchText} 
        onChangeText={setSearchText}
        placeholder="Buscar universidad (mín. 3 letras)"
      />
      
      {searchText.length < 3 ? (
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderText}>
            Escribe al menos 3 letras para buscar
          </Text>
        </View>
      ) : filteredData.length === 0 ? (
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderText}>No se encontraron universidades</Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelectSchool(item)}
              style={[
                styles.item,
                selectedSchool === item.id && styles.selectedItem
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedItem: {
    backgroundColor: '#e3f2fd',
  },
  itemText: {
    fontSize: 16,
  },
})