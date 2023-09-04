/* eslint-disable react-hooks/exhaustive-deps */
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import SinglePost from '../Home/SinglePost';

const UserPosts = ({route}: any) => {
  const {id, name} = route.params;
  const [userPost, setUserPost] = useState();
  const getUserPosts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    );
    const data = await res.json();

    setUserPost(data);
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <>
      {userPost === null ? (
        <ActivityIndicator color={'black'} size={'large'} />
      ) : (
        <>
          <View style={styles.userPostContainer}>
            <Text style={styles.TextStyle}>{name}</Text>

            <FlatList
              data={userPost}
              renderItem={({item}) => (
                <SinglePost item={item} showOptions={false} />
              )}
            />
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  userPostContainer: {
    backgroundColor: '#191a23',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default UserPosts;
