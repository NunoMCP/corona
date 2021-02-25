import React from "react"

class Sidebar extends React.Component {
    render(){
        return(
            <div className="thin ui left vertical inverted sidebar labeled icon menu overlay" style={{"zIndex": "999"}}>
                <p className="item" style={{color: "white"}}>CORONA TRACKER</p>
                <br/>
                <a href="#" className="item">BITCHES AINT SHIT BUT HOES AND TRICKS</a>
                <a href="#" className="item">2</a>
                <a href="#" className="item">3</a>
            </div>
        )
    }
}

export default Sidebar