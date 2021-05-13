import React, { Component, lazy } from "react";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";
import { fetchDetails } from "../service/serviceFetch.js";
import routes from "../service/routes";
import MoviePreview from "../component/MoviePreview/MoviePreview.js";
import style from "../component/MoviePreview/Movie.module.css";

const Cast = lazy(() =>
  import("../component/Cast/Cast.js" /* webpackChunkName: "cast-page" */)
);
const Reviews = lazy(() =>
  import(
    "../component/Reviews/Reviews.js" /* webpackChunkName: "reviews-page" */
  )
);

class MovieDetailsPage extends Component {
  state = {
    id: "",
    genres: [],
    release_date: "",
    overview: "",
    vote_average: 0,
    poster_path: "",
    title: "",
    original_title: "",
    name: "",
    back: {},
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    fetchDetails(moviesId).then((data) => {
      this.setState({ ...data, back: this.props.location.state });
    });
  }

  handleBack = () => {
    const { history } = this.props;
    if (this.state.back?.from) {
      history.push({
        pathname: this.state.back.from,
        search: `query=${this.state.back.search}`,
        state: { search: this.state.back.search },
      });
      return;
    }
    history.push("/");
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleBack}>
          Go back
        </button>

        <MoviePreview
          genres={this.state.genres}
          release_date={this.state.release_date}
          overview={this.state.overview}
          vote_average={this.state.vote_average}
          poster_path={this.state.poster_path}
          title={this.state.title}
          original_title={this.state.original_title}
          name={this.state.name}
        />
        <h2 className={style.info}>Additional information</h2>
        <ul className={style.info} key={this.state.id}>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={routes.cast} component={Cast} />
          <Route path={routes.reviews} component={Reviews} />
        </Switch>
      </>
    );
  }
}
export default MovieDetailsPage;
