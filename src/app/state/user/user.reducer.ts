import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface User {
  displayName: string;
  email: string;
  metadata?: {
    creationTime?: string;
    lalastSignInTimest?: string;
  };
  photoURL: string;
  uid: string;
}
export interface AuthState {
  user: User;
  uid: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: {
    displayName: 'asd',
    email: 'asd',
    photoURL: 'dg',
    uid: 'asd',
  },
  uid: null,
  error: null,
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.getUser, (state) => ({ ...state, loading: true })),
  on(UserActions.logIn, (state) => ({ ...state, loading: true })),
  on(UserActions.logInSuccess, (state, { user }) => ({
    ...state,
    user: user,
    loading: false,
  })),
  on(UserActions.logInFailed, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),
  on(UserActions.setStuff, (state) => ({
    ...state,
    user: { displayName: 'asd', email: 'asd', photoURL: 'dg', uid: 'asd' },
  }))
);
