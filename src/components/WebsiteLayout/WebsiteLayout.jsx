/* eslint-disable react/prop-types */
import { Droppable } from "react-beautiful-dnd";



const WebsiteLayout = ({items}) => {
 
    return (
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                border: '1px solid #ccc',
                minHeight: '300px',
                padding: '10px',
              }}
            >
             
              {/* Dropped items go here */}
              {items?.map((item, index) => (
                <div key={item?.id}>
                  {item?.type === 'text' && <p>{item?.content}</p>}
                  {item?.type === 'image' && <img src={item?.src} alt={`Image ${index}`} />}
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      );
    }
export default WebsiteLayout;