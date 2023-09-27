import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { setTheme } from 'redux/theme/themeSlice';
import { useTheme } from 'components/hooks/useTheme';

import { motion } from 'framer-motion';
import style from '../ThemeSwitch/ThemeSwitch.module.css';

const ThemeSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleThemeClick = () => {
    theme === 'dark' ? dispatch(setTheme('light')) : dispatch(setTheme('dark'));
    setIsOn(!isOn);
  };

  return (
    <div
      className={style.themeSwitch}
      data-ison={isOn}
      onClick={handleThemeClick}
    >
      <motion.div className={style.themeHandle} layout transition={spring} />
    </div>
  );
};

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 17,
};

export default ThemeSwitch;
