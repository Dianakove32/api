
import React, { Component } from 'react'
//    const urlCharacters='https://www.breakingbadapi.com/api/characters'

export default class GetInfo extends Component {
 _apiBase='https://www.breakingbadapi.com/api'

    async getResourse(url) {


        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Coould not find this ${url}`)
        }

        return   await res.json();
    };

   async getAllCharacters() {
       const res = await this.getResourse('/characters/')
        return res
    }

   async getPerson(id) {
       const person= await this.getResourse(`/characters/${id}/`)
    return person

    }
    getPict(id) {
        return this.getResourse(`/characters/${id}/`)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

// const w1 = new GetInfo()
// w1.getPerson(1).then((p) =>
// {p.forEach(n=>console.log(n.name))}
// )
// const w = new GetInfo()
// w.getAllCharacters().then((people) => {
//     people.forEach(n=>console.log(n.name))
// })

