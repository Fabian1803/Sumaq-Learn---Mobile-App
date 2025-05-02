import { Tabs, Slot } from 'expo-router';
import { CustomHeaderWithMenu } from '@/components/CustomHeaderWithMenu';
import { SideMenu } from '@/components/SideMenu';

export default function DashboardLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          header: ({ route }) => (
            <CustomHeaderWithMenu title={route.name} />
          ),
          tabBarActiveTintColor: '#007AFF',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopColor: '#eee',
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 6,
          },
        }}
      >
        <Tabs.Screen name="Course" />
        <Tabs.Screen name="Messages" />
      </Tabs>

      <SideMenu />
    </>
  );
}
