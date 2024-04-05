import Image from "next/image"
import { API_URL } from "@/app/contants"
import styles from "../styles/movie-credit.module.css"

interface Credit {
    id: string,
    gender: number,
    profile_path: string,
    name: string
}

async function getCredits(id:string):Promise<Credit[]>{
    const response = await fetch (`${API_URL}/${id}/credits`)
    return response.json()
}

export default async function MovieCredits ({id}:{id:string}){
    const credits = await getCredits(id)
    return <div className={styles.container}>
        <h4>Cast</h4>
        <div className={styles.creditContainer}>
            {credits.map(credits => (
                <section key={credits.id}>
                    <img src={credits.profile_path} alt="배우 사진" className={styles.image}/>
                    <h5>{credits.name}</h5>
                </section>
            ))}
        </div>
    </div>
}