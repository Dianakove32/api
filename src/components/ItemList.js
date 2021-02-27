import React, { Component } from 'react'
import GetInfo from './GetInfo'
import '../App.css'
import Spiner from './Spiner.js'
import Search from './Search';

export default class ItemList extends Component {
    constructor() {
        super()
          this.handleSort = this.handleSort.bind(this)
    }
    getInfo = new GetInfo()
    state = {
        peopleList: null,
        characterforSearch: ''
    }
    componentDidMount() {
        this.getInfo.getAllCharacters()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })

    }
    handleSort(characterName) {
        this.setState({
            ...this.state,
            characterforSearch: characterName
        })
    }

    renderItems( ) {


        return this.state.peopleList.filter(person=>person.name.includes(this.state.characterforSearch)).map((person) => {

            console.log(this.state.characterforSearch)
            return (
                <li className="item_li"

                    key={person.char_id}
                    onClick={() => this.props.hendleInfo(person.char_id)}>
                    {person.name}
                </li>
            )
        })
    }



    render() {
        const { peopleList } = this.state



        if (!peopleList) {
            return <Spiner />
        }
        const items = this.renderItems()

        return (
            <div>


                <ul className="item_ul">
                    <Search handleSort={this.handleSort} />

                    {items}</ul>
            </div>
        )
    }
}
