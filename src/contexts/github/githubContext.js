import { createContext } from "react";
import { useReducer } from "react";
import GithubReducer from "./githubReducer";
//import { useState } from "react";

const GithubContext = createContext();



export const GithubProvider = ({children})=>{

    //const [users, setUsers] = useState([]);
    //const [loading, setLoading] = useState(true);
    
    const initial_state = {users: [], loading: false};

    const [state, dispatch] = useReducer(GithubReducer, initial_state);

    const github_url = 'https://api.github.com';

    const fetch_users = async ()=> {
        set_loading();
        const response = await fetch(`${github_url}/users`);
        const data = await response.json();
        console.log(data);
        //setUsers(data);
        //setLoading(false);

        dispatch({type: 'GET_USERS', payload: data})
    }

    const search_users = async (text)=>{
        set_loading();
        const params = new URLSearchParams({q: text});
        const response = await fetch(`${github_url}/search/users?${params}`);
        const {items} = await response.json();
        dispatch({type: 'GET_USERS', payload: items});
    }

    const set_loading = ()=>{dispatch({type: 'SET_LOADING'})}

    const clear_users = ()=>{dispatch({type: 'CLEAR_USERS'})};
    
    // <GithubContext.Provider value={{users, loading, fetch_users}}>
    return (
        <GithubContext.Provider value={{users: state.users, loading: state.loading, fetch_users, search_users, clear_users}}>
            {children}
        </GithubContext.Provider>
    );
}

export default GithubContext;
