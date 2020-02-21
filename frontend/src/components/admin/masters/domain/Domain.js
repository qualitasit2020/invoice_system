import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

class Domain extends Component {   

  constructor(props) {
    super(props);
    this.state = {
      project_domain_list_data:[]
    };

    this.onChange = this.onChange.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }


  componentDidMount(){
   let url = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/domain/';
    axios.get(url)
    .then(response => { 
      
      this.setState({ 
          project_domain_list_data: response.data.data,
        }); 

      //console.log("project_domain_list_data: "+this.state.project_domain_list_data);        
    })
    .catch(function (error) {
      console.log(error);
    })
  }


   onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
   }


   onClickAdd(e){
     this.props.history.push(`/admin/masters/domain/add`)
   }

   onClickEdit = (id, e) => {
    this.props.history.push(`/admin/masters/domain/edit/`+id)
   }

    onClickDelete = (id, e) => {
    //const id = e.target.getAttribute('data-id');
    const domain_data = {
      project_domain_id: id
    }
   
    let uri = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/domain/delete';    
      
      axios.post(uri, domain_data).then((response) => {
      let url = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/domain/';
      axios.get(url)
      .then(response => { 
      
      this.setState({ 
          project_domain_list_data: response.data.data,
        });        
      })
      .catch(function (error) {
      console.log(error);
      })

    })
    .catch(function (error) {
      console.log("error: "+error);
    })

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
                        <h5 className="m-0 text-dark">Domain</h5>
                      </div>{/* /.col */}
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item"><a href="/admin/dashboard">Home</a></li>
                          <li className="breadcrumb-item active">Domain</li>
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
            <button type="button" onClick={this.onClickAdd} className="btn btn-sm btn-default" ><i className="fa fa-plus-circle mr-2" />Add Domain</button>
            </span>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>Domain Name</th>
                      <th>Status</th>
                      <th>Updated At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    

                    {this.state.project_domain_list_data.map(( domain, index ) => (
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{domain.project_domain_name}</td>
                          <td>{domain.status}</td>
                          <td>{domain.date_modified}</td>
                          <td data-id={domain.project_domain_id} >
                            <button type="button" onClick={(e) => this.onClickEdit(domain.project_domain_id, e)} className="btn btn-sm btn-default mr-2" ><i className="fa fa-pencil mr-2" />Edit</button>
                            <button type="button" onClick={(e) => this.onClickDelete(domain.project_domain_id, e)} className="btn btn-sm btn-default" ><i className="fa fa-trash mr-2" />Delete</button>
                          </td>
                        </tr>
                      ))
                    }

                    
                  </tbody>
                  
                </table>
              </div>
              {/* /.card-body */}
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

export default Domain