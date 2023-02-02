import Header from "../Header";
import Footer from '../Footer'
// import { Container } from './styles';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
