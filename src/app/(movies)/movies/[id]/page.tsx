import MovieInfo from "@/components/movie-info"
import MovieVideos from "@/components/movie-videos"
import { Suspense } from "react"
import { getMovie } from "@/components/movie-info"

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
        <Suspense fallback={<h1>Loading Movie Video!</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>
}