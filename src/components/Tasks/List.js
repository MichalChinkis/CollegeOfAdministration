import Task from "./Task.js"
const List = (props)=>{
    return(
        <div>
            <h1>רשימת המשימות שלי</h1>
            <ul>{props.tasks.map((task)=>(
                <Task task={task}/>
            ))}</ul>
        </div>
    )
}

export default List