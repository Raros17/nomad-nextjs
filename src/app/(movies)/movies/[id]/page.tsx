import MovieInfo from "@/components/movie-info"
import MovieVideos from "@/components/movie-videos";
import MovieCredits from "@/components/movie-credits";
import MovieSimilar from "@/components/movie-similar";
import { Suspense } from "react"
import { getMovie } from "@/components/movie-info"
import styles from "../../../../styles/movie-id.module.css"

interface Iparams {
    params : {id: string}
}

export async function generateMetadata({params:{id}} : Iparams){
    const movie = await getMovie(id);
    return {
        title: movie.title
    }
}

export default async function MovieDetail({params:{id}}:Iparams){
    return <div>
        <Suspense fallback={<h1>Loading Movie Info!</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <div className={styles.section}>
            <ul>
                <li>Credit</li>
                <li>Video</li>
                <li>Similar</li>
            </ul>
        </div>
        <Suspense fallback={<h1>Loading Credit Info!</h1>}>
            <MovieCredits id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Video!</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading Similar Movies!</h1>}>
            <MovieSimilar id={id}/>
        </Suspense>
    </div>
}