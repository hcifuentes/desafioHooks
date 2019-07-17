import React, { Component } from 'react'

export default class Heroe extends Component {
  render() {
      const {nombre, edad, raza, email} = this.props.heroe;
      const {index} = this.props;
    return (
        <tr key={index}><td>{nombre}</td><td>{edad}</td><td>{raza}</td><td>{email}</td></tr>
    )
  }
}
