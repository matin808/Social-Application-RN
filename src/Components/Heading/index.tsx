import {Text} from 'react-native';
import React from 'react';

interface IHeadingProps {
  title: string;
  style?: Object;
}

const defaultProps: IHeadingProps = {
  title: 'SSntagram',
};

const CustomHeading = (props: IHeadingProps) => {
  const {title, style} = props;
  return <Text style={style}>{title}</Text>;
};

CustomHeading.defaultProps = defaultProps;

export default CustomHeading;
