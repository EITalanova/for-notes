import SearchBox from 'components/SearchBox/SearchBox';
import Workspace from 'components/Workspace/Workspace';
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';

import style from '../Toolbar/Toolbar.module.css';

const Toolbar = () => {
  return (
    <div className={style.toolbarBox}>
      <Workspace />
      <SearchBox cssClass={style.searchBox} />
      <ThemeSwitch />
    </div>
  );
};

export default Toolbar;
