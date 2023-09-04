import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface IUserProps {
  userItem: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Object;
    phone: string;
    website: string;
    company: Object;
  };
}

const User = ({userItem}: IUserProps) => {
  const navigation: any = useNavigation();
  const handlePress = (id: number, name: string) => {
    navigation.navigate('UserPosts', {id, name});
  };
  return (
    <View style={styles.userListContainer}>
      <Text
        style={styles.userText}
        onPress={() => handlePress(userItem.id, userItem.name)}>
        {userItem.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userListContainer: {
    flex: 1,
    padding: 3,
    marginHorizontal: 10,
    marginTop: 20,
  },

  userText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default User;
