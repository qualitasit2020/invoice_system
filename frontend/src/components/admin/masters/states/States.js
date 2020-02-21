import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

class States extends Component {   

   constructor(props) {
    super(props);
    this.state = {
      states_list_data:[]
    };

    this.onChange = this.onChange.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    //this.onClickEdit = this.onClickEdit.bind(id, this);
    //this.onClickDelete = this.onClickDelete.bind(id, this);
   }


   componentDidMount(){
   let url = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/states/';
    axios.get(url)
    .then(response => { 
      
      this.setState({ 
          states_list_data: response.data.data,
        }); 

      //console.log("states_list_data: "+this.state.states_list_data);        
    })
    .catch(function (error) {
      console.log(error);
    })
  }


   onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
   }


   onClickAdd(e){
     this.props.history.push(`/admin/masters/states/add`)
   }

   onClickEdit = (id, e) => {
    this.props.history.push(`/admin/masters/states/edit/`+id)
   }

    onClickDelete = (id, e) => {
    //const id = e.target.getAttribute('data-id');
    const states_data = {
      state_id: id
    }
   
    let uri = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/states/delete';    
      
      axios.post(uri, states_data).then((response) => {
      let url = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/states/';
      axios.get(url)
      .then(response => { 
      
      this.setState({ 
          states_list_data: response.data.data,
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
                        <h5 className="m-0 text-dark">States</h5>
                      </div>{/* /.col */}
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active">States</li>
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
		        <button type="button" onClick={this.onClickAdd} className="btn btn-sm btn-default" ><i className="fa fa-plus-circle mr-2" />Add State</button>
		        </span>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>State Name</th>
                      <th>Status</th>
                      <th>Updated At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                   
                   {this.state.states_list_data.map(( state, index ) => (
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{state.state_name}</td>
                          <td>{state.status}</td>
                          <td>{state.updated_at}</td>
                          <td data-id={state.state_id} >
                            <button type="button" onClick={(e) => this.onClickEdit(state.state_id, e)} className="btn btn-sm btn-default mr-2" ><i className="fa fa-pencil mr-2" />Edit</button>
                            <button type="button" onClick={(e) => this.onClickDelete(state.state_id, e)} className="btn btn-sm btn-default" ><i className="fa fa-trash mr-2" />Delete</button>
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

export default States