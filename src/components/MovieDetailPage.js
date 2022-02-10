
import { useEffect, useState,  } from 'react'

function MovieDetailPage(props) {

    const [movieDetail, setMovieDetail] = useState({})

    useEffect(() => {

        const imdbId = props.match.params.imdbId
        fetchMovieDetailsById(imdbId)
    }, [])

    const fetchMovieDetailsById = (imdbID) => {

        const movieDetailsURL = `http://www.omdbapi.com/?i=${imdbID}&apikey=ce7c6154`

        fetch(movieDetailsURL)
            .then(response => response.json())
            .then(result => {
                setMovieDetail(result)
            })

    }


    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col col-lg-6 mt-5">
                    <div class="text-center">
                        <img src={movieDetail.Poster} alt="Movie Poster" />
                        <h1>{movieDetail.Title}</h1>
                    </div>
                    <table class="table table-hover">
                        <tbody>
                            <tr>
                                <th scope="row">Plot</th>
                                <td>{movieDetail.Plot}</td>
                            </tr>
                            <tr>
                                <th scope="row">Released</th>
                                <td>{movieDetail.Released}</td>
                            </tr>
                            <tr>
                                <th scope="row">Director</th>
                                <td>{movieDetail.Director}</td>
                            </tr>
                            <tr>
                                <th scope="row">Writer</th>
                                <td>{movieDetail.Writer}</td>
                            </tr>
                            <tr>
                                <th scope="row">Actors</th>
                                <td>{movieDetail.Actors}</td>
                            </tr>
                            <tr>
                                <th scope="row">Awards</th>
                                <td>{movieDetail.Awards}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailPage