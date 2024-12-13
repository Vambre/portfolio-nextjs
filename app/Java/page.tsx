"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './java.module.css';

const JavaProject = () => {
    const [visibleContent, setVisibleContent] = useState<string | null>(null);

    const toggleContent = (id: string) => {
        setVisibleContent(visibleContent === id ? null : id);
    };

    return (
        <div>
            <header className={styles.header}>
            </header>
            <h1>Projet Java</h1>
            <div className={styles.selection}>
                <a href="#JustePrix">Juste Prix</a>
                <a href="#Taquin">Taquin</a>
                <a href="#SpaceInvaders">Space Invaders</a>
                <a href="#RayTracing">RayTracing</a>
            </div>
            <div className={styles.projet}>
                {['JustePrix', 'Taquin', 'SpaceInvaders', 'RayTracing'].map((id) => (
                    <div key={id} className={styles.contenu} id={id}>
                        <h2>{id.replace(/([A-Z])/g, ' $1')}</h2>
                        <div className={styles.separe}>
                            <p><span>Statut : </span>Fini</p>
                            <Image src="/images/Web/check.png" alt="" width={50} height={50} />
                        </div>
                        <div className={styles.separe}>
                            <span>Langage :</span>
                            <Image className={styles.lang} src="/images/Projet/Java.png" alt="" width={50} height={50} />
                        </div>
                        <p><span>Projet : </span>Universitaire</p>
                        <Image className={styles.imgPresentation} src={`/images/Java/${id}.PNG`} alt="" width={200} height={200} />
                        <div className={styles.bouton}>
                            <button onClick={() => toggleContent(id)}>Plus de Détails</button>
                        </div>
                        {visibleContent === id && (
                            <div id={id} style={{ display: 'block' }}>
                                <p>
                                    Si vous voulez plus d&apos;informations, vous pouvez télécharger le
                                    dossier en cliquant ci-dessous
                                </p>
                                <a className={styles.telecharger} href={`/dossierATelecharger/Java/${id.toLowerCase()}.zip`} download>
                                    <Image src="/images/Web/telecharger.png" alt="" width={50} height={50} />
                                    <p>télécharger mon dossier ici</p>
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <footer className={styles.footer}>
                <div className={styles.Contact}>
                    <h3>Contactez-moi</h3>
                    <div className={styles.cont}>
                        <Image src="/images/footer/mail.png" alt="" width={30} height={30} />
                        <p>vambre.theo2003@gmail.com</p>
                    </div>
                    <div className={styles.cont}>
                        <Image src="/images/footer/phone.png" alt="" width={30} height={30} />
                        <p>07 83 07 32 34</p>
                    </div>
                </div>
                <div className={styles.reseaux}>
                    <h3>Réseaux sociaux</h3>
                    <Link href="https://github.com/Vambre/Portfolio">
                        <Image src="/images/header/GitHub.png" alt="" width={50} height={50} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/th%C3%A9o-vambre-871a20295/?originalSubdomain=fr">
                        <Image src="/images/header/Linkedin.png" alt="" width={50} height={50} />
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default JavaProject;