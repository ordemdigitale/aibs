import Layout from "../components/Layout.jsx"
import Carousel from "../components/Carousel"
import CarouselAlt from "../components/CarouselAlt.jsx"
import Formations from "../components/Formations"
import Actualite from "../components/Actualite"
import Trust from "../components/Trust.jsx"
import Stats from "../components/Stats.jsx"
import Footer from "../components/Footer"

const Home = () => {
  const slides = [
    "https://i0.wp.com/atlantique-ibs.net/wp-content/uploads/2024/01/2.jpg",
    "https://i0.wp.com/atlantique-ibs.net/wp-content/uploads/2022/08/Slide_piq_2022_2023-scaled.jpg",
    "https://i0.wp.com/atlantique-ibs.net/wp-content/uploads/2024/01/3.jpg",
    "https://i0.wp.com/atlantique-ibs.net/wp-content/uploads/2024/01/1-4.jpg",
  ];

  return (
    
      <Layout>

        {/* <Carousel /> */}
        
        <div className="w-[100%] m-auto">
          <CarouselAlt slides={slides} />
        </div>
        <Formations />

        <Actualite />
        
        <Trust />
        
        <Stats />
        
        <Footer />
    
    </Layout>
  )
}

export default Home
{/*   <h1 className='font-karla font-regular'>Vite + React</h1>
  <div className="card">
    <p className='font-montserrat font-thin'>
      Montserrat medium
    </p>
    <p className='font-montserrat font-bold'>
      Montserrat regular
    </p>
    <p className='font-m-regular font-bold'>
      Montserrat bold
    </p>
  </div>
  <p className="">
  Karla regular no style
  </p>
  <p className="font-karla font-regular">
    Karla regular
  </p> */}