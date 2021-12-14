import { User } from './../interface/user.interface';
import { createAction, props } from "@ngrx/store";

export const login = createAction('[USER] Login', props<{ payload: User}>());
