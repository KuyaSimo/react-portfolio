import React, { Component } from "react";
import { Header, Icon, Divider, Segment, Grid, Card } from "semantic-ui-react";
import axios from "axios";

export class Projects extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chcepe"
      )
      .then(response => {
        this.setState({ articles: response.data.items });
      });
  }
  render() {
    return (
      <React.Fragment>
        <Divider horizontal>
          <Header as="h1">
            <Icon name="book" />
            Articles
          </Header>
        </Divider>
        <Segment basic>
          <Grid columns={3}>
            {this.state.articles.map(article => (
              <Grid.Row
                style={{
                  padding: 10
                }}
              >
                <Segment
                  className="clickable"
                  style={{
                    background: `linear-gradient(
                        rgba(0, 0, 0, 0.35), 
                        rgba(0, 0, 0, 0.60)
                      ),
                      url('${article.thumbnail}')`,
                    padding: "150px 20px 20px",
                    width: "100%",
                    color: "#fff"
                  }}
                >
                  <h2>{article.title}</h2>
                </Segment>
              </Grid.Row>
            ))}
          </Grid>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Projects;
