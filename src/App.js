import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Layout />
      <Footer />
    </Provider>
  );
}

export default App;
