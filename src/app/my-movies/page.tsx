import Image from "next/image"
export const metadata = {
    title: 'MyMovies'
  }
//슬라이더 구현

export default function MyMovies(){
    return <> 
    <section className="my-movies-section">      
      <Image src="" alt="내가 고른 영화 포스터" width={300} height={600}/>
      <h1>영화 제목</h1>
      <h3>⭐</h3>
    </section>
    </>
}