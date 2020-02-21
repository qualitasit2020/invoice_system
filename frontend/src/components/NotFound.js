import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class NotFound extends Component {   

	constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

    render() {
        return (
                 <React.Fragment>
           
              {/* Content Wrapper. Contains page content */}
              <div align="center">
                {/* Content Header (Page header) */}
                <div className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        
                      </div>{/* /.col */}
                      <div className="col-sm-6">
                        
                      </div>{/* /.col */}
                    </div>{/* /.row */}
                  </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                
              </div>
              <div className="col-sm-6">
                
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div>
            
            <div className="error-content">
              <h3><i className="fas fa-exclamation-triangle text-warning" /> Oops! Page not found.</h3>
              <p>
                We could not find the page you were looking for.
                
              </p>
              
            </div>
            {/* /.error-content */}
          </div>
          {/* /.error-page */}
        </section>
        {/* /.content */}
        </div>{/* /.content-wrapper */}
        
                 

                 </React.Fragment>
                )
            }
        }

export default NotFound