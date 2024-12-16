//Import components
import Sidebar from "./Components/Sidebar";
import ContentArea from "./Components/ContentArea";

//Import Context
import { SidebarContextProvider } from "./Contexts/SidebarContext";

function App() {

  return (
    <div className="frame">
      {/* Provide a context with the current sidebar's state (open, close) and what dashboard is selected */}
      <SidebarContextProvider>
        <Sidebar/>
        <ContentArea />
      </SidebarContextProvider>
    </div>
  );
}

export default App;
