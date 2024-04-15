"use client";
import styles from "../styles/movie-tabs.module.css"
import { useState } from "react";
import MovieCredits from "./movie-credits";
import MovieVideos from "./movie-videos";
import MovieSimilar from "./movie-similar";
import { Suspense } from 'react';
import ProvidersTab from "./providers-tab";

interface MovieTabsProps {
    id: string;
  }

export default function MovieTab({ id }: MovieTabsProps){
    const [activeTab, setActiveTab] = useState<string>('credits');
    return (
        <div className={styles.section}>
          <ProvidersTab id={id}/>       
        <div className={styles.container}>
          <Suspense fallback={<h3>Providers...</h3>}>
            <div>
              <ul className={styles.tabContainer}>
                 <li onClick={() => setActiveTab('credits')} className={activeTab === 'credits' ? `${styles.active}` : ''}>Credits</li>
                 <li onClick={() => setActiveTab('videos')} className={activeTab === 'videos' ? `${styles.active}` : ''}>Videos</li>
              </ul>
            </div>
          </Suspense>
                <Suspense fallback={<h3>Loading Credits...</h3>}>
                    {activeTab === 'credits' && <MovieCredits id={id} />}
                </Suspense>
                <Suspense fallback={<h3>Loading Videos...</h3>}>
                    {activeTab === 'videos' && <MovieVideos id={id} />}
                </Suspense>
                <Suspense fallback={<h3>Loading Similar Movies...</h3>}>
                    <MovieSimilar id={id} />
                </Suspense>

        </div>
      </div>
    )
}