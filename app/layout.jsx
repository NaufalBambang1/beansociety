import '../styles/global.css'
import SidebarDrawer from '../components/sidebar/siderbarDrawer'
import Navbar from '../components/navbar/navbar'
import Footer from "../components/footer/footer"

export const metadata ={
    title: 'Bean Society',
    description: 'The best coffee shop in Indonesia'
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
        <body>
          <header>
            <Navbar />
          </header>
          <main className='pt-20'>
            <SidebarDrawer />
            <section className='app'>
                {children}
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </body>
    </html>
  )
}

export default Rootlayout