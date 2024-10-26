'use client'

import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistStore } from 'redux-persist'
import { headerReducer } from './features/headerSlice'
import { listingReducer } from './features/listingSlice'
import { idxBrokerApi } from './services/idxBrokerApi'

const rootReducer = combineReducers({
  header: headerReducer,
  listing: listingReducer,
  [idxBrokerApi.reducerPath]: idxBrokerApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }).concat(idxBrokerApi.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppSelector = typeof store.getState

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
