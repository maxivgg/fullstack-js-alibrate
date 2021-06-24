import { combineReducers } from "redux";
import { myLibraryReducer } from "./myLibraryReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    myLibrary: myLibraryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
