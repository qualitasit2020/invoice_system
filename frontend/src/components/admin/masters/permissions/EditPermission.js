import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'

class EditPermission extends Component {   


   constructor(props) {
    super(props);

    this.state = {permission_id: '', permission_name: '',status: ''};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickPermissions = this.onClickPermissions.bind(this);
   }


   componentDidMount(){
    //console.log(this.props)
   let url = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/permissions/get/'+this.props.match.params.id;
    axios.get(url)
    .then(response => { 
      
      this.setState({ 
          permission_id: response.data.data.permission_id, permission_name: response.data.data.permission_name, status: response.data.data.status 
        }); 

      //console.log(this.state.permission_name);        
    })
    .catch(function (error) {
      console.log(error);
    })
  }


   onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
   }


   onSubmit(e) {
    e.preventDefault()

    const permissions_data = {
      permission_id: this.state.permission_id,
      permission_name: this.state.permission_name,
      status: this.state.status
    }

    
    let uri = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/permissions/update/'+permissions_data.permission_id;    
    //console.log(permissions_data);

      axios.post(uri, permissions_data).then((response) => {
       
      //console.log(response);

      if(response.data.error)
      {
          alert('error');
      }

      else
      {
         this.props.history.push(`/admin/masters/permissions`)
      }

    });

   }


   onClickPermissions(e){
     this.props.history.push(`/admin/masters/permissions`)
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
                        <h5 className="m-0 text-dark">Edit Permission</h5>
                      </div>{/* /.col */}
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active">Edit Permissions</li>
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
                  <button type="button" onClick={this.onClickPermissions} className="btn btn-sm btn-default" ><i className="fa fa-bars mr-2" />Permissions</button>
                </span>
              </div>
              {/* /.card-header */}
        <div className="card-body">
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="permission_name">Permission Name</label>
          <input type="text" className="form-control" name="permission_name" id="permission_name" placeholder="Enter Permission Name" onChange={this.onChange} value={this.state.permission_name} autoComplete = "off" required />
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
          <input type="button" className="btn btn-secondary" value="Cancel" onClick={this.onClickPermissions} />
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

export default EditPermission