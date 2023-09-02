import {IPostProps} from '../../Screens/Home';
import {ADD_DATA} from '../Constants';

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
    case ADD_DATA: {
      return {posts: [...state.posts, ...actions.payload]};
    }

    default:
      return state;
  }
};
