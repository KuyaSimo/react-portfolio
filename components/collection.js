import React, {Component} from "react";


import Project_1 from "./Project/project1";
import Project_2 from "./Project/project2";

class Collection extends Component{
    render(){
        return(
         
            <div className="app">
                <Navbar />
                <Project_1 />
                <Project_2 />
            </div>
            
        )
    }
}



export default Collection;

