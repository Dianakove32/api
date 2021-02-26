import './App.css';
import GetInfo from './components/GetInfo';
import ItemList from './components/ItemList';
import PersonInfo from './components/PersonInfo';


import React, { Component } from 'react'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      info: 1,

    }
    this.hendleInfo = this.hendleInfo.bind(this)

  }

  hendleInfo(id) {
    this.setState({
      info: id
    })

  }
  render() {

    return (
      <div>
        <h1>The Breaking Bad Characters</h1>
        <h3>Information received using API</h3>
        <div className="App">

          <ItemList hendleInfo={this.hendleInfo} />
          <PersonInfo info={this.state.info} />
        </div>
      </div>

    );
  }
}













// fetch(urlCharacters)
// .then((res)=>{
// return res.json()
// })
// .then((body)=>{
//   console.log('what we have2', body)
// })