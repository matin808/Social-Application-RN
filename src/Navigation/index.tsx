import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import AddDataForm from '../Screens/AddPost';
import UpdatePost from '../Screens/UpdatePost';
import UserList from '../Screens/UserData';

export type RootStackProps = {
  Home: undefined;
  AddData: undefined;
  UpdatePost: {id: string};
  UserList: undefined;
};

const Stack = createStackNavigator<RootStackProps>();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="AddData" component={AddDataForm} />
        <Stack.Screen name="UpdatePost" component={UpdatePost} />
        <Stack.Screen name="UserList" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
