import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'

class EditModule extends Component {   


   constructor(props) {
    super(props);

    this.state = {module_id: '', module_name: '',status: ''};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickModules = this.onClickModules.bind(this);
   }


   componentDidMount(){
    //console.log(this.props)
   let url = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/modules/get/'+this.props.match.params.id;
    axios.get(url)
    .then(response => { 
      
      this.setState({ 
          module_id: response.data.data.module_id, module_name: response.data.data.module_name, status: response.data.data.status 
        }); 

      //console.log(this.state.module_name);        
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

    const modules_data = {
      module_id: this.state.module_id,
      module_name: this.state.module_name,
      status: this.state.status
    }

    
    let uri = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/modules/update/'+modules_data.module_id;    
    //console.log(modules_data);

      axios.post(uri, modules_data).then((response) => {
       
      //console.log(response);

      if(response.data.error)
      {
          alert('error');
      }

      else
      {
         this.props.history.push(`/admin/masters/modules`)
      }

    });

   }


   onClickModules(e){
     this.props.history.push(`/admin/masters/modules`)
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
                        <h5 className="m-0 text-dark">Edit Module</h5>
                      </div>{/* /.col */}
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active">Edit Module</li>
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
                  <button type="button" onClick={this.onClickModules} className="btn btn-sm btn-default" ><i className="fa fa-bars mr-2" />Modules</button>
                </span>
              </div>
              {/* /.card-header */}
        <div className="card-body">
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="module_name">Module Name</label>
          <input type="text" className="form-control" name="module_name" id="module_name" placeholder="Enter Module Name" onChange={this.onChange} value={this.state.module_name} autoComplete = "off" required />
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
          <input type="button" className="btn btn-secondary" value="Cancel" onClick={this.onClickModules} />
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

export default EditModule