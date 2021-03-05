import React from "react"
import {Router, Route} from "react-router-dom"

import DataList from "./DataList"
import Sidebar from "./Sidebar"
import DataSelect from "./DataSelect"
import history from "../history"

class App extends React.Component {
    toggleSidebar = () => {
        window.$('.ui.sidebar').sidebar('toggle')
    }
    
    render(){
        return(
            <>
            <Router history={history}>
                <i onClick={this.toggleSidebar} className="plus square big outline icon"></i>
                <Sidebar/>
                <Route path="/" exact component={DataList}/>
                <Route path="/county/" component={DataList}/>
            </Router>
            </>
        )
    }
}

export default App