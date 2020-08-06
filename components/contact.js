import React, { Component } from "react";
import {
  Header,
  Icon,
  Divider,
  Segment,
  Grid,
  Button
} from "semantic-ui-react";

const links = [
  {
    name: "Whatsapp",
    link: "09156946464",
    icon: "whatsapp"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mark-arrolle-manzanilla-b56a2a1aa/",
    icon: "linkedin"
  },
  {
    name: "Email",
    link: "xxx@gmail.com",
    icon: "mail"
  }
];
export class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Divider horizontal>
          <Header as="h1">
            <Icon name="talk" />
            Contact
          </Header>
        </Divider>
        <Segment basic>
          <Grid columns={3}>
            <Grid.Row>
              {links.map(link => (
                <Grid.Column>
                  <Button icon basic size="massive" href = {link.link} fluid>
                    <Icon name={link.icon} />
                  </Button>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Projects;
