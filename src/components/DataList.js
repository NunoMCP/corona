import React from "react"
import DataShow from "../components/DataShow"
import { getData } from "../actions"
import { connect } from "react-redux"

class DataList extends React.Component {
    componentDidMount(){
        this.props.getData("25-02-2021")
    }
    render(){
        return(
            <div className="ui stackable three column grid">
                <DataShow text="Ativos: " value={this.props.data.ativos}/>
                <DataShow text="Confirmados: " value={this.props.data.confirmados}/>
                <DataShow text="Novos confirmados: " value={this.props.data.confirmados_novos}/>
                <DataShow text="Internados: " value={this.props.data.internados}/>
                <DataShow text="Internados em enfermaria: " value={this.props.data.internados_enfermaria}/>
                <DataShow text="Internados em UCI: " value={this.props.data.internados_uci}/>
                <DataShow text="Óbitos: " value={this.props.data.obitos}/>
                <DataShow text="Recuperados: " value={this.props.data.recuperados}/>
                <DataShow text="Em vigilância: " value={this.props.data.vigilancia}/>
                <DataShow text="Data: " value={this.props.data.data}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, { getData })(DataList)