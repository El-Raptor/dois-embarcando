import '../styles/index.css'; // Importa os estilos globais
import Header from '../components/Header'; // Header com a NavBar
// import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header /> {/* NavBar será parte do Header */}
      <Component {...pageProps} /> {/* Renderiza a página atual */}
      {/* <Footer /> */}
    </>
  );
};

export default MyApp;
