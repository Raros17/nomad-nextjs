"use client";
import Image from "next/image";
import styles from "../styles/movie-credit.module.css";
import { useState } from "react";

interface Credit {
    id: string,
    gender: number,
    profile_path: string,
    name: string,
    character:string
}

interface CreditsDisplayProps {
    credits: Credit[];
}

function CreditsDisplay({ credits }:CreditsDisplayProps) {
    const [visibleCredits, setVisibleCredits] = useState(10);
    const showMoreCredits = () => {
        setVisibleCredits(credits.length);
    };

    if (credits.length === 0) {
        return <div className={styles.emptyData}><h5>There is No Credits Data.</h5></div>;
    }

    return (
        <div className={styles.section}>
            <section className={styles.container}>
                <div className={styles.creditContainer}>
                    {credits.slice(0, visibleCredits).map(credit => (
                        <section key={credit.id}>
                            {credit.profile_path ? (
                                <Image
                                    src={credit.profile_path}
                                    alt="배우 사진"
                                    width={100}
                                    height={200}
                                    className={styles.image}
                                />
                            ) : (
                                <Image src="/image/default_person.jpg" alt="Default Person Img" width={100} height={200} className={styles.image}/>
                            )}
                            <h5 className={styles.name}>{credit.name}</h5>
                            <h5 className={styles.character}>{credit.character}</h5>
                        </section>
                    ))}
                </div>
                <div className={styles.buttonContainer}>
                    {visibleCredits < credits.length && credits.length > 10 &&(
                        <button className={styles.loadMoreButton} onClick={showMoreCredits}>View More!</button>
                    )}
                </div>
            </section>
        </div>
    );
}

export default CreditsDisplay;
