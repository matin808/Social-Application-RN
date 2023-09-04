import {TextInput} from 'react-native';
import React from 'react';

interface IInputProps {
  styles: Object;
  value?: any;
  onChangeValue: (arg: any) => void;
}

const CustomInput = (props: IInputProps) => {
  const {styles, value, onChangeValue} = props;
  return (
    <TextInput
      style={styles}
      multiline={true}
      value={value && value}
      onChangeText={txt => onChangeValue(txt)}
    />
  );
};

export default CustomInput;
