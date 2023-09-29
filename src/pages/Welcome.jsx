import React from 'react';
import { Link } from 'react-router-dom';

import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';

import { motion } from 'framer-motion';
import style from '../pages/Welcome.module.css';

const Welcome = () => {
  return (
    <div className={style.welcomeBox}>
      <div className={style.welcomeHeader}>
        <button className={style.welcomeLink}>Sing in</button>
        <button className={style.welcomeLink}>Log in</button>
        <ThemeSwitch />
      </div>

      <div className={style.welcomeOverlay}></div>
      <motion.div
        className={style.welcomeTitle}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 7,
            stiffness: 100,
            restDelta: 0.007,
          },
        }}
      >
        App for your notes
      </motion.div>

      <Link to="/main">
        <motion.button
          className={style.welcomeBtn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get started!
        </motion.button>
      </Link>
    </div>
  );
};

export default Welcome;
