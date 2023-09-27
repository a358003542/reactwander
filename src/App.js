import './App.css';
import Header from './components/header';
import NavigationBar from './components/navigationBar';
import SideBar from './components/sideBar';
import MainContent from './components/mainContent';
import Footer from './components/footer';


function App() {
  return [
    <Header />,
    <NavigationBar />,
    <SideBar />,
    <MainContent />,
    <Footer />,
  ];
}

export default App;
