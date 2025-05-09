import { useRouter, usePathname } from 'expo-router';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

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
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          paddingHorizontal: 15
        }
      ]}
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.route;

        return (
          <TouchableOpacity
            key={tab.route}
            onPress={() => router.push({ pathname: tab.route as any })}
            style={styles.tabButton}
          >
            <AntDesign
              name={tab.icon}
              size={24}
              color={isActive ? Colors.light.true : Colors.light.secondary}
            />
            {isActive && <View style={styles.deco}></View>}
            {!isActive &&
              <Text numberOfLines={(1)}
                style={[
                  styles.tabText,
                  isActive ? styles.activeTabText : styles.inactiveTabText
                ]}>
                {tab.name}
              </Text>
            }

          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.light.primary,
    borderTopWidth: 3,
    borderTopColor: Colors.light.fourth,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 9,
    paddingBottom: 5,
    width: '18%',
    position: 'relative',
  },
  deco: {
    borderWidth: 4,
    borderColor: Colors.light.alert,
    borderRadius:3,
    width: '65%',
    overflow: 'hidden',
    top: '-105%',
    backgroundColor: Colors.light.alert,
  },
  tabText: {
    fontSize: 12,
  },
  activeTabText: {
    color: Colors.light.true,
  },
  inactiveTabText: {
    color: Colors.light.secondary,
  }
});