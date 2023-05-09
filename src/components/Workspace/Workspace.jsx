import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addNote } from "store/noteSlice";

const Workspace = () => {
    const dispatch = useDispatch();

    const addTask = () => dispatch(addNote());

    return (
        <button onClick={addTask}>+</button>
    )
}

export default Workspace;







// const DeleteNote = () => {

//     return (
//         <button>+</button>
//     )
// }

// export default DeleteNote;

// const EditNote = () => {

//     return (
//         <button>+</button>
//     )
// }

// export default EditNote;