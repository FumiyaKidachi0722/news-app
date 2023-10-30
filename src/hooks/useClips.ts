// src/hooks/useClips.ts

import { useSelector } from 'react-redux';
import { RootState } from 'utils/types';

export const useClips = () => {
  const clips = useSelector((state: RootState) => state.user.clips);
  return clips;
};
