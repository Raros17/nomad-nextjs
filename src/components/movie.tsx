"use client";
import Link from "next/link";
import styles from "../styles/movie.module.css"
import { useRouter } from "next/navigation";
import Image from "next/image";

interface MovieProps{
    title: string;
    id: string;
    poster_path: string;
}


export default function Movie({title, id, poster_path}: MovieProps){
    const router = useRouter();

    const onClick = () => {
        router.push(`/movies/${id}`)
    }
     return (
    <div className={styles.movie}>
        <Image className={styles.poster} src={poster_path} alt={title} onClick = {onClick} width={300} height={400}/> 
        <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
    )
}