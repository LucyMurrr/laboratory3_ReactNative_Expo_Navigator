import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'О себе',
          tabBarIcon: () => <AntDesign name="heart" size={24} color='#B182B1' />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Мои языки программирования',
          tabBarIcon: () => <MaterialIcons name="list-alt" size={24} color='#B182B1' />,
        }}
      />
    </Tabs>
  );
}
