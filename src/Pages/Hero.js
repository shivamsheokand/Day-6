import React from 'react'
import img from '../assets/img.png'
import Arrow from '../assets/Arrow.png'
import Arrow1 from '../assets/Arrow1.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Hero = () => {
    return (
        <div className='flex flex-col h-screen items-center'>
            <div className='flex justify-start items-center mt-12'>
                <div className='flex flex-col w-[70%] bg-[#495e41] px-12 ml-14 py-8 relative'>
                    <h1 className='text-5xl font-serif text-white w-[20%]'>Hello, New Home</h1>
                    <p className=' w-[60%] text-white'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultrices gravida. Risus com modo viverra mae cenas accum san lacus vel facilisis.</p>
                    <button className='text-[#495e41] bg-[#a8c29d] px-2 py-1 w-[14%] mt-3'>Start Now</button>
                </div>
                <div>
                    <img src={img} className='h-[24rem] resize absolute top-16 right-14 w-[28rem]' alt="" />
                </div>
                <div className=' absolute w-20 h-10 bg-[#33402e] translate-y-12'>
                    <img className='h-3 w-3 resize translate-x-12 translate-y-4' src={Arrow} alt="" />
                </div>
                <div className=' absolute w-20 h-10 bg-[#33402e] top-28 right-0'>
                    <img className='h-3 w-3 resize translate-x-5 translate-y-4' src={Arrow1} alt="" />
                </div>
            </div>
            <ul className='flex absolute left-12 bottom-12 '>
                <li className='h-8 w-8 resize' ><FaSquareInstagram /></li>
                <li className='h-8 w-8 resize' ><FaSquareFacebook /></li>
                <li className='h-8 w-8 resize' ><FaSquareTwitter /></li>
                <li className='h-8 w-8 resize' ><FaSquareWhatsapp /></li>
            </ul>
        </div>
    )
}

export default Hero