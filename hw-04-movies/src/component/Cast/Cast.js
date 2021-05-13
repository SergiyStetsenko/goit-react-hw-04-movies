import React, { Component } from "react";
import { fetchCast } from "../../service/serviceFetch.js";
import style from "../MoviePreview/Movie.module.css";

class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    const { moviesId } = this.props.match.params;
    fetchCast(moviesId).then((actor) => {
      this.setState({ cast: actor.cast });
      console.log(this.state.cast);
    });
  }
  render() {
    const { cast } = this.state;
    return (
      <>
        <ul className={style.character}>
          {cast.map((actor) => {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt={`Photo ${actor.name}: this actor`}
                />

                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
