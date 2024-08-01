import "./styles/Presentation.css"

export default function Presentation() {
  return (
    <section className="presentation-container">
      <div>
        <div>
          <h1 className="presentation-title">Hey! I'm Erick Torres</h1>
          <h2 className="presentation-subtitle">A software developer</h2>
          <p>A passionate physics engineer that found his love for coding!</p>
        </div>
        <nav>
          <ul className="presentation-ul">
            <li>
              <a href="https://github.com/Eckry" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="">Linkdin</a>
            </li>
          </ul>
        </nav>
      </div>
      <img className="presentation-image" src="https://vitejs.dev/logo-with-shadow.png" alt="me" />
    </section>
  );
}
