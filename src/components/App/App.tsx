import Header from '../Header/Header';
import ListItems from '../ListItems/ListItems';
import ProgressBar from '../Progressbar/Progressbar';
import './App.scss';

const App = () => {

  return (
    <>
      <Header />
      <div className='container'>
        <div className="content">
          <h1 className='content-header'>Welcome, Buddy!</h1>
          <p className='content-desc'>
            Seeing you here is a reminder that you're embracing life's journey to the fullest. <br />
            Below, you'll find a collection of aspirations that trace your path from those
            first courageous steps to the eventual farewells.
            Each one a marker of the incredible story you're living.
            Take a moment to consider the many achievements and experiences
            that have become part of your unique journey.
            And always remember, don't let external influences sway your mood;
            relish in every facet of life, and continue to flourish and evolve.
          </p>
        </div>
        <hr />
        <section className="checklist-section">
          <h2>From Birth to Death: Life Checklist 📝</h2>
          <ListItems />
        </section>
        <section className="completed-items-section">
          <ProgressBar />
        </section>
      </div>
    </>
  )
}

export default App;
