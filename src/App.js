import './App.css';
import School from './Components/SchoolComponent/School.js';
import PersonDetails from './Components/PropsComponents/PersonDetails.js'
import PersonalDFile from './Components/PersonalDetailsFileComponents/PersonalDFile.js'
import RenderingList from './Components/RenderingListCompoonents/RenderingList.js'
function App() {
  return (
    <div>
      {/* <PersonDetails name={"shira"} age={20}/> */}
      {/* <PersonalDFile/> */}
      {/* <RenderingList/> */}
      <School/>
    </div>
  );
}

export default App;
