import { API_URL } from "@/app/(home)/page"

async function getMovie (id:string){
    await new Promise((resolve)=>setTimeout(resolve, 5000))
    console.log(`Fetch movie::${Date.now()}`)
    const response = await fetch (`${API_URL}/${id}`)
    return response.json()
}

async function getVideos(id:string){
    await new Promise((resolve)=>setTimeout(resolve, 5000))
    console.log(`Fetch video:${Date.now()}`)
    const response = await fetch (`${API_URL}/${id}/videos`)
    return response.json()
}

export default async function MovieDetail({params:{id},}:{params:{id:string}}){
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return <h1>{movie.title}</h1>;
}