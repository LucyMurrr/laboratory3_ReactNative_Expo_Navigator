import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Entypo from '@expo/vector-icons/Entypo';
import List from '@/components/List';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#BE13CE', dark: '#353636' }}
      headerImage={
        <Entypo name="baidu" size={200} color='#440748' />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Мои языки программирования</ThemedText>
      </ThemedView>
      <List/>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: '#A917A4',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
