// App.js
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Sidebar from './components/Sidebar/Sidebar';
import WebsiteLayout from './components/WebsiteLayout/WebsiteLayout';


const App = () => {
  const [sidebarItems, setSidebarItems] = useState([
    { id: 'text1', type: 'text', content: 'Draggable Text 1' },
    { id: 'text2', type: 'text', content: 'Draggable Text 2' },
    { id: 'image1', type: 'image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe45foIK2CQaLQAIBbGo3iHCH79A5Avja1BG_EyRoPdUKoQmR_PaiZ5L_T_AGVXExcT1M&usqp=CAU' },
    // Add more draggable items as needed
  ]);

  const [droppedItems, setDroppedItems] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedDroppedItems = Array.from(droppedItems);
    const [draggedItem] = updatedDroppedItems.splice(result.source.index, 1);
    updatedDroppedItems.splice(result.destination.index, 0, draggedItem);

    setDroppedItems(updatedDroppedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div style={{ display: 'flex' }}>
    
    <Sidebar items={sidebarItems}/>
        <WebsiteLayout items={droppedItems} />
    </div>
      </DragDropContext>
  );
};

export default App;
