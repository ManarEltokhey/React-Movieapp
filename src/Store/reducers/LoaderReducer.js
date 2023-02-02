const InitialValues = {
    isLoading: true
}

export default function LoaderReducer(state = InitialValues, action){

    switch(action.type){
        case "LOADER":
            return{
                ...state,
                isLoading: action.payload 
            }
        default: 
            return state

    }

}