import Image from "next/image"
import { API_URL } from "@/app/contants"
import styles from "../styles/movie-prividers.module.css"

interface Provider {
    id: string;
    logo_path: string;
    provider_name: string;
    display_priority: number;
}

interface ProvidersResponse {
    [countryCode: string]: {
        link: string;
        flatrate?: Provider[];
        rent?: Provider[];
        buy?: Provider[]
    };
}

async function getProviders(id:string):Promise<ProvidersResponse>{
    const response = await fetch (`${API_URL}/${id}/providers`)
    return response.json()
}

export default async function MovieProviders ({id}:{id:string}){
    const providers = await getProviders(id)

    return (<div className={styles.section}>
        <div className={styles.container}>
            {providers.KR && providers.KR.flatrate ?(
                providers.KR.flatrate.map(provider => (
                    <div key={provider.id}>
                        <Image src={`https://image.tmdb.org/t/p/w300${provider.logo_path}`} alt={provider.provider_name} width={100} height={100} className={styles.logoImg}/>
                    </div>
                ))
                
            ):<h3>There is no Streaming Site.</h3>}
        </div>
    </div>)
}