import { CustomHeaderWithMenu } from '@/components/dashboard/CustomHeaderWithMenu';
import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function MessagesLayout() {
  return (
    <>

      <CustomHeaderWithMenu showBackButton />
      <View className="flex-1">
        <Slot />
      </View>
    </>

  );
}
