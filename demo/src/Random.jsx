import React, { Component } from 'react'

export default class Random extends Component {

  constructor(props){
    super(props)
    console.log(props);
    
  }
  render() {
    return (
     <> 
     <div>Random</div>
     <p>data shared is: {this.props.uname}</p>
     </>
    )
  }
}
