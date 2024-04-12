import Image from "next/image";
import styles from "../styles/top-movies.module.css"

interface MovieProps{
    title: string;
    id: string;
    poster_path: string;
}


export default function TopMovies({title, id, poster_path}: MovieProps){

     return (
        <section className={styles.container}>
            <Image src={poster_path} alt="top recommend movies" width={400} height={600} className={styles.poster}/>
        </section>
    )
}