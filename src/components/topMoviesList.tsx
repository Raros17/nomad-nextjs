
import TopMovie from "./topMovie";
import styles from "../styles/top-movies.module.css"


interface MovieType {
    id: string;
    poster_path: string;
    title: string;
    vote_average:number;
}

interface TopMoviesListProps {
    sorted_movies: MovieType[];  
}


export default function TopMoviesList({sorted_movies}: TopMoviesListProps){
     return (
        <div className={styles.sortedMoviesListContainer}>
                {sorted_movies.map(movie => (
                <TopMovie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
                ))}
        </div>
    )
}