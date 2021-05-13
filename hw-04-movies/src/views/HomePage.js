import React, { Component } from "react";
import { fetchTrending } from "../service/serviceFetch.js";
import { NavLink } from "react-router-dom";
import style from "../component/MoviePreview/Movie.module.css";

class HomePage extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetchTrending().then((data) => {
      this.setState({ data: data.results });
    });
  }
  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul className={style.list}>
          {this.state.data.map((film) => (
            <li className={style.item} key={film.id}>
              <NavLink
                to={{
                  pathname: `/movies/${film.id}`,
                }}
              >
                <img
                  width="100%"
                  height="100%"
                  src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                  alt={film.title}
                ></img>
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
