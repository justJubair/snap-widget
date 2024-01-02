/* eslint-disable react/prop-types */
import { Draggable, Droppable } from "react-beautiful-dnd";

const Sidebar = ({items}) => {
    return (
        <div>
          <h2>Sidebar</h2>
          <Droppable droppableId="sidebar">
            {(provided)=> (
              <div {...provided.droppableProps} ref={provided.innerRef}>
 {items?.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={{
                    border: '1px solid #ddd',
                    marginBottom: '8px',
                    padding: '8px',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    userSelect: 'none',
                    ...provided.draggableProps.style,
                  }}
                >
                  {item.type === 'text' ? <p>{item.content}</p> : null}
                  {item.type === 'image' ? <img src={item.src} alt={`Image ${index}`} /> : null}
                </div>
              )}
            </Draggable>
          ))}
              {provided.placeholder}
              </div>
            )}

         
          </Droppable>
        </div>
      );
    }
export default Sidebar;