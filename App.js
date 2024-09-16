import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import PopularScreen from './Screens/PopularScreen';
import FavoritesScreen from './Screens/FavoritesScreen';
import AddNewScreen from './Screens/AddNewScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolateColor } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CustomTabBarButton({ children, onPress }) {
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue('#dcc6c4'); // Default color

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scale.value, { damping: 2 }) }],
      backgroundColor: interpolateColor(
        backgroundColor.value,
        ['#6d476d', '#dcc6c4'],
        [1, 1]
      ),
    };
  });

  return (
    <TouchableOpacity
      onPressIn={() => {
        scale.value = 1.2;
        backgroundColor.value = '#6d476d'; // Highlight color
      }}
      onPressOut={() => {
        scale.value = 1;
        backgroundColor.value = '#dcc6c4'; // Default color
      }}
      onPress={onPress}
      style={styles.tabButtonContainer}
    >
      <View style={styles.tabButton}>
        <Animated.View style={[styles.tabButtonInner, animatedStyle]}>
          {children}
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}

function BottomNavigator() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#6d476d',
          tabBarInactiveTintColor: '#dcc6c4',
          headerTitle: 'hadisBook',
          headerTitleAlign: 'center',
          headerTintColor: '#6d476d',
          headerStyle: {
            backgroundColor: '#eee8cd',
            height: 40,

          },
          tabBarStyle: {
            backgroundColor: '#eee8cd',
            borderTopWidth: 0,
            elevation: 30, // Increased elevation for the tab bar
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 20 },
            shadowRadius: 30,
            borderRadius: 18,
            height: 70, // Increased height
            paddingHorizontal: 15,
            marginBottom: 25,
            marginHorizontal: 25,
            alignItems: 'center',
            justifyContent: 'center',

          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIcon: ({ focused }) => {
            const icons = {
              Anasayfa: 'home',
              Popüler: 'star',
              Favoriler: 'heart',
              'Yeni Ekle': 'plus',
            };
            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                size={36} // Increased icon size
                color={focused ? '#6d476d' : '#dcc6c4'}
              />
            );
          },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        })}
      >
        <Tab.Screen
          name='Anasayfa'
          component={HomeScreen}
          options={{ tabBarLabel: 'Anasayfa', }}
        />
        <Tab.Screen
          name='Popüler'
          component={PopularScreen}
          options={{ tabBarLabel: 'Popüler' }}
        />
        <Tab.Screen
          name='Favoriler'
          component={FavoritesScreen}
          options={{ tabBarLabel: 'Favoriler' }}
        />
        <Tab.Screen
          name='Yeni Ekle'
          component={AddNewScreen}
          options={{ tabBarLabel: 'Yeni Ekle' }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#eee8cd' style='light' />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eee8cd' }}>
        <NavigationContainer >
          <Stack.Navigator >
            <Stack.Screen name='BottomNavigator' component={BottomNavigator}
              options={{ headerShown: false }} />
            <Stack.Screen name='Anasayfa' component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcc6c4'
  },
  tabButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  tabButtonInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
