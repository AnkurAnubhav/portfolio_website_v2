import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Portfolio from './PortfolioV2';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Portfolio />
      </ErrorBoundary>
    </div>
  );
}

export default App;
