import {IPostProps} from '../../Screens/Home';
import {DISPLAY_DATA, REMOVE_DATA, UPDATE_DATA} from '../Constants';

export const DisplayData = () => {
  return async (dispatch: any) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();

    data.length = 10;
    dispatch({
      type: DISPLAY_DATA,
      payload: data,
    });
  };
};
type UpdateDataProps = {
  updatedData: IPostProps;
};

export const UpdateData = (updatedData: UpdateDataProps) => {
  let id = updatedData?.id;
  console.log('mmmeeeeee', id);
  return async (dispatch: any) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: UPDATE_DATA,
          payload: data,
        }),
      );
  };
};

export const DeleteData = id => {
  return async (dispatch: any) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then(
      dispatch({
        type: REMOVE_DATA,
        payload: id,
      }),
    );
  };
};
