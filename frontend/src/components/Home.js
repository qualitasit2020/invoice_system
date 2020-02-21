import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


class Home extends Component {   

	constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

    render() {
        return (
                 <React.Fragment>

                  Home
                 </React.Fragment>
                )
            }
        }

export default Home