import React, { Component } from "react";
import {BrowserRouter as Router,Route,
  Redirect,Switch} from 'react-router-dom';
import ReactDOM from 'react-dom'
import Layout from "../components/layout";
import Projects from "../components/projects";
import Articles from "../components/articles";
import Contact from "../components/contact";
import About from "../components/about";
import Main from "../components/collection"



export class index extends Component {
  render() {
    return (
    
      <React.Fragment>
        <Layout>
          <Projects />
          <About />
          <Contact />
        </Layout>
        <center>
        <h5>P.S Sorry if my portfolio is kinda simple. Just started learning ReactJS and NextJS</h5>
        </center>
      </React.Fragment>

    );
  
  }
}




export default index;
