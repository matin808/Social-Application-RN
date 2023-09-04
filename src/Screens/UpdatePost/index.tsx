import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/Input';
import CustomButton from '../../Components/Button';
import {styles} from '../AddPost';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackProps} from '../../Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateData} from '../../Redux/actions/Actions';
import {IPostProps} from '../Home';

type Props = NativeStackScreenProps<RootStackProps, 'UpdatePost'>;
type titleProps = string;
const UpdatePost = ({route, navigation}: Props) => {
  const id = route.params.id;
  const postData = useSelector((data: any) =>
    data.reducers.posts.filter((d: any) => d.id === id),
  );
  let newData = postData[0];
  const {title, body} = newData;
  const [updatetitle, setUpdateTitle] = useState<titleProps>(title);
  const [updateBody, setUpdateBody] = useState<titleProps>(body);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const updatedData: IPostProps = {
      id: newData.id,
      title: updatetitle,
      body: updateBody,
      userId: newData?.userId,
    };
    dispatch(UpdateData(updatedData) as any);
    navigation.navigate('Home');
    setUpdateTitle('');
    setUpdateBody('');
    console.log('zzz', updatedData);
  };

  return (
    <View style={styles.AddDataContainer}>
      <Text style={styles.LabelStyle}>Title</Text>
      <CustomInput
        styles={[styles.InputStyle]}
        value={updatetitle}
        onChangeValue={setUpdateTitle}
      />
      <Text style={styles.LabelStyle}>Body</Text>
      <CustomInput
        styles={[styles.InputStyle, styles.InputDesc]}
        value={updateBody}
        onChangeValue={setUpdateBody}
      />

      <CustomButton handlePress={handleSubmit} />
    </View>
  );
};

export default UpdatePost;
