import { Action, createReducer, on } from '@ngrx/store';
import { User } from './../interface/user.interface';
import * as UserActions from './user.actions';


export interface UserState {
  user: User;
  isLoggedIn: boolean;
}

const initialUserState: UserState = {
  user : {
    username: '',
  },
  isLoggedIn: false
};

const _userReducer = createReducer(
  initialUserState,
  on(UserActions.logout, () => initialUserState),
  on(UserActions.login, (state, action) => {
    if (state.isLoggedIn) return state;
    return {
      user: action.payload,
      isLoggedIn: true
    }
  })
);

export function userReducer(state = initialUserState, action: Action): UserState {
  return _userReducer(state, action);
}
