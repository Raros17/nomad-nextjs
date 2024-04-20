import { API_URL } from "@/app/contants"
import styles from "../styles/movie-info.module.css"
import Image from "next/image"
import { Quicksand } from "next/font/google";

const quicksand = Quicksand ({
    weight:['300','500','700'],
    subsets:['latin']
 })
export async function getMovie (id:string){
    const response = await fetch (`${API_URL}/${id}`)
    return response.json()
}

export default async function MovieInfo({id}:{id:string}){
    const movie = await getMovie(id)
    return (
        <div>
            <div className={styles.container} style={{backgroundImage: `url(${movie.poster_path})`}}>
                    {movie.poster_path?( <Image src={movie.poster_path} className={styles.poster} alt="movie 포스터" width={300} height={400} />):(
                         <Image src="/image/default_image.jpg" alt="Default Img" width={250} height={350} className={styles.poster}/>
                    )}
                    <div className={styles.info}>                     
                        <h1 className={styles.title}>{movie.title}</h1>
                        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                        <p className={quicksand.className}>{movie.overview}</p>
                        <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
                    </div>      
            </div>
            
        </div>
    )
}