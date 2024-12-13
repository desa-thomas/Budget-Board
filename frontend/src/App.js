//Import components
import SideBar from './Components/SideBar';
import ContentArea from './Components/ContentArea';

//Import Context
import { SidebarContext, SidebarDispatchConte} from './SidebarContext';


function App() {
  return (
    <div className = "frame">
      <SideBar/>
      <ContentArea/>
    </div>
  );
}

export default App;
