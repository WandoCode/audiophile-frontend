import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import formReducer from '../feature/form/form.reducer'

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
