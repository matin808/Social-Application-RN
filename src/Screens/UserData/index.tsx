/* eslint-disable react-hooks/exhaustive-deps */
import {View, StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../../Redux/actions/Actions';
import User from './User';

const UserList = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.reducers.users);

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);
  return (
    <View style={styles.userListContainer}>
      <FlatList data={data} renderItem={({item}) => <User userItem={item} />} />
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
