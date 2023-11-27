import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../types/reduxType";


const useAppSelrctyor:TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>()

export {
    useAppSelrctyor,
    useAppDispatch
}