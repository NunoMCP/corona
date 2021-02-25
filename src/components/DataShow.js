import React from "react"

class dataShow extends React.Component{
    render(){
        return(
            <div className="column">
                <h2 class="ui center aligned icon header">
                    <i class="circular users icon"></i>
                    {this.props.text}{this.props.value}<br/>
                    valores anteriores em q tenho de fazer a diferença
                </h2>
            </div>
        )
    }
}

export default dataShow