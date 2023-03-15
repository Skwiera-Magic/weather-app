import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 text-center text-white bg-gray-900 p-2 weather-header">
    <h1>Weather Dashboard</h1>
  </header>

  
  <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
    <div className="flex flex-wrap ">
      <aside className="lg:w-1/4 pr-4 pl-4 pb-3">
        <h2 id="form-heading" className="mt-1 h3 form-label">
          Search for a City:
        </h2>
        <form id="search-form" className="form">
          <div className="flex items-center mb-4">
            <div className="relative flex items-stretch w-full">
              <input className="form-input weather-search" type="text" id="search-input" placeholder="Liverpool"
                aria-labelledby="form-heading" aria-controls="today forecast" />
              <div className="input-group-append">
                <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 search-button" id="search-button"
                  aria-label="submit search">
                  Search
                </button>
                <hr className="hr weather-hr" />
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-col pl-0 mb-0 border rounded border-gray-300" id="history"></div>
      </aside>

      <div className="lg:w-3/4 pr-4 pl-4 pb-3">
        <section id="today" className="mt-3" role="region" aria-live="polite"></section>
        <section id="forecast" className="flex flex-wrap  mt-3" role="region" aria-live="polite">


        </section>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
