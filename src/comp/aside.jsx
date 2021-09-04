import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Aside = () => {
    return (
      <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{"opacity":".8"}} />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>

                {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <a href="#" className="d-block">Raihan Ahmed</a>
              </div>
            </div>
            {/* SidebarSearch Form */}
            {/* <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div> */}




          {/*-- Sidebar Menu --*/}
      <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
               
          <li className="nav-item ">
            <Link to='/' class="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/variations" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
                Variations
                <span class="right badge badge-info">5</span>
              </p>
            </Link>
          </li>
         
            
              
          
          
          
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Product
                
                <i class="fas fa-angle-left right"></i>
                <span class="right badge badge-info">5</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to="/add-product" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Add Product</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>All Products</p>
                </Link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Category
                
                <i class="fas fa-angle-left right"></i>
                <span class="right badge badge-info">5</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to="/add-category" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Add Category</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>All Categories</p>
                </Link>
              </li>
            </ul>
          </li>

        
          </ul>

      </nav>
      {/* sidebar nav finished */}
    </div>
</aside>
        </>
    );
}

export default Aside;
