// Redux ToolkitからcreateSliceをインポート
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 初期状態を定義
const initialState = {
  clips: [] as Article[],
};

interface Article {
  author: string;
  content: string | null;
  description: string;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

/**
 * userSliceを作成
 * name: スライスの名前
 * initialState: 初期状態
 * reducers: 状態を変更する関数の定義
 */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addClip: (state, action: PayloadAction<Article>) => {
      const newClip = action.payload;
      state.clips.push(newClip);
    },
    deleteClip: (state, action: PayloadAction<Article>) => {
      const deleteClip = action.payload;
      const currentClips = state.clips;
      const filteredClips = currentClips.filter(
        (clip) => clip.url !== deleteClip.url,
      );
      state.clips = filteredClips;
    },
  },
});

// アクションをエクスポート
export const { addClip, deleteClip } = userSlice.actions;

// スライスのリデューサーをエクスポート
export default userSlice.reducer;
