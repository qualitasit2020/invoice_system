import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
//import PUBLIC_URL from '../../../public';

class Sidebar extends Component {   

    render() {
        return (
            
      <React.Fragment>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link" style={{textAlign: 'left'}}>
          <img src={process.env.PUBLIC_URL+"/assets/admin/dist/img/AdminLTELogo.png"} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light ml-2">Admin</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={process.env.PUBLIC_URL+"/assets/admin/dist/img/user2-160x160.jpg"} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Alexander Pierce</a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link" style={{textAlign: 'left'}}>
                  <i className="nav-icon fa fa-dashboard" />
                  <p>
                    Dashboard
                  </p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link" style={{textAlign: 'left'}}>
                  <i className="nav-icon fa fa-university" />
                  <p>
                    Organization
                    <i className="right fas fa-angle-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="admin/organization" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>List</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="admin/users" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Users</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="admin/userroles" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>User Roles</p>
                    </a>
                  </li>
              
                  <li className="nav-item">
                    <a href="admin/bankdetails" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Bank Details</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link" style={{textAlign: 'left'}}>
                  <i className="nav-icon fa fa-users" />
                  <p>
                    Clients
                    <i className="right fas fa-angle-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="admin/clientlist" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Clients List</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link" style={{textAlign: 'left'}}>
                  <i className="nav-icon fa fa-th-large" />
                  <p>
                    Projects
                    <i className="right fas fa-angle-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="admin/projectlist" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Projects List</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="admin/milestones" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Milestones</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link" style={{textAlign: 'left'}}>
                  <i className="nav-icon fa fa-file-text-o" />
                  <p>
                    Invoices
                    <i className="right fas fa-angle-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="admin/invoices_list" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>List</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="admin/reminders" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Reminders</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link" style={{textAlign: 'left'}}>
                  <i className="nav-icon fa fa-clipboard" />
                  <p>
                    Reports
                    <i className="right fas fa-angle-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="admin/reports/monthwise" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Month-wise</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="admin/reports/quarterly" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Quarterly</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="admin/reports/half_quarterly" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Half-yearly</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="admin/reports/yearly" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Yearly</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="admin/reports/location_wise" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Location-wise</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="admin/reports/custom" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Custom</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link" style={{textAlign: 'left'}}>
                  <i className="nav-icon fas fa-cog" />
                  <p>
                    Settings
                    <i className="right fas fa-angle-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/charts/chartjs.html" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>General</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/flot.html" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Email</p>
                    </a>
                  </li>
                  
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link" style={{textAlign: 'left'}}>
                  <i className="nav-icon fa fa-bandcamp" />
                  <p>
                    Masters
                    <i className="right fas fa-angle-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/masters/roles" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Roles</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/masters/modules" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Modules</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/masters/permissions" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Permissions</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/masters/taxclasses" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Tax Classes</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/admin/masters/industry" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Industry</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/admin/masters/domain" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Domain</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/admin/masters/technology" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Technology</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/admin/masters/countries" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Countries</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/admin/masters/states" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>States</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/admin/masters/cities" className="nav-link" style={{textAlign: 'left'}}>
                      <i className="fa fa-angle-double-right nav-icon" />
                      <p>Cities</p>
                    </Link>
                  </li>
                 
                  
                </ul>
              </li>

              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link" style={{textAlign: 'left'}}>
                  <i className="nav-icon fa fa-sign-out" />
                  <p>
                    Logout
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
      {/* end of sidebar */}
      </React.Fragment>
         
           
                )
            }
        }

export default Sidebar