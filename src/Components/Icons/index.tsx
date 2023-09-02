import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IIconProps {
  name: string;
  size?: number;
  color?: string;
  handlePress?: (arg: any) => void;
}

const CustomIcon = (props: IIconProps) => {
  const {name, size, color, handlePress} = props;
  return (
    <Icon
      onPress={handlePress}
      name={name}
      size={size ? size : 35}
      color={color ? color : '#fff'}
    />
  );
};

export default CustomIcon;
