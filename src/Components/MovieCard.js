import React from 'react'
import Rate from '../Components/Rate';
import { Link } from 'react-router-dom'
const MovieCard = ({ movie: { name, date, rating, image, type, description, id } }) => {
    return (
        <div>

            <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina" src={image} alt="photogg" />
                        <h1>{name}</h1>
                        <h4>{date}</h4>
                        <span className="minutes">117 min</span>
                        <p className="type">{type}</p>
                    </div>
                    <div className="movie_desc">
                        <p className="text">
                            {description}
                        </p>
                    </div>
                    <div className="movie_social">
                        <ul>
                            <li><i className="material-icons">{rating}</i></li>
                            <li><i className="material-icons"> <Rate rating={rating} /></i></li>
                            <li><i className="material-icons"><Link to={`/description/${id}`}>watch trailer</Link>
                            </i></li>
                        </ul>
                    </div>
                </div>
                <div className="blur_back bright_back" />
            </div>


        </div>
    )
}

export default MovieCard
