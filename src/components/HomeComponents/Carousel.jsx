import React from 'react';
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10 } from '../../assets/assets'

let slides = [
    {id: 1, path: carousel1, alt: 'alt1'},
    {id: 2, path: carousel2, alt: 'alt2'},
    {id: 3, path: carousel3, alt: 'alt3'},
    {id: 4, path: carousel4, alt: 'alt4'},
    {id: 5, path: carousel5, alt: 'alt5'},
    {id: 6, path: carousel6, alt: 'alt6'},
    {id: 7, path: carousel7, alt: 'alt7'},
    {id: 8, path: carousel8, alt: 'alt8'},
    {id: 9, path: carousel9, alt: 'alt9'},
    {id: 10, path: carousel10, alt: 'alt10'},
]

const Carousel = () => {
  return (
    <div id='carousel'>
        <div id="indicators-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg carousel-inner">
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src={carousel1} className="absolute object-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="alt1"/>
                </div>
                {
                    slides.slice(1).map((slide, i) => {
                        return (
                            <div className="hidden duration-700 ease-in-out" data-carousel-item key={slide.id}>
                                <img src={slide.path} className="absolute object-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={slide.alt} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full carousel-pagination" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                {
                    slides.slice(1).map((slide, i) => {
                        return (
                            <button key={slide.id} type="button" className="w-3 h-3 rounded-full carousel-pagination" aria-current="false" aria-label={`Slide ${slide.id}`} data-carousel-slide-to={i-1}></button>
                        )
                    })
                }
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-third dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-primary sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-third dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-primary sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    </div>
  )
}

export default Carousel