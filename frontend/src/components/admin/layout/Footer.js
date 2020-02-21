import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Footer extends Component {   

    render() {
        return (
            <React.Fragment>
               <footer className="main-footer">
		        <strong>Copyright © 2020 <a href="#">Invoicing System. </a></strong>
		        All rights reserved.
		        <div className="float-right d-none d-sm-inline-block">
		          <b>Version</b> 1.0.0
		        </div>
		      </footer>
            </React.Fragment>
                )
            }
        }

export default Footer