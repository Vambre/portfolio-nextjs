import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div>
        <header className="header">
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
              Je m&apos;appelle Théo Vambre, j&apos;ai 21 ans. J&apos;ai suivi un bac technologique STI2D
              (option SIN) au lycée André Malraux à Béthune et suis actuellement en 2e année
              de BUT Informatique à l&apos;IUT de Lens.
            </p>
          </section>

          <section className="secProjet" id="ppp">
            <h1>Mes projets</h1>
            <div className="proj">
              <Link className="projet" href="/Java/page">
                <h2>Java</h2>
                <Image src="/images/Projet/Java.png" alt="Java" width={100} height={100}/>
              </Link>
              <a className="projet" href="/python">
                <h2>Python</h2>
                <Image src="/images/Projet/Python.png" alt="Python" width={100} height={100}/>
              </a>
              <a className="projet" href="/web">
                <h2>Web</h2>
                <div className="web">
                  <Image src="/images/Projet/HTMLCSS.png" alt="HTML CSS" width={100} height={100}/>
                  <Image src="/images/Projet/PHP.png" alt="PHP" width={100} height={100}/>
                </div>
              </a>
            </div>
          </section>

          <section id="Competences">
            <h1>Compétences</h1>
            <div className="Competence">
              {['Java', 'PHP', 'HTML', 'CSS', 'Flask', 'SQL', 'Bash', 'Python'].map((skill) => (
                  <div key={skill} className="contenu">
                    <h3>{skill}</h3>
                    <Image src={`/images/Competences/${skill}.png`} alt={skill} width={75} height={75}/>
                  </div>
              ))}
            </div>
          </section>
        </main>



        <footer>
          <div id="contact">
            <h3>Contactez-moi</h3>
            <div className="cont">
              <Image src="/images/footer/mail.png" alt="Email" width={30} height={30}/>
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