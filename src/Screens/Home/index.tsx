/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import CustomHeading from '../../Components/Heading';
import CustomIcon from '../../Components/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {DisplayData} from '../../Redux/actions/Actions';

import SinglePost from './SinglePost';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackProps} from '../../Navigation';

export interface IPostProps {
  id: number;
  body: string;
  userId: number;
  title: string;
}

type Props = NativeStackScreenProps<RootStackProps, 'Home'>;

const Home = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.reducers.posts);
  if (data) {
    console.log(data);
  }

  useEffect(() => {
    dispatch(DisplayData() as any);
  }, []);

  const handlePress = () => {
    navigation.navigate('AddData');
  };

  const handleUserDetail = () => {
    navigation.navigate('UserList');
  };
  return (
    <SafeAreaView style={styles.HomeContainer}>
      <View style={styles.HeadingContainer}>
        <CustomHeading style={styles.CustomHeadingStyle} />
        <View style={styles.IconContainer}>
          <CustomIcon name="add-box" handlePress={handlePress} />
          <CustomIcon name="person-add-alt" handlePress={handleUserDetail} />
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SinglePost item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: '#191a23',
  },

  HeadingContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  CustomHeadingStyle: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
  },
  IconContainer: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default Home;
