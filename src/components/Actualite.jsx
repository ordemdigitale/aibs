import React from 'react'

const Actualite = () => {
  return (
    <section className="p-8 bg-gradient-to-t from-white from-20% via-blue-300 via-45% to-primary to-85%">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
            <h1 className="font-karla text-3xl font-bold text-white mb-2 tracking-tight">
							Actualités</h1>
							<p className="font-montserrat text-white">Suivez toutes les news et actualités de votre école</p>
        </div>

				<div className="grid grid-cols-2 gap-4">
					{/* CARD 1 */}
					<div className="place-self-end max-w-lg bg-white shadow">
							<a href="#">
									<img className="" src="https://i0.wp.com/atlantique-ibs.net/wp-content/uploads/2022/02/P1110266-scaled.jpg" alt="" />
							</a>
							<div className="p-5 text-center">
									<h5 className="mb-2 text-xl font-montserrat font-semibold tracking-tight text-tc-001">
										Visite D’entreprise À La Société Ciment Cote D’Ivoire (SCCI)</h5>
									<p className="mb-3 font-montserrat text-tc-001 text-sm">
										Le vendredi 01 Avril 2022 les étudiants de AIBS ont visité la Société Ciment Cote d’Ivoire.</p>
									<a href="#" className="uppercase font-montserrat inline-flex items-center px-3 py-2 text-xs font-bold text-center text-secondary hover:underline underline-offset-8 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300">
											Lire la suite{/* 
											<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
													<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
											</svg> */}
									</a>
							</div>
					</div>

					{/* CARD 2 */}
					<div className="place-self-start max-w-lg bg-white shadow dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
									<img className="" src="https://i0.wp.com/atlantique-ibs.net/wp-content/uploads/2022/02/P1120029-scaled.jpg" alt="" />
							</a>
							<div className="p-5 text-center">
									<a href="#">
									<h5 className="mb-2 text-xl font-montserrat font-semibold tracking-tight text-tc-001">
											Examen TOEIC <br /> Bachelor 2</h5>
									</a>
									<p className="mb-3 font-montserrat tc-001 text-sm">
										Dans le cadre de leur académique les étudiants du programme Bachelor ont effectué leur test TOEIC ce samedi 09 avril.</p>
									<a href="#" className="uppercase font-montserrat inline-flex items-center px-3 py-2 text-xs font-bold text-center text-secondary hover:underline underline-offset-8 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300">
										Lire la suite{/* 
											<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
													<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
											</svg> */}
									</a>
							</div>
					</div>

				</div>

				<div className="py-8 px-4 text-center">
					<a href="#"
						className="font-montserrat text-sm font-semibold text-secondary py-2 px-4 ms-2 bg-transparent rounded-md border border-secondary uppercase focus:outline-none hover:bg-secondary hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100">
						Voir toutes les actualités</a>
				</div>

    </section>
  )
}

export default Actualite
{/* <section className="bg-green-700">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <a href="#" class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span> <span class="text-sm font-medium">Jumbotron component was launched! See what's new</span> 
            <svg class="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <form class="w-full max-w-md mx-auto">   
            <label for="default-email" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
            <div class="relative">
                <div class="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </div>
                <input type="email" id="default-email" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email here..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
            </div>
        </form>
    </div>
    <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
</section>



<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section> */}