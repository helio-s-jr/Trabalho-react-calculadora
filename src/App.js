import React, {Component} from "react";

export default class App extends Component{

    state = {
        numero1: "",
        numero2: "",
        resultado: ""
    }

    adicao = () => {
        this.setState({
            resultado: Number(this.state.numero1) + Number(this.state.numero2)
        })
    }

    subtracao = () => {
        this.setState({
            resultado: Number(this.state.numero1) - Number(this.state.numero2)
        })
    }

    multiplicacao = () => {
        this.setState({
            resultado: Number(this.state.numero1) * Number(this.state.numero2)
        })
    }

    divisao = () => {
        this.setState({
            resultado: Number(this.state.numero1) / Number(this.state.numero2)
        })
    }

    limpar = () => {
        this.setState({
            resultado: "",
            numero1: "",
            numero2: ""
        })
    }

    handleChange1 = (event) => {
        this.setState({
            numero1: event.target.value
        })
    }

    handleChange2 = (event) => {
        this.setState({
            numero2: event.target.value
        })
    }

    render(){
        return(
            <Calculadora>
                <h1>Calculadora</h1>
                <div>
                    <input type="number" value={this.state.numero1} onChange={this.handleChange1}/>
                    <input type="number" value={this.state.numero2} onChange={this.handleChange2}/>
                </div>
                <section>
                    <button onClick={this.adicao}>+</button>
                    <button onClick={this.subtracao}>-</button>
                    <button onClick={this.multiplicacao}>x</button>
                    <button onClick={this.divisao}>÷</button>
                    <button onClick={this.limpar}>c</button>
                </section>
                <h2>{this.state.resultado}</h2>
            </Calculadora>
        )
    }
}