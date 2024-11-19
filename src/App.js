import logo from './logo.svg';
import './App.css';
import Welcome from './components/classComponent';
import Welcome2 from './components/functionConponent';
import User from './components/User';
import ShowData from './components/showData';
import Card from './components/Card.js'
// import List from './components/List.js'
import List from './components/Tasks/List.js'

function App() {
  const items = ["בננה","אגס","תפוח"]
  const tasks = ["ללמוד React", "לסיים שיעורי בית", "לשתות קפה"];

  return (
    <div>
 {/* <Welcome name = "Sara"/>
 <Welcome2>אני הילדים של הקומפוננטה השניה</Welcome2> */}
   {/* <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User /> */}
{/* <ShowData/> */}
{/* <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:michalcs0533@gmail.com">Email Michal</a>
        </p>
      </Card> */}
      {/* <h1 dir='rtl'>רשימת הקניות שלי</h1>
      <List items = {items}/> */}
<List tasks = {tasks}/>
 </div>
  );
}

export default App;
