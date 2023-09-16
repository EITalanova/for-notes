import style from '../ToolbarDown/ToolbarDown.module.css';
import SearchBox from 'components/SearchBox/SearchBox';

const ToolbarDown = () => {
  return (
    <div className={style.toolbarDownBox}>
      <SearchBox cssClass={style.searchBoxDown} />
    </div>
  );
};

export default ToolbarDown;
