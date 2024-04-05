import Image from "next/image"
import { API_URL } from "@/app/contants"
import styles from "../styles/movie-providers.module.css"

interface Provider {
    id: string,
    gender: number,
    profile_path: string,
    name: string,
    character:string
}

async function getProviders(id:string):Promise<Provider[]>{
    const response = await fetch (`${API_URL}/${id}/providers`)
    return response.json()
}

export default async function MovieProviders ({id}:{id:string}){
    const providers = await getProviders(id)
    return <div className={styles.section}>
        <section className={styles.container}>
            <h4>Providers</h4>
        </section>
    </div>
}