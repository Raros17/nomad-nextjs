import Image from "next/image"
import { API_URL } from "@/app/contants"
import styles from "../styles/movie-similar.module.css"
interface Similar {
    id: string,
    poster_path: string,
    title: string,
    vote_average: string
}

async function getSimilars(id:string):Promise<Similar[]>{
    const response = await fetch (`${API_URL}/${id}/similar`)
    return response.json()
}

export default async function MovieSimilar ({id}:{id:string}){
    const similars = await getSimilars(id);
    return (
        <div className={styles.section}>
            <h4>Similar Movies</h4>
            <div className={styles.container}>                
                {similars.map(similar => (
                    <div key={similar.id} className={styles.similarSection}> 
                        <div className={styles.similarInfo}>
                            <h5>{similar.title}</h5>
                            <h6>⭐{similar.vote_average.toFixed(1)}</h6>
                        </div>
                        <Image src={similar.poster_path} alt="similar movie" width={250} height={350} className={styles.poster}/>
                    </div>
                ))}
            </div>
        </div>
    );
}