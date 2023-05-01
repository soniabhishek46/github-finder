import { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from '../../contexts/github/githubContext';

//Added comment to test if commiting from code space is possible.
function UserResults(){

    const {users, loading, fetch_users} = useContext(GithubContext);


    if(loading){
        return (<h4>Loading data, Please wait...</h4>);
    }
    else{
        return (
            <div className="grid-container container-w">
                {users.map((user)=>{
                    return(<UserItem key={user.id} user={user}/>);
                })}
            </div>
        );
    }
}

export default UserResults;