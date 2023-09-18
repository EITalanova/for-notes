import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelector';


export const useTheme = () => {
    const theme = useSelector(selectTheme);
//   const [theme, setTheme] = useState('light');

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme };
};