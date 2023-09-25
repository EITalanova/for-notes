import { useDispatch } from 'react-redux';

import { setTheme } from 'redux/theme/themeSlice';
import { useTheme } from 'components/hooks/useTheme';

import style from '../ThemeSwitch/ThemeSwitch.module.css';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleThemeClick = () => {
    theme === 'dark' ? dispatch(setTheme('light')) : dispatch(setTheme('dark'));
  };

  return (
    <label className={style.themeSwitch}>
      <input
        type="checkbox"
        className={style.themeCheckbox}
        onChange={handleThemeClick}
      />
      <span className={style.themeSlider}></span>
    </label>
  );
};

export default ThemeSwitch;
