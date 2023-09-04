import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const UserList = () => {
  return (
    <View style={styles.userListContainer}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userListContainer: {
    flex: 1,
    backgroundColor: '#191a23',
  },
});

export default UserList;
