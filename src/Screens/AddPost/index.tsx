import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/Input';
import CustomButton from '../../Components/Button';
import {useDispatch} from 'react-redux';
import {AddData} from '../../Redux/actions/Actions';
import {RootStackProps} from '../../Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IPostProps} from '../Home';

type Props = NativeStackScreenProps<RootStackProps, 'AddData'>;

const AddDataForm = ({navigation}: Props) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const item: IPostProps = {
      id: Math.floor(Math.random() * 1000),
      title,
      body,
      userId: 2,
    };

    dispatch(AddData(item) as any);
    navigation.navigate('Home');
    setTitle('');
    setBody('');
  };

  return (
    <View style={styles.AddDataContainer}>
      <Text style={styles.LabelStyle}>Title</Text>
      <CustomInput
        styles={[styles.InputStyle]}
        value={title}
        onChangeValue={setTitle}
      />
      <Text style={styles.LabelStyle}>Body</Text>
      <CustomInput
        styles={[styles.InputStyle, styles.InputDesc]}
        value={body}
        onChangeValue={setBody}
      />
      <CustomButton handlePress={handleSubmit} />
    </View>
  );
};

export const styles = StyleSheet.create({
  AddDataContainer: {
    backgroundColor: '#191a23',
    flex: 1,
    paddingLeft: 30,
    paddingVertical: 20,
  },

  LabelStyle: {
    color: '#fff',
    fontSize: 22,
    marginTop: 10,
  },

  InputStyle: {
    fontSize: 20,
    marginTop: 10,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginRight: 20,
  },

  InputDesc: {
    minHeight: 120,
  },
});

export default AddDataForm;
