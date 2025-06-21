import logo from './logo.svg';
import './App.css';
import Launch from './Pages/Launch';

function App() {
   const handleRefresh = () => {
    window.location.reload();
  };
  
  return (
   <div>
      <Launch/>
    </div>
  );
}

export default App;
