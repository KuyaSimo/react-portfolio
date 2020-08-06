import React, { Component } from "react";
import Head from "next/head";
import { Container, Divider } from "semantic-ui-react";
import Navbar from "./navbar";

export class layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link rel="stylesheet" href="/static/style.css" />
        </Head>
        <Container>
          <Navbar />
          {this.props.children}
          <Divider hidden />
        </Container>
      </React.Fragment>
    );
  }
}

export default layout;
