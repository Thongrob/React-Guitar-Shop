import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';

function MainLayout({children}) {
  return (
    
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default MainLayout