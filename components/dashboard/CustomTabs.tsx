import { useRouter, usePathname } from 'expo-router';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type AntDesignIconName = 'book' | 'calendar' | 'form' | 'bells' | 'message1';

type TabItem = {
  name: string;
  route: string;
  icon: AntDesignIconName;
};

export function CustomTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const tabs: TabItem[] = [
    { name: 'Cursos', route: '/screens/dashboard/Course', icon: 'book' },
    { name: 'Calendario', route: '/screens/dashboard/Calendar', icon: 'calendar' },
    { name: 'Por Hacer', route: '/screens/dashboard/ToMake', icon: 'form' },
    { name: 'Notificaciones', route: '/screens/dashboard/Notifications', icon: 'bells' },
    { name: 'Chat', route: '/screens/dashboard/Messages', icon: 'message1' },
  ];

  return (
    <View
      className="flex-row justify-between bg-white border-t border-gray-300"
      style={{ paddingBottom: insets.bottom, paddingHorizontal: 15}} // <-- aquí el truco
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.route;

        return (
          <TouchableOpacity
            key={tab.route}
            onPress={() => router.push({ pathname: tab.route as any })}
            className="items-center"
          >
            <AntDesign
              name={tab.icon}
              size={24}
              color={isActive ? '#2a9d8f' : '#aaa'}
            />
            <Text className={isActive ? 'text-[#2a9d8f] text-xs' : 'text-gray-500 text-xs'}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
