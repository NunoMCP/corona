import React from "react"

import { Link } from "react-router-dom"

class Sidebar extends React.Component {
    render(){
        return(
            <div className="thin ui left vertical inverted sidebar labeled icon menu overlay" style={{"zIndex": "999"}}>
                <p className="item" style={{color: "white"}}>CORONA TRACKER</p>
                <br/>
                <Link to="/county">Select county</Link>
            </div>
        )
    }
}

export default Sidebar