import React, { Component } from "react";
import { fetchReviews } from "../../service/serviceFetch.js";

class Reviews extends Component {
  state = {
    content: [],
  };
  componentDidMount() {
    const { moviesId } = this.props.match.params;
    fetchReviews(moviesId).then((data) => {
      this.setState({ content: data.results });
    });
  }
  render() {
    console.log(this.state.content);
    return (
      <>
        <ul>
          {this.state.content.length > 0 ? (
            this.state.content.map((discript) => {
              return (
                <li key={discript.id}>
                  <h2>Author:{discript.author}</h2>
                  <p>{discript.content}</p>
                </li>
              );
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;
