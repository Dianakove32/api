import React, { Component } from 'react'
import GetInfo from './GetInfo'
import '../App.css'
import Spiner from './Spiner'

export default class PersonInfo extends Component {
    getInfo = new GetInfo()
    constructor(props) {
        super(props)
        this.state = {
            person: null
        }
    }
    componentDidMount() {
        this.updatePerson()
    }


    componentDidUpdate(prevProps) {
        if (this.props.info !== prevProps.info) {
            this.updatePerson();
        }
    }
    updatePerson() {
        const { info } = this.props
        if (!info) {
            return
        }

        this.getInfo.getPerson(info)
            .then((person) => {

                this.setState({
                    person
                })
            })
    }

    render() {

        const { person } = this.state
        if (!person) {
            return <Spiner />

        }



        return (

            <div>
                {person.map(el => {
                    return <div className="PersonInfo" key={el.char_id}>
                        <img src={el.img} alt="pict" />
                        <p><b>Name: </b>{el.name}</p>
                        <p><b>Nickname: </b>{el.nickname}</p>
                        <p><b>Portrayed: </b>{el.portrayed}</p>
                        <p><b>Status: </b>{el.status}</p>
                    </div>

                })}

            </div>
        )
    }
}
