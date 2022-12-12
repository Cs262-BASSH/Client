import Settings from '../components/profile_item/Settings';
import History from '../components/profile_item/History';
import ProfileScreen from '../components/profile_item/ProfileScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/**Navigate screens in the profile */
export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile." component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{
        headerTransparent: true,
        headerBackImage: () => <Icon name={'arrowLeft'} />
      }} />
      <Stack.Screen name="History" component={History} options={{
        headerTransparent: false, 
        headerStyle: {
          backgroundColor: 'black',
        },
        headerBackImage: () => <Icon name={'arrowLeft'} />
      }} />
    </Stack.Navigator>
  );
}
