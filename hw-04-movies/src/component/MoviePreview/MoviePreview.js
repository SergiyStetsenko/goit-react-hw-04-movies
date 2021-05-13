import React from "react";
import style from "../MoviePreview/Movie.module.css";

const MoviePreview = ({
  genres,
  release_date,
  overview,
  vote_average,
  poster_path,
  title,
  original_title,
  name,
}) => (
  <>
    <div className={style.detals}>
      <div className={style.images}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        ></img>
      </div>
      <div>
        <h1>
          {name || original_title || title} ({parseInt(release_date)})
        </h1>
        <p>User source {parseFloat(vote_average) * 10}% </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ol className="MoviePreviewList">
          {genres.map((genre) => (
            <li key={genre.id}> {genre.name} </li>
          ))}
        </ol>
      </div>
    </div>
  </>
);
export default MoviePreview;
