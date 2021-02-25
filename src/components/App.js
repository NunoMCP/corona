import React from "react"

import DataList from "./DataList"
import Sidebar from "./Sidebar"

class App extends React.Component {
    toggleSidebar = () => {
        window.$('.ui.sidebar').sidebar('toggle')
    }
    
    render(){
        if(!true){
            return <div>loading data</div>
        }
        else{
            return(
                <>
                <i onClick={this.toggleSidebar} className="plus square big outline icon"></i>
                <Sidebar/>
                <div className="ui container pusher">
                    <DataList/>
                </div>
                </>
            )
        }
    }
}

export default App