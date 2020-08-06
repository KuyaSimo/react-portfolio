import React, { Component } from "react";
import { Header, Image, Divider, Segment, Menu } from "semantic-ui-react";

export class Navbar extends Component {
  state = {activeItem: 'Home'}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state
    return (
      <React.Fragment>
        <Segment floated="left" basic>
          <Header as="h1">
            <Image src="https://i.ibb.co/pnxnLGm/dav.jpg" circular />
            <Header.Content>
              Mark Arrolle Manzanilla
              <Header.Subheader>I'm a Full Stack Developer</Header.Subheader>
            </Header.Content>
          </Header>
        </Segment>
        <Segment floated="right">
          <Menu secondary>
            <Menu.Item 
            name='Home' 
            active = {activeItem == 'Home'}
            onClick={this.handleItemClick}
            />
            <Menu.Item 
            name='Resume' 
            active = {activeItem == 'Resume'}
            onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
        <Divider clearing hidden />
      </React.Fragment>
    );
  }
}

export default Navbar;
