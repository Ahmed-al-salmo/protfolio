"use client"
import {useState } from 'react'
import NavBar from '../../navbar/page'
import "./ahh.css"

const education={
    title:"My Education",
    discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio consectetur dolorem ",
    info:[
        {
            date:"2010 - 2022",
            study:"school",
            place:"school"
        },
        {
            date:"2022 - 2025",
            study:"IT Engineer",
            place:"College"
        },
        {
            date:"2025 - present",
            study:"Software Engineer",
            place:"College"
        },
        {
            date:"2023 - 2024",
            study:"problem solving ",
            place:"online courses"
        },
        {
            date:"2023 - 2024",
            study:" basic of front-end",
            place:"online courses"
        },
        {
            date:"2024 - 2024",
            study:"core of front-end",
            place:"online courses META"
        },
        {
            date:"2023 - 2025",
            study:"English ",
            place:"LAC institute & coursera"
        },
    ]
}

const skills={
    title:"My Skills",
    discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio consectetur dolorem ",
    info:[
        {
            type:"language",
            typeName:'HTML 5, CSS 3, JavaScript, TypeScript',
        },
        {
            type:"framework",
            typeName:'React js, Next js, Tailwind css',
        },
        {
            type:"library",
            typeName:'Firebase, Json, Figma, GitHub ',
        },
        {
            type:"state managment",
            typeName:'Redux, Context API',
        },
        
    ]
}

const about={
    title:"About Me",
    discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio consectetur dolorem ",
    
    info:{
        
        name:" Ahmed Alsalmo",
        nationality:"Syrian",
        experiencs:"junior",
        freelancer:"Available",
        phone:"+963 953 736 386",
        email:"salmoahmad079@gmail",
        lang:" Arabic, English"
    },
    
}

const Education=()=>{
    return(
        <div>
            <div className='pl-3 text-4xl text-white font-mono'>{education.title} </div>
            <div className='text-sm pl-3  pt-4 text-white'>{education.discription} </div>
            <div className='listView flex gap-3 pt-[30px] flex-wrap w-[100%] h-[350px] overflow-auto '>
                
                {
                    education.info.map((ele,index)=>{
                        return(
                            <div key={index} className='text-white p-3 w-[48%] h-[150px] bg-[#073835] rounded-xl max-[450px]:w-[90%] max-[450px]:text-center'>
                                <div className='text-green-500'>{ele.date}</div>
                                <div className='p-3'>{ele.study}</div>
                                <div className='text-[12px] '><p className='inline-block text-4xl text-green-500'>.</p>{ele.place}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const Skills=()=>{
    return(
        <div>
            <div className='pl-3 text-4xl text-white font-mono'>{skills.title} </div>
            <div className='text-sm pl-3  pt-4 text-white'>{skills.discription} </div>
            <div className='listView  gap-3 p-3 flex-wrap w-[100%] h-[350px] overflow -auto '>
                
                {
                    skills.info.map((ele,index)=>{
                        return(
                            <div key={index} className=' flex-col items-center text-white p-3 w-[96%] m-2 bg-[#073835] rounded-xl max-[360px]:w-[90%] '>
                                <div className=' text-white  w-fit  '>
                                    <span className='text-green-300'>{ele.type}: </span>
                                    {ele.typeName}
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const AboutMe=()=>{
    return(
        <div>
            <div className='pl-3 text-4xl text-white font-mono'>{about.title} </div>
            <div className='text-sm pl-3  pt-4 text-gray-500'>{about.discription} </div>
            <div className='listView text-white font-mono pt-[30px] h-[300px]  w-[100%]  overflow-auto '>
                <div className='bg-[#073835] py-3 px-4 rounded-lg m-1 max-[530px]:w-[90%]' ><span className='text-green-500'> Name: </span> {about.info.name}</div>
                <div className='bg-[#073835] py-3 px-4 rounded-lg m-1 max-[530px]:w-[90%]'><span className='text-green-500'> Experiencs: </span>{about.info.experiencs}</div>
                <div className='bg-[#073835] py-3 px-4 rounded-lg m-1 max-[530px]:w-[90%]'><span className='text-green-500'> Email: </span>{about.info.email}</div>
                <div className='bg-[#073835] py-3 px-4 rounded-lg m-1 max-[530px]:w-[90%]'><span className='text-green-500'> Freelancer: </span>{about.info.freelancer}</div>
                <div className='bg-[#073835] py-3 px-4 rounded-lg m-1 max-[530px]:w-[90%]'><span className='text-green-500'> Github: </span> </div>
                <div className='bg-[#073835] py-3 px-4 rounded-lg m-1 max-[530px]:w-[90%]'><span className='text-green-500'> Linkedin: </span> </div>
                <div className='bg-[#073835] py-3 px-4 rounded-lg m-1 max-[530px]:w-[90%]'><span className='text-green-500'> Nationality: </span>{about.info.nationality}</div>
                <div className='bg-[#073835] py-3 px-4 rounded-lg m-1 max-[530px]:w-[90%]'><span className='text-green-500'> Phone: </span>{about.info.phone}</div>
                <div className='bg-[#073835] py-3 px-4 rounded-lg m-1 max-[530px]:w-[90%]'><span className='text-green-500'> Language: </span>{about.info.lang}</div>
            </div>
        </div>
    )
}

const clickHandler =(ele)=>{
    const x= document.querySelectorAll(".container li");
    console.log(x[0])
    x[0].id="";  
    x[1].id="";  
    x[2].id="";  
    ele.target.id="activeItem"
}


const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [item , setItem]=useState("")
    return (
        <div className='bg-teal-950 min-h-[100vh] flex font-mono max-[650px]:pb-[200px]'>
            
            <NavBar />
            <div className='container w-[60%] min-h-[60vh] m-auto flex justify-between max-[1000px]:w-[100%] max-[650px]:flex-wrap max-[650px]:pt-[200px] max-[650px]:justify-center'>
                <div className='w-[35%] h-[70vh] text-white max-[650px]:w-[50%] max-[650px]:w-[90%] max-[650px]:h-auto'>
                    <p className='text-4xl  pb-4'>Why hire me?</p>
                    <p className='text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
                    <ul className='text-center mt-[40px]'>
                        <li id="activeItem" onClick={(e)=>{setItem("Education");clickHandler(e) } } className='activeItem bg-gray-700 py-3 rounded-xl cursor-pointer hover:bg-green-500'>Education</li>
                        <li onClick={  (e)=>{setItem("Skills");clickHandler(e) } }  className='bg-gray-700 py-3 mt-2 rounded-xl cursor-pointer  hover:bg-green-500'>Skills</li>
                        <li onClick={(e)=>{setItem("About");clickHandler(e) } } className='bg-gray-700 py-3 mt-2 rounded-xl cursor-pointer  hover:bg-green-500'>About me</li>
                        
                    </ul>
                </div>
                <div className=' w-[60%] h-[70vh] max-[650px]:w-[90%] max-[650px]:py-[100px]'>
                    {
                        item==="Skills" ? Skills():
                                item==="About"? AboutMe():Education()
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default page
