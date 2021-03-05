import React from "react"
import { Form, Field } from "react-final-form"
import { connect } from "react-redux"

import history from "../history"
import { getCounties } from "../actions"

class DataSelect extends React.Component{
    componentDidMount(){
        this.props.getCounties()
    }

    onSubmit = values => {
        console.log(values)
        history.push("/county/"+values.county)
    }

    formRenderHelper = props => {
        return(
            <form onChange={props.handleSubmit}>
                <div>
                    <label>Concelhos:</label>
                    <Field name="county" component="select">
                        <option/>
                        {this.props.counties.map(county => <option key={county} value={county}>{county}</option>)}
                    </Field>
                </div>
            </form>
        )
    }

    render(){
        if(!this.props.counties){
            return <div>Loading...</div>
        }
        else return(
            <Form
            onSubmit={this.onSubmit}
            render={this.formRenderHelper}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counties: state.data.counties
    }
}

export default connect(mapStateToProps, {getCounties})(DataSelect)