import ActionCreators from '../redux/action-creators/'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";



export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}

