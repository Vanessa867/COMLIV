import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const App = () => {
  return (
    <div>
      <Header />
      <Body  />
      <Footer />
    </div>
  );
};

export default App;

