import {IPostProps} from '../../Screens/Home';
import {
  ADD_DATA,
  DISPLAY_DATA,
  DISPLAY_USER,
  REMOVE_DATA,
  UPDATE_DATA,
} from '../Constants';

export interface IInitialProps {
  posts: IPostProps[];
  users: any;
}

interface IActionProps {
  type: string;
  payload: IPostProps[] | IPostProps;
}
const initialStore: IInitialProps = {
  posts: [],
  users: [],
};

export const Reducers = (state = initialStore, actions: IActionProps) => {
  switch (actions.type) {
    case DISPLAY_DATA: {
      // return {posts: [...actions.payload]};
      return {
        posts: Array.isArray(actions.payload)
          ? [...actions.payload]
          : actions.payload,
      };
    }

    case ADD_DATA: {
      return {posts: [...state.posts, actions.payload]};
    }

    case UPDATE_DATA: {
      let postIndex = state.posts.findIndex(d => d.id === actions.payload.id);
      let tempData = [...state.posts];
      tempData.splice(postIndex, 1, actions.payload as any);
      return {posts: tempData};
    }

    case REMOVE_DATA: {
      const tempData = state.posts.filter(
        d => d.id !== (actions.payload as any),
      );
      return {posts: tempData};
    }

    case DISPLAY_USER: {
      // return {...state, users: [...actions.payload]};

      return {
        ...state,
        users: Array.isArray(actions.payload)
          ? [...actions.payload]
          : actions.payload,
      };
    }

    default:
      return state;
  }
};
