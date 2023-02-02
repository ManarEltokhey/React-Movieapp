const InitialValues = {
    theme: "Dark"
}

export default function ThemeReducer(state = InitialValues, action){

    switch(action.type){
        case "CHANGETHEME":
            return{
                ...state,
                theme: action.payload 
            }
      
        default: 
            return state

    }

}