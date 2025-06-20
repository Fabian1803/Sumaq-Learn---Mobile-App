import { Slot } from 'expo-router';
import { CustomHeaderWithMenu } from '@/components/dashboard/CustomHeaderWithMenu';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
export default function CourseLayout() {
  return (
    <>
      <CustomHeaderWithMenu showBackButton />
      <View className="flex-1">
        <PaperProvider>
          <Slot />
        </PaperProvider>
      </View>
    </>
  );
}
