import Welcome from "./classComponent"
const Welcome2=(props)=>{
    const arr = ["aaa","bbb","ccc"]
    const rand = (max) =>{
       return Math.floor(Math.random() * (max +1));
    }
   
    return (
        <div>
          <Welcome name="Michal" />  
          <h1>Hello, {props.children}</h1> 
          <h3>here i'm going to show you something amazinggg {arr[rand(2)]}</h3>
        </div>
      );
}

export default Welcome2


