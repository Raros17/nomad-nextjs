"use client";
import styles from "../styles/providers-tabs.module.css"
import { useState } from "react";
import MovieProviders from "./movie-providers";

interface MovieTabsProps {
    id: string;
  }

  type ProviderTab = 'flatrate' | 'rent' | 'buy';

export default function ProvidersTab({ id }: MovieTabsProps){
    const [providerTab, setProviderTab] = useState<ProviderTab>('flatrate');
    return (
        <div className={styles.container}>
            <div className={styles.tabContainer}>
              <ul>
                <li onClick={() => setProviderTab('flatrate')} className={providerTab === 'flatrate' ? `${styles.active}` : ''}>Streaming</li>
                <li onClick={() => setProviderTab('rent')} className={providerTab === 'rent' ? `${styles.active}` : ''}>Rent</li>
                <li onClick={() => setProviderTab('buy')} className={providerTab === 'buy' ? `${styles.active}` : ''}>Buy</li>
              </ul>
            </div>
            <MovieProviders id={id} providerTab={providerTab}/>
        </div>
    )
}