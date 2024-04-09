import Image from "next/image"
import { API_URL } from "@/app/contants"
import styles from "../styles/movie-credit.module.css"

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
        return <div className={styles.emptyData}><h5>There is No Credits Data.</h5></div>;
      }
    return <div className={styles.section}>
        <section className={styles.container}>
            <h4>Cast</h4>
            <div className={styles.creditContainer}>
                {credits.map(credits => (
                    <section key={credits.id}>
                        {credits.profile_path?( (<Image
                                src={credits.profile_path}
                                alt="배우 사진"
                                width={100} 
                                height={200}
                                className={styles.image}
                            />)):(
                                <Image src="/image/default_person.jpg" alt="Default Person Img" width={100} height={200} className={styles.image}/>
                            )}
                        <h5 className={styles.name}>{credits.name}</h5>
                        <h5 className={styles.character}>{credits.character}</h5>
                    </section>
                ))}
            </div>
        </section>
    </div>
}