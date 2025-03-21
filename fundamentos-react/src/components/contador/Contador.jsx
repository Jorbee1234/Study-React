import React, {Component} from "react";
import './Contador.css'
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

export default class Contador extends Component{

    state = {
        num: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            num: this.state.num + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            num: this.state.num - this.state.passo
        });
    }

    setPasso = (e) =>{
        this.setState({
            passo: + e.target.value
        })
    }
    render(){
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display num={this.state.num}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes inc={this.inc} dec={this.dec}></Botoes>

            </div>
        )
    }
}