var initialData={
    name:"",
    focus:{},
    playlist:{},
    India:{},
    search:{},
    prop:{}
};
const basicreducer = (state = initialData,action)=>{
    if(action.type==="focus"){
        return{
            ...state,focus:action.datas
        }
    }
    if(action.type==="playlist"){
        return{
            ...state,playlist:action.datas
        }
    }
    if(action.type==="India"){
        return{
            ...state,India:action.datas
        }
    }
    if(action.type==="search"){
        return{
            ...state,search:action.datas
        }
    }
    if(action.type==="props"){
        return{
            ...state,prop:action.datas
        }
    }
    return state;

}
export default basicreducer;