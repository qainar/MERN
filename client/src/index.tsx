import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./store/store";
import {BrowserRouter} from 'react-router-dom'

interface State {
    store : Store
}

const store = new Store()

export const Context = createContext<State>({
    store,
})

ReactDOM.render(

    <Context.Provider value={{
        store
    }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>,

    document.getElementById('root')

)

