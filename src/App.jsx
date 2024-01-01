import Tools from "./components/Tools/Tools";
import WebLayout from "./components/WebLayout/WebLayout";
import { DragDropContext } from 'react-beautiful-dnd';
function App() {
  return (

    <DragDropContext>

    <div className="grid grid-cols-12 min-h-screen">

      {/* sidebar */}
      <div className="col-span-3 bg-red-700">
        <Tools />
      </div>
      {/* content */}
      <div className="col-span-9 bg-blue-700">
        <WebLayout />
      </div>
    </div>
    </DragDropContext>
  
  );
}

export default App;
