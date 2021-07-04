import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movies.css";

function Movie({id, year, title, summary, poster, genres}){
    return (
            <Link to={{
                pathname: "/movie_detail",
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}
            >
                <div className="movie">
                    <img src={poster} alt={title} title={title}/>
                    <div className="movie__data">
                        <h3 className="movie__title">{title}</h3>
                        <h5 className="movie__year">{year}</h5>
                        <ul className="movie__genres">
                            {genres.map((genre, index) => ( //map함수에 index 자동 생성
                                <li key={index} className="genres__genre">{genre}</li> //key값 추가해줘야함 
                            ))}
                        </ul>
                        <p className="movies__summary">{summary.slice(0,180)}...</p>
                    </div>
                </div>
            </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;