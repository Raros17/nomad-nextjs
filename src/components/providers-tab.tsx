"use client";
import styles from "../styles/providers-tabs.module.css"
import { useState } from "react";
import MovieProviders from "./movie-providers";

interface MovieTabsProps {
    id: string;
  }

export default function ProvidersTab({ id }: MovieTabsProps){
    const [providerTab, setProviderTab] = useState<string>('streaming');
    return (
        <div className={styles.container}>
            <div className={styles.tabContainer}>
              <ul>
                <li onClick={() => setProviderTab('streaming')} className={providerTab === 'streaming' ? `${styles.active}` : ''}>Streaming</li>
                <li onClick={() => setProviderTab('rent')} className={providerTab === 'rent' ? `${styles.active}` : ''}>Rent</li>
                <li onClick={() => setProviderTab('buy')} className={providerTab === 'buy' ? `${styles.active}` : ''}>Buy</li>
              </ul>
            </div>
            <MovieProviders id={id} providerTab={providerTab}/>
        </div>
    )
}