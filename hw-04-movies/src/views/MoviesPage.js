import React, { Component } from "react";
import { fetchQuery } from "../service/serviceFetch.js";
import { NavLink } from "react-router-dom";

export default class MoviePage extends Component {
  state = {
    results: [],
    value: "",
  };
  componentDidMount() {
    this.props.location?.state?.search &&
      fetchQuery(this.props.location.state.search).then((data) => {
        console.log(data);
        this.setState({ results: data.results });
      });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value) {
      return;
    }
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.value}`,
    });
    fetchQuery(this.state.value).then((data) => {
      console.log(data);
      this.setState({ results: data.results });
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state);
    const { value } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="value"
            onChange={this.handleChange}
            value={value}
            autoFocus
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.state.results.map((film) => (
            <li key={film.id}>
              <NavLink
                to={{
                  pathname: `/movies/${film.id}`,
                  state: {
                    from: this.props.location.pathname,
                    search: this.state.value,
                  },
                }}
              >
                {film.original_name ||
                  film.name ||
                  film.original_title ||
                  film.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
