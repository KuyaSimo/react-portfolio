import React, {Component} from "react";
import {Header, Icon, Divider,Segment,Container,Grid} from "semantic-ui-react";
import axios from "axios";

export class About extends Component{
    render(){
        return (
            <React.Fragment>
                <Divider horizontal>
                    <Header as="h1">
                        <Icon name = "address card"/>
                        About Me
                    </Header>
                </Divider>
            <Segment basic>
                <Grid columns = {3}>
                    <Container fluid>
                        <Header as = 'h2'>Wassup!</Header>
                        <p className="paragraph"> 
                            Web developer by day, gamer by night or mostly on weekends. 
                            I can do front end with the use of Semantic UI, Material UI and Bootstrap 
                            and for the Back End I can code in PHP, C# (Web and WinForm), JAVA, VB.NET and little bit of server side like Node JS
                            Fast learner and can adapt very well in any scenario
                        </p>
                    </Container>
                </Grid>
            </Segment>
            </React.Fragment>
        )
    }
}

export default About;