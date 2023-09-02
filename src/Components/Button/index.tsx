import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface IButtonProps {
  title: string;
  handlePress?: (arg: any) => void;
  styles?: Object;
}

const defaultProps: IButtonProps = {
  title: 'Submit',
  handlePress: () => console.log('submitted'),
};

const CustomButton = (props: IButtonProps) => {
  const {title, handlePress} = props;
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.ButtonTextStyle} onPress={handlePress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = defaultProps;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  ButtonTextStyle: {
    color: '#fff',
  },
});

export default CustomButton;
