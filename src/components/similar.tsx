"use client";
import Image from "next/image";
import styles from "../styles/movie-similar.module.css"
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SimilarProps {
    id: string,
    title: string,
    poster_path: string,
    vote_average: number
}

export default function Similar({title, id, poster_path, vote_average}: SimilarProps){
    const router = useRouter(); 

    const handlePosterClick = (id:string) => {
        router.push(`/movies/${id}`)
    }

     return (
        <div key={id} className={styles.similarSection}> 
            <div className={styles.similarInfo}>
                <Link href={`/movies/${id}`}>
                    <h5>{title}</h5>
                </Link>
                <h6>⭐{vote_average?.toFixed(1)}</h6>
            </div>
            {poster_path?(<Image src={poster_path} alt="similar movie" width={250} height={350} className={styles.poster} onClick={() => handlePosterClick(id)} />):(
                <Image src="/image/default_image.jpg" alt="Default Img" width={250} height={350} className={styles.poster} onClick={() => handlePosterClick(id)}/>
            )}
    </div>
    )
}