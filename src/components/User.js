import { userData } from "./userData";
const User = (props) =>{
    return (
        <div id="user" data-testid="user">
          <h2>
            {userData.firstName+" "+userData.lastName}
          </h2>
          <p>{userData.title}</p>
        </div>
      );
}

export default User;