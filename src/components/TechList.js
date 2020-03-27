import React, { Component } from 'react'
import TechItem from './TechItem';

class TechList extends Component {
	/*
		usado para guardar/manipular o estado do componente
	*/
    state = {
        newTech: '',
        techs: [
            'NodeJS',
            'ReactJS',
            'React Native'
        ],
    };
    //executado assim que o componente aparece em tela
    componentDidMount(prevProps, prevState) {

    }
    //executado sempre que houver alteraçãoes nas props ou estado
    componentDidUpdate() {

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