import React from 'react'
import Upload from './Upload'
import { Popover } from 'flowbite';
import '../App.css'



export default function Navbar() {
  return (
  
    <nav x-data="{ isOpen: false }" className="mb-4  bg-white shadow dark:bg-gray-800">

        <div className="container px-6 py-3  md:flex">
            <div className="flex items-center justify-between">
                <a href="#">
                    <img className="w-auto h-10 sm:h-10" src="https://3.bp.blogspot.com/-Zz9yA8hkaF0/XG0q3XKlhAI/AAAAAAAAKkU/eXtAaFLWYME6l-kfBhdwUegPT-414AdIwCLcBGAs/s1600/iit-indore.jpeg" alt=""/>
                </a>
    
                <div className="flex lg:hidden">
                    <button x-cloak type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
    
            <div x-cloak className="flex flex-row-reverse  inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
                <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                    <Upload/>
                    <a href="/" style={{"marginLeft": "2rem"}} className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Home</a>
                    <a href="#" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">About</a>
                    <a href="#" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Contact</a>
                </div>   
            </div>
        </div>
    </nav>

  )
}
