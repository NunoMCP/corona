import "./DataList.css"

import React from "react"
import DataShow from "../components/DataShow"
import { getData, getBeforeData } from "../actions"
import { connect } from "react-redux"

class DataList extends React.Component {
    componentDidMount(){
        var today = new Date()
        //O API só dá update à meia noite por isso é necessário realizar getDate()-1
        var dd = today.getDate()-1
        var ddBefore = today.getDate()-2
        var mm = today.getMonth()+1
        var yyyy = today.getFullYear()
        if(dd<10) 
        {
            dd='0'+dd
        } 
        if(mm<10) 
        {
            mm='0'+mm
        } 
        today = dd+'-'+mm+'-'+yyyy
        var yesterday = ddBefore+'-'+mm+'-'+yyyy
        this.props.getBeforeData(yesterday)
        this.props.getData(today)
    }

    valueHelper(arg, isMoreGood) {
        let customClassString
        let isMoreThanZero = (this.props.data.today[arg][this.props.data.todayIndex] - this.props.data.yesterday[arg][this.props.data.yesterdayIndex]) > -1
        
        if(isMoreGood && isMoreThanZero){
            customClassString = "green"
        } else if (isMoreGood && !isMoreThanZero){
            customClassString = "red"
        } else if (!isMoreGood && isMoreThanZero){
            customClassString = "red"
        } else {
            customClassString = "green"
        }

        if((this.props.data.today[arg][this.props.data.todayIndex] - this.props.data.yesterday[arg][this.props.data.yesterdayIndex]) > -1){
            return (
                <div>
                    <h3 style={{display: "inline"}}>{this.props.data.today[arg][this.props.data.todayIndex]}</h3>
                    <h3 className={customClassString} style={{display: "inline"}}>(+{this.props.data.today[arg][this.props.data.todayIndex] - this.props.data.yesterday[arg][this.props.data.yesterdayIndex]})</h3>
                </div>
            )
        }else return(
            <div>
                <h3 style={{display: "inline"}} >{this.props.data.today[arg][this.props.data.todayIndex]}</h3>
                <h3 className={customClassString} style={{display: "inline"}} >({this.props.data.today[arg][this.props.data.todayIndex] - this.props.data.yesterday[arg][this.props.data.yesterdayIndex]})</h3>
            </div>
        )
    }
    render(){
        let customDiv = <div>cyka blyat</div>
        
        if(!this.props.data.today || !this.props.data.yesterday){
            return <div>Loading...</div>
        }
        else return(
            <div className="ui stackable three column grid">
                <DataShow text="Ativos: " value={this.valueHelper("ativos", false)}/>
                <DataShow text="Confirmados: " value={this.valueHelper("confirmados", false)}/>
                <DataShow text="Recuperados: " value={this.valueHelper("recuperados", true)}/>
                <DataShow text="Óbitos: " value={this.valueHelper("obitos", false)}/>
                <DataShow text="Internados" value={this.valueHelper("internados", false)}/>
                <DataShow text="Internados em UCI" value={this.valueHelper("internados_uci", false)}/>
                <DataShow text="Internados em enfermaria" value={this.valueHelper("internados_enfermaria", false)}/>
                <DataShow text="Data: " value={this.props.data.today.data[this.props.data.todayIndex]}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, { getData, getBeforeData })(DataList)