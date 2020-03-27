import React, { Component } from 'react'
import TechItem from './TechItem';

class TechList extends Component {
	/*
		usado para guardar/manipular o estado do componente
	*/
    state = {
        newTech: '',
        techs: [],
    };
    //executado assim que o componente aparece em tela
    componentDidMount() {
        const techs = localStorage.getItem('techs');

        if (techs) {
            this.setState({ techs: JSON.parse(techs) });
        }
    }
    //executado sempre que houver alteraçãoes nas props ou estado
    componentDidUpdate(_, prevState) {
        if (prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    }
    //executa quando o componente deixa de existir
    componentWillUnmount() {

    }

    handleInputChange = e => {
        this.setState({ newTech: e.target.value })

    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        });
    }
    handleDelete = (tech) => {
        this.setState({
            techs: this.state.techs.filter(t => t != tech)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem
                            key={tech}
                            tech={tech}
                            onDelete={() => this.handleDelete(tech)} />
                    ))}
                </ul>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTech}
                />
                <button type="submit">save</button>
            </form>
        );
    }
}

export default TechList;