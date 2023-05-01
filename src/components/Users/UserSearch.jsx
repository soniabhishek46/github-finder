import { useState } from "react";


const UserSearch = ()=>{

    const [text, setText] = useState('');

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
            setText('');
        }
    }

    const clearInput = ()=>{
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
            <div>
                <button className="clear-btn" onClick={clearInput}>Clear</button>
            </div>
        </div>
    );
}

export default UserSearch;