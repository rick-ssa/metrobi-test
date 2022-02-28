import Content from "./components/Content";
import './App.css'

function App() {
  return (
    <div className="app">
        <header>
          <Content color="#99ccff" title='Header' />
        </header>

        <section className="app__first-section">

          <section className="app__first-section__left-side">
            <article className="app__first-section__left-side__hero">
              <Content color="#ffccff" title="Hero" />
            </article>
            <aside className="app__first-section__left-side__sidebar">
              <Content color="#aaff80" title="Sidebar" />
            </aside>
          </section>

          <section className="app__first-section__right-side">
            <main className="app__first-section__right-side__main">
              <Content 
                color="orange" 
                title="Main Content" 
                text='**if things do not look right, make sure your browser is in "Experimental Mode"'
                textPaddingTop='10px'
              />
            </main>
            <article className="app__first-section__right-side__extra-content">
              <Content color="gray" title="Extra Content" />
            </article>
          </section>

        </section>

        <section className="app__second-section">

          <article className="app__second-section__related-images">
            <Content color='darkgreen' title="Related Images" />
          </article>

          <article className="app__second-section__related-posts">
            <Content color='pink' title="Related Posts" />
          </article>

        </section>

        <footer>
          <Content color='orange' title="Footer" />
        </footer>
    </div>
  );
}

export default App;
