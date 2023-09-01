import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IIconProps {
  name: string;
  size?: number;
  color?: string;
}

const CustomIcon = (props: IIconProps) => {
  const {name, size, color} = props;
  return (
    <Icon name={name} size={size ? size : 35} color={color ? color : '#fff'} />
  );
};

export default CustomIcon;
