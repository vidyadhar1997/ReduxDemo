//initial state

const iState={
    name:"dhiraj",
    wishes:['eat', 'code', 'brain']
}


//first we create reducer and assign this initial state to reducer
const reducer=(state=iState,action)=>{
    //action is coming from app.js with the help of dispatcher to change or update value
    console.log(action)
    if(action.type==='CHANGE_NAME'){
        return{
            ...state,//sprade operator it is used to store the object ie name,wishes
            name:action.payload //it overide the name with updated value
        }
    }
    return state;
}

export default reducer;