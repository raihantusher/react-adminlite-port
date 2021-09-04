import logo from './logo.svg';
//import './App.css';

import Button from './comp/button.js'
import Card from './comp/card.js'
 import Example from './comp/hooks.js';
 import TopNav from './comp/topnav';
 import Aside from './comp/aside';
 import Breadcrumbs from './comp/breadcrumbs';
// forms
import CategoryForm from './forms/CategoryForm';
import ProductForm from './forms/ProductForm';
import VariationForm from './forms/VariationForm';

import React, { Component } from 'react';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";



 class App extends Component {
   constructor(props) {
     super(props);
     this.clickMe = this.clickMe.bind(this);
     this.state ={
        notification : 1,
        messages :10
      };
  }

   clickMe = (e) => {
     this.state.notification = this.state.notification + 1
     this.setState( (prevState) => ({      notification: prevState.notification + 1, messages:prevState.messages+3    }));
   }
   
   render() {
     return (
       <>
        <Router>
        <div className="App">
            <TopNav 
                notification={this.state.notification} 
                messages={this.state.messages} 
            />

              <Aside />

              <div className="content-wrapper">
              
                  <Breadcrumbs />
                  <button onClick={this.clickMe} className="btn btn-primary btn-sm">hello</button>

                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/dashboard/:id">
                      <Dashboard />
                    </Route>
                    <Route path="/forms">
                      <Forms />
                    </Route>
                    <Route path="/variations">
                      <VariationForm />
                    </Route>

                    <Route path="/variations/add">
                      <VariationForm />
                    </Route>

                    <Route path="/add-product">
                      <ProductForm />
                    </Route>
                    <Route path="/add-category">
                      <CategoryForm />
                    </Route>
                  </Switch>
              </div>

              {/* -- /.content-wrapper -- */}
              <footer class="main-footer">
                <div class="float-right d-none d-sm-block">
                  <b>Version</b> 3.1.0
                </div>
                <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
              </footer>
          </div>
          </Router>
          </>
     );
   }
 }



export default App;



function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <div className="card">
        <div className="card-header">Helloworld</div>
        <div className="card-body">
          Helloworld
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  let { id } = useParams();
  return (
    <div>
      <h2>Dashboard {id}</h2>
    </div>
  );
}


const Forms = () => {
  return (
    <div>
      <CategoryForm />
    </div>
  );
}



