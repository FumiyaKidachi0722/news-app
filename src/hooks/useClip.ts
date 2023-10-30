// src/hooks/useClip.ts

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addClip, deleteClip } from 'store/userSlice';
import { Article } from 'utils/types';

export const useClip = (article: Article) => {
  const dispatch = useDispatch();
  const clips = useSelector((state: RootState) => state.user.clips);
  const isCliped = clips.some((clip) => clip.url === article.url);

  const toggleClip = () => {
    if (isCliped) {
      dispatch(deleteClip(article));
    } else {
      dispatch(addClip(article));
    }
  };

  return { isCliped, toggleClip };
};
