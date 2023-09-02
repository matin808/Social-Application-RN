import {ADD_DATA} from '../Constants';

export const AddData = () => {
  return async (dispatch: any) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    data.length = 10;
    dispatch({
      type: ADD_DATA,
      payload: data,
    });
  };
};
