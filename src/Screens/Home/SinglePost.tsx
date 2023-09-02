import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IPostProps} from '.';
import CustomIcon from '../../Components/Icons';
import {useNavigation} from '@react-navigation/native';

interface ISinglepostProps {
  item: IPostProps;
}

const SinglePost = ({item}: ISinglepostProps) => {
  // const [user, setUser] = useState();
  // const getUserData = async () => {
  //   const data = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${item.userId}`,
  //   );
  //   const res = await data.json();
  //   setUser(res);
  //   if (user) console.log(user);
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);
  const navigation = useNavigation();

  return (
    <View style={styles.PostContainer}>
      <View style={styles.PostHeading}>
        <Text style={styles.postTitle}>{item.title.substring(0, 20)}</Text>
        <View style={styles.IconContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdatePost', {id: item.id})}>
            <CustomIcon name="edit" color="lightgray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomIcon name="delete" color="red" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.postBody}>{item.body.substring(0, 40)}</Text>
      {/* <Text onPress={() => handleUserData(item.userId)}>{item.userId}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  PostContainer: {
    backgroundColor: '#fefefe',
    marginVertical: 10,
    marginTop: 20,
    paddingHorizontal: 5,
    paddingVertical: 15,
    // borderTopEndRadius: 20,
    // borderTopLeftRadius: 20,
    borderRadius: 20,
  },
  postTitle: {
    color: '#000',
    fontSize: 22,
    marginLeft: 5,
    maxWidth: '90%',
    fontFamily: 'Roboto-Medium',
  },
  postBody: {
    color: 'gray',
    marginLeft: 5,
    fontSize: 20,
  },
  PostHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  IconContainer: {
    flexDirection: 'row',
  },
});

export default SinglePost;
