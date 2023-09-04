import {IPostProps} from '../../Screens/Home';
import {
  ADD_DATA,
  DISPLAY_DATA,
  DISPLAY_USER,
  REMOVE_DATA,
  UPDATE_DATA,
} from '../Constants';

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

export const AddData = (data: IPostProps) => {
  console.log('from add', data);
  return async (dispatch: any) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: ADD_DATA,
          payload: data,
        }),
      );
  };
};

export const UpdateData = (updatedData: IPostProps) => {
  let id: number = updatedData?.id;
  console.log('mmmeeeeee', id);
  return async (dispatch: any) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
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
      )
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  };
};

export const DeleteData = (id: number) => {
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

export const fetchUsers = () => {
  return async (dispatch: any) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log('myuserdata', data);
    dispatch({
      type: DISPLAY_USER,
      payload: data,
    });
    // .then(res => res.json())
    // .then(data =>
    //   dispatch({
    //     type: DISPLAY_USER,
    //     payload: data,
    //   }),
    // );
  };
};
