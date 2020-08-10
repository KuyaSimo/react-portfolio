import React, { Component } from "react";
import Link from "react-router";
import { Header, Icon, Divider, Segment, Card, Grid, Button } from "semantic-ui-react";
import axios from "axios";


 class Projects extends Component {
  state = {
    projects: []
  };
  componentDidMount() {
    axios.get("/static/dummy/projects.json").then(response => {
      this.setState({ projects: response.data });
    });
  }

  render() {
   
    return (
      <React.Fragment>
        <Divider horizontal>
          <Header as="h1">
            <Icon name="suitcase" />
            Projects
          </Header>
        </Divider>
        <Segment basic>
          <Grid columns={3}>
            <Grid.Row>
              {this.state.projects.map(project => (
                <Grid.Column
                  style={{
                    padding: 10
                  }}
                >
                  <Card
                    className="clickable"
                    fluid
                    image={project.image}
                    header={project.name}
                    meta={project.created_date}
                    description={project.desc}
                    extra = {project.under}
                  />
                </Grid.Column>
              ))}
           
          
              {/* <Button 
                  fluid
                  primary
                  onClick = {() => history.pushState('/collection')}
              >View More..</Button> */}
            
            </Grid.Row>
          </Grid>
        </Segment>
    
      </React.Fragment>
     
    );
  }
}




export default Projects;
