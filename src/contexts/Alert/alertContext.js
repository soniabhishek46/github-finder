import { createContext, useReducer } from "react";
import AlertReducer from "./alertReducer";

const AlertContext = createContext();

export const AlertProvider = ({children})=>{

    const initial_state = null;

    const [state, dispatch] = useReducer(AlertReducer, initial_state);

    const set_alert = (msg, type)=>{
        dispatch({
            type:'SET_ALERT',
            payload: {msg, type}
        });

        setTimeout(()=>dispatch({type:'REMOVE_ALERT'}), 3000);

    }

    return (
        <AlertContext.Provider value = {{alert: state, set_alert}}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;

