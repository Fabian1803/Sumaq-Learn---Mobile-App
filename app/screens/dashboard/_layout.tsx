import { Slot } from 'expo-router';
import { CustomHeaderWithMenu } from '@/components/dashboard/CustomHeaderWithMenu';
import { SideMenu } from '@/components/dashboard/SideMenu';
import { CustomTabs } from '@/components/dashboard/CustomTabs';
import { View } from 'react-native';

export default function DashboardLayout() {
  return (
    <>
      <CustomHeaderWithMenu title="Sumaq Learn" />

      <View className="flex-1">
        <Slot />
      </View>

      <CustomTabs />

      <SideMenu />
    </>
  );
}
