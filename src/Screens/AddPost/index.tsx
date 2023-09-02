import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomInput from '../../Components/Input';
import CustomButton from '../../Components/Button';

const AddDataForm = () => {
  // const screenHight = Dimensions.get('window').width;
  // const handlePress = () => {};
  return (
    <View style={styles.AddDataContainer}>
      <Text style={styles.LabelStyle}>Title</Text>
      <CustomInput styles={[styles.InputStyle]} />
      <Text style={styles.LabelStyle}>Body</Text>
      <CustomInput styles={[styles.InputStyle, styles.InputDesc]} />

      <CustomButton />
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
