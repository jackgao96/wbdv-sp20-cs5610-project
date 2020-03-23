import React from "react";

import {combineReducers,createStore} from "redux";
import {Provider} from "react-redux";
import stock from "./SearchReducer";
import SearchClientComponent from "./SearchClientComponent";
const reducers = combineReducers({
    stock
})
const store = createStore(reducers)
class SearchTemplateClient extends React.Component {

    render() {
        return (
            <Provider store={store}>
           <SearchClientComponent/>
            </Provider>)
                }
}
export default  SearchTemplateClient
