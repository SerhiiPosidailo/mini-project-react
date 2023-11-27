import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {store} from "../redux/store";


const useAppSelrctyor:TypedUseSelectorHook<typeof store.getState> = useSelector;
const useAppDispatch = () => useDispatch<typeof store.dispatch>()

export {
    useAppSelrctyor,
    useAppDispatch
}