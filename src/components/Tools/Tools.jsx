/* eslint-disable react/no-unknown-property */
import { Draggable } from "react-beautiful-dnd";
const Tools = () => {
  return (<Draggable draggableId="text">
    {(provided, snapshot)=> (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging={snapshot.isDragging}>
            <p>Task one</p>
            <p>Task Two</p>
            <p>Task Three</p>
        </div>
    )}
  </Draggable>)
};
export default Tools;
