import { API_URL } from "@/app/contants"
import styles from "../styles/movie-credit.module.css"
import CreditsDisplay from "./creditsDisplay"

interface Credit {
    id: string,
    gender: number,
    profile_path: string,
    name: string,
    character:string
}

async function getCredits(id:string):Promise<Credit[]>{
    const response = await fetch (`${API_URL}/${id}/credits`)
    return response.json()
}

export default async function MovieCredits ({id}:{id:string}){
    const credits = await getCredits(id)
    if (credits.length === 0) {
        return <div className={styles.emptyData}>
            <h5>There is No Credits Data.</h5>
            </div>;
      }
    return <CreditsDisplay credits={credits}/>
}