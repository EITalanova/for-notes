import style from '../Toolbar/Toolbar.module.css';
import SearchBox from 'components/SearchBox/SearchBox';
import Workspace from 'components/Workspace/Workspace';

const Toolbar = () => {
  return (
    <div className={style.toolbarBox}>
      <Workspace />
      <SearchBox cssClass={style.searchBox}/>
    </div>
  );
};

export default Toolbar;
