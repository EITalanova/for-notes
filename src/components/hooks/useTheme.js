import { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelector';
import { setTheme } from 'redux/theme/themeSlice';

export const useTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = isDarkTheme ? 'dark' : 'light';

  useLayoutEffect(() => {
    dispatch(setTheme(defaultTheme));
  }, []);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, defaultTheme };
};
