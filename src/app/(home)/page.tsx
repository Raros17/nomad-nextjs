import Movie from "@/components/movie";
import styles from "../../styles/home.module.css";
import TopMoviesList from "@/components/topMoviesList";
import { API_URL } from "../contants";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

export const metadata = {
    title:"Home",
}

interface MovieType {
    id: string;
    poster_path: string;
    title: string;
    vote_average:number;
}

async function getMovies(): Promise<MovieType[]>{
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage(){
    const fetchedMovies = await getMovies();
    const sortedMovies = [...fetchedMovies].sort((a,b)=> b.vote_average - a.vote_average).slice(0, 10);;

return <section className={styles.section}>
        <section className={styles.topContainer}>
            <h2>
                TOP Movies this week
            </h2>
            <div className={styles.buttons}>
                <button><FaCaretLeft/></button>
                <button><FaCaretRight/></button>
            </div>
            <TopMoviesList sorted_movies={sortedMovies} />
        </section>
        <section className={styles.container}>
            {fetchedMovies.map(movie => (
            <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
            ))}
        </section>
    </section>
}