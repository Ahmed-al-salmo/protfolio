import React from 'react'
import NavBar from '../../navbar/page'
import Information from './information/page'

export default async function About(){
    await new Promise((res)=>{
        setTimeout(()=>{
            res("delay....")
            console.log("wqfpoqj")
        },1500)
    })


    return(
        <div>
            <NavBar />
            <div className='flex bg-teal-950 min-h-[100vh] max-[800px]:block '>
            
                <div className=' flex justify-center items-center  min-w-[40%] min-h-[100vh] max-[800px]:min-h-[50vh]  max-[800px]:py-[100px]'>
                    <div className='bg-[url(/images/file_000000000f1461f4ab74f6969b8f97d3.png)] bg-cover  shadow-xl shadow-green-500 w-[300px]  h-[300px] border-b-[2px] border-[2px] border-green-500 flex justify-center items-center rounded-t-full rounded-r-full max-[450px]:w-[250px] max-[450px]:h-[250px]'>
                        
                    </div>
                </div>
                <div className=' pt-[150px] min-w-[60%]   max-[600px]:pt-0'>
                    <Information />
                </div>
                
            </div>
        </div>
    );
}
