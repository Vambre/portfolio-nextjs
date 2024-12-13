import Image from "next/image";

export default function Home() {
  return (
      <div>
        <header className="header">
          <nav>
            <div className="choix">
              <div className="choixGauche">
                <a href="#aPropos">À Propos</a>
                <a href="#contact">Contact</a>
                <a href="#ppp">Projets</a>
                <a href="#Competences">Compétences</a>
                <a href="/CVThéo_Vambre.pdf" download>CV</a>
              </div>
              <div className="choixDroite">
                <a href="https://github.com/Vambre/Portfolio" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/header/GitHub.png" alt="GitHub" width={30} height={30} />
                </a>
                <a href="https://linkedin.com/in/th%C3%A9o-vambre" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/header/Linkedin.png" alt="LinkedIn" width={30} height={30} />
                </a>
              </div>
            </div>
          </nav>
          <div className="moi">
            <Image src="/images/header/photo.png" alt="Théo Vambre" width={300} height={300} />
            <div className="desc">
              <p>Théo VAMBRE</p>
              <p>Étudiant en 3e année de BUT Informatique</p>
            </div>
          </div>
        </header>

        <main>
          <section id="aPropos">
            <h2>Qui suis-je ?</h2>
            <p>
              Je m&apos;appelle Théo Vambre, j&apos;ai 20 ans. J&apos;ai suivi un bac technologique STI2D
              (option SIN) au lycée André Malraux à Béthune et suis actuellement en 2e année
              de BUT Informatique à l&apos;IUT de Lens.
            </p>
          </section>

          <section id="ppp">
            <h1>Mes projets</h1>
            <div className="proj">
              {['Java', 'Python'].map((proj) => (
                  <a key={proj} className="projet" href={`${proj}.html`}>
                    <h2>{proj.charAt(0).toUpperCase() + proj.slice(1)}</h2>
                    <Image src={`/images/Projet/${proj}.png`} alt={proj} width={100} height={100} />
                  </a>
              ))}
            </div>
          </section>

          <section id="Competences">
            <h1>Compétences</h1>
            <div className="Competence">
              {['Java', 'PHP', 'HTML', 'CSS', 'Flask', 'SQL', 'Bash', 'Python'].map((skill) => (
                  <div key={skill} className="contenu">
                    <h3>{skill}</h3>
                    <Image src={`/images/Competences/${skill}.png`} alt={skill} width={75} height={75} />
                  </div>
              ))}
            </div>
          </section>
        </main>

        <footer>
          <div id="contact">
            <h3>Contactez-moi</h3>
            <div className="cont">
              <Image src="/images/footer/mail.png" alt="Email" width={30} height={30} />
              <p>vambre.theo2003@gmail.com</p>
            </div>
            <div className="cont">
              <Image src="/images/footer/phone.png" alt="Phone" width={30} height={30} />
              <p>07 83 07 32 34</p>
            </div>
          </div>
        </footer>
      </div>
  );
}