import Movie from "@/components/movie";
import TopMovies from "@/components/topMovies";
import styles from "../../styles/home.module.css"
import { API_URL } from "../contants";

export const metadata = {
    title:"Home",
}

interface MovieType {
    id: string;
    poster_path: string;
    title: string;
}

async function getMovies(): Promise<MovieType[]>{
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage(){
    const movies = await getMovies();
    console.log(movies)

    return <section className={styles.section}>
        <section className={styles.topContainer}>
            <h2>
                TOP Movies this week
            </h2>
            <div className={styles.buttons}>
                <button>좌</button>
                <button>우</button>
            </div>
            <div className={styles.topMovies}>
                {movies.map(movie => (
                <TopMovies key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
                ))}
            </div>
        </section>
        <section className={styles.container}>
            {movies.map(movie => (
            <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
            ))}
        </section>
    </section>
}