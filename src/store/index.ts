import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import {
  PERSIST,
  persistReducer,
  persistStore,
  REHYDRATE,
} from 'redux-persist';
import userReducer from 'store/userSlice';

// ペルシスト設定
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
};

// ルートレデューサー
export const rootReducer = combineReducers({
  user: userReducer,
});

// ペルシストレデューサー
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ストアの作成
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE],
      },
    }).concat(logger),
});

// ペルシストストアの作成
export const persistor = persistStore(store, null, () => {
  console.log('Rehydration complete');
});

// ログ出力関数
const logStoreUpdate = () => {
  console.log('Store updated:', JSON.stringify(store.getState(), null, 2));
};

// ストアの状態が変更されたときにログを出力
store.subscribe(logStoreUpdate);

// 初期状態のログ出力
AsyncStorage.getItem('persist:root').then((value) => {
  console.log(JSON.parse(value || '{}'));
});
