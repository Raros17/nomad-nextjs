"use client";
import styles from "../styles/movie-tabs.module.css"
import { useState } from "react";
import MovieCredits from "./movie-credits";
import MovieVideos from "./movie-videos";
import MovieSimilar from "./movie-similar";

interface MovieTabsProps {
    id: string;
  }

export default function MovieTab({ id }: MovieTabsProps){
    const [activeTab, setActiveTab] = useState<string>('credits');
    return (
        <div>
        <div className={styles.tabContainer}>
          <ul>
            <li onClick={() => setActiveTab('credits')}>Credits</li>
            <li onClick={() => setActiveTab('videos')}>Videos</li>
            <li onClick={() => setActiveTab('similar')}>Similar</li>
          </ul>
          
        </div>
        <div>
            {activeTab === 'credits' && <MovieCredits id={id} />}
            {activeTab === 'videos' && <MovieVideos id={id} />}
            {activeTab === 'similar' && <MovieSimilar id={id} />}
        </div>
      </div>
    )
}