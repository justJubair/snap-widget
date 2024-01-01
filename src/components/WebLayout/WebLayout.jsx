/* eslint-disable react/no-unknown-property */
import { Droppable } from 'react-beautiful-dnd';
const WebLayout = () => {
    return(
       
           ( <Droppable droppableId='1'>
                {
                    (provided,snapshot)=>{
                        <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                            {/* content */}
                            {provided.placeholder}
                        </div>
                    }
                }
            </Droppable>)
        
    )}
export default WebLayout;