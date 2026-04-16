"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList,faTimes } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const page=()=>{
    const pathname = usePathname()
    console.log(pathname)
    
    console.log()
    const sideBarOpen=()=>{
        try {
            document.getElementById("sideBar").style.transitionDuration=".5s"
            document.getElementById("sideBar").style.width ='300px' 
        } catch (error) {
            console.log(error)
        }
    }
    const sideBarClose=()=>{
        try{
            document.getElementById("sideBar").style.transitionDuration=".5s"
            document.getElementById("sideBar").style.width ='0px'
        }catch(err){
            console.log(err)
        } 
    }
    return (
        <div className='flex justify-around fixed  w-[100%] m-3 p-3 font-mono bg-teal-950 z-50 max-[640px]:p-0'>

            <div className='pt-3 text-3xl text-white cursor-pointer max-[640px]:text-xl max-[640px]:p-0'>
                Ahmed<span className='text-green-300'>.</span>
            </div>
            <ul className='max-[640px]:hidden  flex justify-center gap-x-4 align-center p-3 bg-[#ffffff6e] text-white rounded-4xl'>
                <li className={`${pathname==="/components/Ahmed"? "border-b-4 border-b-green-500 text-green-500":"" }  hover:border-b-4 hover:border-b-green-500  hover:text-green-500  cursor-pointer`}><Link href='/components/Ahmed'>Home</Link></li>
                <li className={`${pathname==="/components/About"? "border-b-4 border-b-green-500 text-green-500":"" }  hover:border-b-4 hover:border-b-green-500  hover:text-green-500 cursor-pointer`} ><Link href="/components/About">About</Link></li>
                <li className={`${pathname==="/components/services"? "border-b-4 border-b-green-500 text-green-500":"" } hover:border-b-4 hover:border-b-green-500  hover:text-green-500 cursor-pointer`}><Link href="/components/services" >Services</Link> </li>
                <li className={`${pathname==="/components/resume"? "border-b-4 border-b-green-500 text-green-500":"" }  hover:border-b-4 hover:border-b-green-500  hover:text-green-500 cursor-pointer`}><Link href="/components/resume" >Resume</Link> </li>
                <li className={`${pathname==="/components/work"? "border-b-4 border-b-green-500 text-green-500":"" } hover:border-b-4 hover:border-b-green-500  hover:text-green-500 cursor-pointer`}> <Link href="/components/work" >Works</Link></li>
            </ul>
            <div className=' bg-green-500 text-white p-3 rounded-sm  cursor-pointer max-[640px]:text-sm'>
                <Link 
                    // download  
                    href='./images/CamScanner 12-02-2024 15.09.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                
                >Download CV</Link>
                
            </div>
            <div className='min-[640px]:hidden'><FontAwesomeIcon icon={faList} className=' w-3 h-3 text-2xl  text-white cursor-pointer ' onClick={sideBarOpen} /></div>
            <div  className=' text-white  min-[640px]:hidden absolute right-0 top-0 transform-[50px] overflow-auto'>
                <ul id='sideBar' className='  w-0 bg-gray-800  overflow-auto'>
                    <button className='p-3 cursor-pointer ' onClick={sideBarClose}> <FontAwesomeIcon icon={faTimes} />  </button>
                    <p className='p-5 text-3xl text-green-500'>Ahmed</p>
                    <li className='p-5 '><Link href='/components/contact'> Contact me</Link></li>
                    <hr/>
                    <li className='p-5 '><Link href='/components/Ahmed'>Home</Link></li>
                    <hr/>
                    <li className='p-5'><Link href="/components/About">About</Link></li>
                    <hr/>
                    <li className='p-5'><Link href="/components/services" >Services</Link></li>
                    <hr/>
                    <li className='p-5'><Link href="/components/resume" >Resume</Link> </li>
                    <hr/>
                    <li className='p-5'><Link href="/components/work" >Works</Link></li>
                </ul>
            </div>
        
        </div>
    )
}

export default  page
