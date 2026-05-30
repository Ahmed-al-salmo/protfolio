// import React from 'react'
import './page.css'
import Icons from './Icons/page'
import NavBar from '../../navbar/page'
import Image from 'next/image';

// const Home = () =>
    export default async function Home() {
        await new Promise((res)=>{
            setTimeout(()=>{
                res("delay......")
                console.log("shit")
            },1500)
        })
    return (
        <div className=' '>
            
            <NavBar/>
            <div className="flex bg-teal-950 min-h-[100vh]  pt-[190px] justify-around max-[880px]:flex-col-reverse max-[880px]:items-center ">
                
                <div className=" p-3 text-white font-mono w-auto max-[880px]:pt-[100px] " >
                    <div>
                        <p>Software Developer</p>
                        <h1 className='text-4xl'>
                            Hi I am<br/> 
                            <span className='text-green-500 '> Ahmed Alsalmo, </span>
                            <br/> a Web Dev
                        </h1>
                        <p className='pt-5'>1 - a profisional in verious programming languages</p>
                        <p>2 - I can work under pressure</p>
                        <p className='pb-8'>3 - I can be an effective member of the team </p>
                    </div>
                    <Icons/>
                </div>
                
                <div className=" flex justify-center items-center w-[300px] h-[400px] bg-[url(/images/photo_2026-05-30_19-37-29.jpg)] bg-cover rounded-full max-[640px]:w-[270px] max-[640px]:h-[270px] max-[350px]:w-[250px] max-[350px]:h-[250px]">
                        {/* <div className="spiner w-[310px] h-[310px] rounded-full  border-green-500 border-[10px] border-dashed  max-[640px]:w-[290px] max-[640px]:h-[290px] max-[350px]:w-[270px] max-[350px]:h-[270px]"></div> */}
                    </div>
                
            </div>
        </div>
    )
}

// export default Home
