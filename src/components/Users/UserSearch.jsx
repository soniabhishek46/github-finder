import { useState } from "react";
import { useContext } from "react";
import GithubContext  from '../../contexts/github/githubContext';


const UserSearch = ()=>{

    const [text, setText] = useState('');
    const {users, search_users, clear_users} = useContext(GithubContext);

    const handleTextChange = (e)=>{
        setText(e.target.value);
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();

        if (text === ''){
            alert("Please enter something...");
        }
        else{
            //to do
            search_users(text);
            setText('');
        }
    }

    const clearInput = ()=>{
        clear_users();
        setText('');
    }

    return(
        <div className="container-w">
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" name="search" className="search-input" onChange={handleTextChange} value={text}/>
                        <button className="go-btn" type="submit">Go...</button>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
            <div>
                <button className="clear-btn" onClick={clearInput}>Clear</button>
            </div>
            )}
        </div>
    );
}

export default UserSearch;