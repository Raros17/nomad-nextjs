import Image from "next/image"
import { API_URL } from "@/app/contants"
import styles from "../styles/movie-similar.module.css"

interface Similar {
    id: string,
    poster_path: string
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
                    <div key={similar.id}> 
                        <Image src={similar.poster_path} alt="similar movie" width={200} height={300} className={styles.poster}/>
                    </div>
                ))}
            </div>
        </div>
    );
}