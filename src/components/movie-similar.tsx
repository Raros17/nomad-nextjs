import { API_URL } from "@/app/contants"
import styles from "../styles/movie-similar.module.css"
import Similar from "./similar"

interface Similar {
    id: string,
    poster_path: string,
    title: string,
    vote_average: number
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
                    <Similar key={similar.id} id={similar.id} poster_path={similar.poster_path} vote_average={similar.vote_average} title={similar.title}/>
                ))}
            </div>
        </div>
    );
}