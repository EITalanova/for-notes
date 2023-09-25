import SearchBox from 'components/SearchBox/SearchBox';

import style from '../ToolbarDown/ToolbarDown.module.css';

const ToolbarDown = () => {
  return (
    <div className={style.toolbarDownBox}>
      <SearchBox cssClass={style.searchBoxDown} />
    </div>
  );
};

export default ToolbarDown;
