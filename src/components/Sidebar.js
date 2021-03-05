import React from "react"

import { Link } from "react-router-dom"

class Sidebar extends React.Component {
    render(){
        return(
            <div className="thin ui left vertical inverted sidebar labeled icon menu overlay" style={{"zIndex": "999"}}>
                <Link to="/" className="item">CORONA TRACKER</Link>
                <br/>
                <Link to="/about" className="item">About</Link>
            </div>
        )
    }
}

export default Sidebar