import MovieInfo from "@/components/movie-info"
import { Suspense } from "react"
import { getMovie } from "@/components/movie-info"
import MovieTab from "@/components/movie-tab";
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
        <MovieTab id={id}/>
    </div>
}