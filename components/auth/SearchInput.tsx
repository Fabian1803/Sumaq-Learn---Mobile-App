import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

type SearchInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function SearchInput({ 
  value, 
  onChangeText, 
  placeholder = 'Buscar...'
}: SearchInputProps) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color={Colors.light.fourth} style={styles.searchIcon} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor={Colors.light.third}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.primary,
    borderRadius: 5,
    paddingHorizontal: 15,
    margin: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: Colors.light.fourth,
  },
});