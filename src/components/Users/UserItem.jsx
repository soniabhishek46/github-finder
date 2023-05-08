import { Link } from "react-router-dom";


function UserItem({user}){
    return(
        <div className="card">
            <div className="flex-horizontal">
                <div className="profile-img-box">
                    <img className="profile-img" src={user.avatar_url} alt="Profile Img" />
                </div>
                <div className="flex-vertical">
                    <h4>{user.login}</h4>
                    <Link className="brand-link" to={`/users/${user.login}`}>Link</Link>
                </div>
            </div>
        </div>
    );
}

export default UserItem;