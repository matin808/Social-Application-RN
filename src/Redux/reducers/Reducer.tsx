import {IPostProps} from '../../Screens/Home';
import {DISPLAY_DATA, REMOVE_DATA, UPDATE_DATA} from '../Constants';

export interface IInitialProps {
  posts: IPostProps[];
}

interface IActionProps {
  type: string;
  payload: IPostProps[];
}
const initialStore: IInitialProps = {
  posts: [],
};

export const Reducers = (state = initialStore, actions: IActionProps) => {
  switch (actions.type) {
    case DISPLAY_DATA: {
      return {posts: [...state.posts, ...actions.payload]};
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

    default:
      return state;
  }
};
