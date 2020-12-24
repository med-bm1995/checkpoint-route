import React from 'react'
import { moviesData } from '../Components/MoviesData'
import { Redirect, useParams } from 'react-router-dom'

function Description() {
    const { movieId } = useParams()
    console.log(movieId)
    console.log(moviesData)
    return (

        <>

            <p style={{ color: 'white', marginTop: '50px', marginLeft: '90px' }}> {
                moviesData.find(movie => movie.id == movieId).description}

                <iframe className="video" width='700' height='500'
                    src={moviesData.find(movie => movie.id == movieId).trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>

                </iframe>
            </p>
            <h1>tessst</h1>
        </>
    )
}

export default Description
