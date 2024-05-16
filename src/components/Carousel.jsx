

const Carousel = () => {
  return (
    <>

<div id="animation-carousel" className="relative overflow-hidden w-full" data-carousel="static">
    
    <div className="h-[85vh]">
         
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i0.wp.com/atlantique-ibs.net/wp-content/uploads/2024/01/2.jpg"
              className="brightness-50 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="image_1" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white sm:text-3xl dark:text-gray-800">
              <h2 className="font-karla font-medium text-4xl">Signature de Partenariat <br /> AIBS & NCVT</h2>
              <p className="font-montserrat font-regular text-sm my-6">
                AIBS a signé un important partenariat avec Nanning College for Vocational Technology, <br />partenariat qui permettra aux étudiants de AIBS de…</p>
                <a href="#"
                className="font-montserrat text-xs font-semibold text-white py-2 px-4 bg-transparent rounded-md border hover:border-white uppercase focus:outline-none hover:bg-white hover:text-tc-001 focus:z-10 focus:ring-4 focus:ring-gray-100">
                Lire la suite</a>
            </div>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i0.wp.com/atlantique-ibs.net/wp-content/uploads/2022/08/Slide_piq_2022_2023-scaled.jpg"
              className="brightness-50 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="image_2" />
            <div className="absolute top-[70%] left-[49%] -translate-x-1/2 -translate-y-1/2 text-white sm:text-3xl dark:text-gray-800">
              <a href="#"
                className="font-montserrat text-xs font-semibold text-white py-2 px-4 ms-2 bg-transparent rounded-md border hover:border-white uppercase focus:outline-none hover:bg-white hover:text-tc-001 focus:z-10 focus:ring-4 focus:ring-gray-100">
                En savoir +</a>
            </div>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://i0.wp.com/atlantique-ibs.net/wp-content/uploads/2024/01/3.jpg"
              className="brightness-50 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="image_3" />
            <div className="absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
              <h2 className="font-karla font-medium text-4xl">Rentrée 2024-2025</h2>
            </div>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i0.wp.com/atlantique-ibs.net/wp-content/uploads/2024/01/1-4.jpg"
              className="brightness-50 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="image_4" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white sm:text-3xl dark:text-gray-800">
              <h2 className="font-karla font-medium text-4xl">Conference AIBS et EUROCHAM</h2>
            </div>
        </div>
    </div>
    
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>




</>


  )
}

export default Carousel