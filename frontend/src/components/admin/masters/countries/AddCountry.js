import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'

class AddCountry extends Component {   


   constructor() {
    super();
    this.state = {
      country_name: '',
      status: 'Active'
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickCountries = this.onClickCountries.bind(this);
   }


   onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
   }


   onSubmit(e) {
    e.preventDefault()

    const countries_data = {
      country_name: this.state.country_name,
      status: this.state.status
    }

    
    let uri = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/countries/add';    
    console.log(countries_data);

      axios.post(uri, countries_data).then((response) => {
       
      console.log(response);

      if(response.data.error)
      {
          alert('error');
      }

      else
      {
         this.props.history.push(`/admin/masters/countries`)
      }

    });

   }


   onClickCountries(e){
     this.props.history.push(`/admin/masters/countries`)
   }


    render() {
        return (
            
        <React.Fragment>
        <Header />
        <Sidebar />
        {/* Content Wrapper. Contains page content */}
              <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h5 className="m-0 text-dark">Add Country</h5>
                      </div>{/* /.col */}
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active">Add Countries</li>
                        </ol>
                      </div>{/* /.col */}
                    </div>{/* /.row */}
                  </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
               {/* Main content */}
      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title"></h3>
                <span style={{float: 'right'}}>
                  <button type="button" onClick={this.onClickCountries} className="btn btn-sm btn-default" ><i className="fa fa-bars mr-2" />Countries</button>
                </span>
              </div>
              {/* /.card-header */}
        <div className="card-body">
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="country_name">Country Name</label>
          <input type="text" className="form-control" name="country_name" id="country_name" placeholder="Enter Country Name" onChange={this.onChange} value={this.state.country_name} autoComplete = "off" required />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select className="form-control" id="status" name="status" onChange={this.onChange} value={this.state.status} required >
             <option value="Active">Active</option>
             <option value="Inactive">Inactive</option>
          </select>
        </div>
        
        <div className="form-group">
          <input type="submit" className="btn btn-info mr-2" value="Submit" />
          <input type="button" className="btn btn-secondary" value="Cancel" onClick={this.onClickCountries} />
        </div>

            </form>
            </div>
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </section>
      {/* /.content */}
      {/* /.content */}
        </div>{/* /.content-wrapper */}
        
                 <Footer />

            </React.Fragment>
         
           
                )
            }
        }

export default AddCountry