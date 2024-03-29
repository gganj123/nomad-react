import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from "./MovieList.module.css";

function MovieList() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <div className={styles.container}>

                {loading ? <h1>loading...</h1> : (
                    <div>
                        <div className={styles.movies}>

                            {movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    coverImg={movie.medium_cover_image}
                                    title={movie.title}
                                    summary={movie.summary}
                                    genres={movie.genres}
                                />
                            ))}
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

export default MovieList;
