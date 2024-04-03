import MovieInfo from "@/components/movie-info"
import MovieVideos from "@/components/movie-videos"
import { Suspense } from "react"

export default async function MovieDetail({params:{id},}:{params:{id:string}}){
    return <div>
        <Suspense fallback={<h1>Loading Movie Info!</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Video!</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>
}