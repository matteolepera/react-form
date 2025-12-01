import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [articles, setArticles] = useState([
    "Tecnologia 2025: cose così futuristiche che neanche nei film",
    "Produttività: trucchi semplici per sembrare super organizzati (anche se non lo sei)",
    "Aprire un business digitale senza impazzire: missione (quasi) possibile",
    "Smart working: gli strumenti che ti fanno sembrare impegnato anche in pigiama",
    "AI nel marketing: come far lavorare le macchine mentre tu prendi un caffè",
    "Le skill più richieste nel 2025: ovvero come non farsi superare dai robot"
  ]);
  const [newArticles, setNewArticles] = useState('');

  function addArticle(event) {
    event.preventDefault();
    setArticles([...articles, newArticles]);
    setNewArticles('');
  }

  return (
    <>
      <header>
        <nav className="navbar bg-primary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Articoli Esotici</a>
          </div>
        </nav>
      </header>

      <main>
        <div className="container py-3">
          {/* <p>{JSON.stringify(articles)}</p> */}
          <section>
            <ul className='list-group list-group-flush'>
              {articles.map((article, index) => {
                return (
                  <li key={index} className='list-group-item'><h4>{article}</h4></li>
                )
              })
              }
            </ul>
          </section>

          <section className='mt-4'>

            <form className='row' onSubmit={addArticle}>
              <div className="col">
                <label for="article" className="form-label"><h5>Inserisci Articolo:</h5></label>
                <input type="text" id="article" className="form-control" value={newArticles}
                  onChange={(event) => { setNewArticles(event.target.value) }} />
                <button type="submit" className='btn btn-primary mt-3'>Aggiungi</button>
              </div>
            </form>

          </section>

        </div>
      </main>


    </>
  )
}

export default App
