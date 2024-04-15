import Image from "next/image"
import { API_URL } from "@/app/contants"
import styles from "../styles/movie-providers.module.css"

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

interface MovieProvidersProps{
    id: string,
    providerTab:ProviderTab
}

type ProviderTab = 'flatrate' | 'rent' | 'buy';

async function getProviders(id:string):Promise<ProvidersResponse>{
    const response = await fetch (`${API_URL}/${id}/providers`)
    return response.json()
}

export default async function MovieProviders ({id, providerTab}:MovieProvidersProps){
    const providers = await getProviders(id);
    const providerType = providers.KR? providers.KR[providerTab] : null;

    return (<div className={styles.section}>
        <div className={styles.container}>
        {providerType && providerType.length > 0 ? (
                    providerType.map(provider => (
                        <div key={provider.id} className={styles.providersContainer}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w300${provider.logo_path}`}
                                alt={provider.provider_name}
                                width={80}
                                height={80}
                                className={styles.logoImg}
                            />
                            <h3>{provider.provider_name}</h3>
                        </div>
                    ))
                ) : <h3>There is no {providerTab} site.</h3>}
        </div>
    </div>)
}