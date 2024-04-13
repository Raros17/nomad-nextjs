"use client";
import Image from "next/image";
import styles from "../styles/top-movies.module.css"
import { useRouter } from "next/navigation";


interface MovieProps{
    title: string;
    id: string;
    poster_path: string;
}


export default function TopMovie({title, id, poster_path}: MovieProps){
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`)
    }
     return (
        <section className={styles.container}>
            <Image src={poster_path} alt="top recommend movies" width={400} height={600} className={styles.poster} onClick = {onClick}/>
        </section>
    )
}