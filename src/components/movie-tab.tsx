"use client";
import styles from "../styles/movie-tabs.module.css"
import { useState } from "react";
import MovieCredits from "./movie-credits";
import MovieVideos from "./movie-videos";
import MovieSimilar from "./movie-similar";
import { Suspense } from 'react';

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
          </ul>
          
        </div>
        <div>
                <Suspense fallback={<h1>Loading Credits...</h1>}>
                    {activeTab === 'credits' && <MovieCredits id={id} />}
                </Suspense>
                <Suspense fallback={<h1>Loading Videos...</h1>}>
                    {activeTab === 'videos' && <MovieVideos id={id} />}
                </Suspense>
                <Suspense fallback={<h1>Loading Similar Movies...</h1>}>
                    <MovieSimilar id={id} />
                </Suspense>
        </div>
      </div>
    )
}