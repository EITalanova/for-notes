import { ReactComponent as DeleteIcon } from '../assets/svg/delete.svg';
import { ReactComponent as AddIcon } from '../assets/svg/add.svg';
import { ReactComponent as EditIcon } from '../assets/svg/edit.svg';

import style from '../Workspace/Workspace.module.css';

const Workspace = ({
  disabledBtn,
  handleAddNote,
  handleShowModalDelete,
  handleDisabled,
}) => {
  return (
    <div className={style.workspaceBox}>
      <button className={style.workspaceBtn} onClick={handleAddNote}>
        <AddIcon />
      </button>
      <button
        disabled={disabledBtn}
        className={style.workspaceBtn}
        onClick={handleShowModalDelete}
      >
        <DeleteIcon />
      </button>
      <button
        disabled={disabledBtn}
        className={style.workspaceBtn}
        onClick={handleDisabled}
      >
        <EditIcon />
      </button>
    </div>
  );
};

export default Workspace;
