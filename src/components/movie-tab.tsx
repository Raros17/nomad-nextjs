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
            <li onClick={() => setActiveTab('credits')} className={activeTab === 'credits' ? `${styles.active}` : ''}>Credits</li>
            <li onClick={() => setActiveTab('videos')} className={activeTab === 'videos' ? `${styles.active}` : ''}>Videos</li>
            <li onClick={() => setActiveTab('similar')} className={activeTab === 'similar' ? `${styles.active}` : ''}>Similar</li>
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