/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomInput from '../../Components/Input';
import CustomButton from '../../Components/Button';
import {styles} from '../AddPost';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackProps} from '../../Navigation';
import {getSinglePostData} from '../../Utils/GetData';
import {IPostProps} from '../Home';

type Props = NativeStackScreenProps<RootStackProps, 'UpdatePost'>;

const UpdatePost = ({route}: Props) => {
  const [post, setPost] = useState<IPostProps>(post);
  const id = route.params.id;

  useEffect(() => {
    getSinglePostData(id, setPost);
  }, []);
  var title = post?.title;
  var body = post?.body;
  console.log('sdsd', title, body);
  const [updatetitle, setUpdateTitle] = useState(title);
  const [updateBody, setUpdateBody] = useState(body);
  console.log('d', updatetitle, updateBody);

  return (
    <View style={styles.AddDataContainer}>
      <Text style={styles.LabelStyle}>Title</Text>
      <CustomInput
        styles={[styles.InputStyle]}
        values={updatetitle && updatetitle}
      />
      <Text style={styles.LabelStyle}>Body</Text>
      <CustomInput
        styles={[styles.InputStyle, styles.InputDesc]}
        value={updateBody}
      />

      <CustomButton />
    </View>
  );
};

export default UpdatePost;
