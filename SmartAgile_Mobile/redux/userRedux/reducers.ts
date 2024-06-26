import { SET_USER } from "./actions";

interface Action{
    type : string,
    payload : any
}

export interface State{
    user : null | {
        username : string;
        email:string;
        organization:number;
        is_owner:boolean;
        is_staff : boolean;
        
    
    }
}

const initialState : State = {
    user : null
}

const reducers = (state : State = initialState , action : Action) : State =>{
    switch(action.type){
        case 'SET_USER':
            console.log('SET')
            return {
                ...state,
                user : action.payload
            };
        default:
            return state;
    }
}

export default reducers;