import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {IPostProps} from '.';
import CustomIcon from '../../Components/Icons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {DeleteData} from '../../Redux/actions/Actions';
import {Swipeable} from 'react-native-gesture-handler';

interface ISinglepostProps {
  item: IPostProps;
  showOptions: boolean;
}
type Props = {
  navigate: any;
};

const SinglePost = ({item, showOptions}: ISinglepostProps) => {
  const navigation: Props = useNavigation();
  const dispatch = useDispatch();
  const handledeleteFunc = (id: number) => {
    Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(DeleteData(id) as any)},
    ]);
  };
  const renderRightActions = () => {
    return (
      <>
        {showOptions ? (
          <View style={styles.IconContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdatePost', {id: item.id})}>
              <CustomIcon name="edit" color="#fff" size={40} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handledeleteFunc(item.id)}>
              <CustomIcon name="delete" color="red" size={40} />
            </TouchableOpacity>
          </View>
        ) : null}
      </>
    );
  };

  return (
    <Swipeable renderRightActions={() => renderRightActions()}>
      <View style={styles.PostContainer}>
        <View style={styles.PostHeading}>
          <Text style={styles.postTitle}>{item.title.substring(0, 20)}</Text>
        </View>
        <Text style={styles.postBody}>{item.body.substring(0, 40)}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  PostContainer: {
    backgroundColor: '#fefefe',
    marginVertical: 10,
    marginTop: 20,
    paddingHorizontal: 5,
    paddingVertical: 15,
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
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
});

export default SinglePost;
