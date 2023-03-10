import React, {useEffect, useState} from 'react'
import { BsDot } from 'react-icons/bs';
import Hero from '../Hero'
import LiveChannels from '../LiveChannels'
import {Category} from '../Category'
import { Carousel } from 'antd';

export default function View(props) {

  // let current = 0;
  const [current, setcurrent] = useState(0)
  const [prev, setprev] = useState(4)
  const [next, setnext] = useState(1)
  // let prev = 4;
  // let next = 1;


  const gotoNum = number => {
    setcurrent(number);

    if (number === document.querySelectorAll(".item").length) {
      setcurrent(0);
    }else{
      setcurrent(number);
    }

    if ((number + 1) === document.querySelectorAll(".item").length) {
      setnext(0);
    }else{
      setnext(number + 1);
    }

    if ((number - 1) === -1) {
      setprev(document.querySelectorAll(".item").length - 1);
    }else{
      setprev(number - 1);
    }

    for (let i = 0; i < document.querySelectorAll(".item").length; i++) {
      document.querySelectorAll(".item")[i].classList.remove("active");
      document.querySelectorAll(".item")[i].classList.remove("prev");
      document.querySelectorAll(".item")[i].classList.remove("next");
    }

    console.log(number)
    console.log(number - 1)
    console.log(number + 1)


    if (number === document.querySelectorAll(".item").length) {
      document.querySelectorAll(".item")[0].classList.add("active");
    }else{
      document.querySelectorAll(".item")[number].classList.add("active");
    }

    if ((number + 1) >= document.querySelectorAll(".item").length) {
      document.querySelectorAll(".item")[0].classList.add("next");
    }else{
      document.querySelectorAll(".item")[(number + 1)].classList.add("next");
    }

    if ((number - 1) === -1) {
      document.querySelectorAll(".item")[document.querySelectorAll(".item").length - 1].classList.add("prev");
    }else{
      document.querySelectorAll(".item")[(number - 1)].classList.add("prev");
    }
  }

  const handleClick = (e) => {
    // console.log(e)
    console.log(e.target.id)
    if(e.target.id === 1){

      if(current > 0){
        gotoNum(current - 1)
      }else{
        gotoNum(document.querySelectorAll(".item").length - 1)
      }

    }else{

      if(current < 4){
        gotoNum(current + 1)
      }else{
        gotoNum(0)
      }

    }
  }

  const [curr, setcurr] = useState(0)

  const clickFn = () => {
    
    if(current > document.querySelectorAll(".item").length - 1){
      gotoNum(0)
      console.log("zero")
    }else{
      gotoNum(current + 1)
      console.log(current + 1 + "Then")
    }

    // setTimeout(clickFn, 10000);
  }

  useEffect(() => {
    setTimeout(clickFn, 10000);
}, [current])

  // for (let i = 0; i < button.length; i++) {
  //   button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
  // }

  // const gotoPrev = () => ;

  // const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

  return (
    <div className='w-full ml-[230px] text-white h-max flex flex-col gap-y-16 px-5'>
        {/* <Hero/> */}
        <div className='overflow-hidden w-full h-96 relative'>
          <div className="items">
            {["", "", "", "", "", ""].map((item, index) => (
              <div className={"item grid grid-cols-12 " + (index == 0 ? "prev" : index == 1 ? "active" : index == 2 ? "next" : "")}>
                <div className='w-max h-max rounded-sm bg-red-700 text-xs top-2 px-3 py-1 left-2 absolute text-white flex justify-center items-center'>Live</div>
                <img alt='' className='col-span-9' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gym-and-bodybuilding-youtube-thumbnail-design-template-4bf75ac296b4c72ff2221ff1ee2e8c25_screen.jpg?ts=1594926996" />
                <div className='col-span-3 flex flex-col justify-start items-center gap-y-3 py-5 px-2 h-full bg-[#111]'>
                  <div className='w-14 h-14 overflow-hidden rounded-full'>
                    <img
                      className=' object-cover' 
                      src='http://localhost:3001/static/media/profile2.0e58ba2347194484aa31.png'
                    />
                  </div>
                  <div className='flex text-green-400 flex-col'>
                    <div className='text-xs w-full text-center text-gray-400 mb-5'>Kai Cenat</div>
                    <div className='text-sm font-semibold'>Getting started</div>
                    <div className='text-xs text-white'>23k views</div> {index}
                  </div>
                  <div></div>
                </div>
              </div>
            ))}
            {/* <div className="item flex ">
              <div className='w-max h-max rounded-sm cursor-pointer text-white bg-green-500 hover:bg-opacity-50 hover:text-green-800 transition-all duration-300 bg-opacity-30 text-xs top-2 px-4 py-4 left-2 absolute flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>

              </div>
              <img alt='' src="https://designwizard.com/blog/how-to-make-a-thumbnail/55fb3de0-9df1-11eb-80ac-b9c9bca81a70_1650527123551.jpg" />
              <div className=' w-64 grid py-5 grid-cols-12 px-2 h-full gap-x-3 bg-theme-light'>
                <div className='col-span-4 h-14 overflow-hidden'>
                  <img
                    alt=''
                    className='rounded-full overflow-hidden' 
                    src='data:image/jpeg;base64,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'
                  />
                </div>
                <div className='flex text-green-400 col-span-8 flex-col'>
                  <div className='text-sm font-semibold'>Getting started</div>
                  <div className='text-xs'>intro..</div>
                  <div className='text-xs text-white'>23k views</div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="item flex">
              <img alt='' src="https://marketplace.canva.com/EAE-TItZvck/1/0/1600w/canva-white-orange-simple-cooking-tutorial-youtube-thumbnail-15Iiuu8EkDg.jpg" />
              <div className=' w-64 grid py-5 grid-cols-12 px-2 h-full gap-x-3 bg-theme-light'>
                <div className='col-span-4 h-14 overflow-hidden'>
                  <img
                  alt=''
                    className='rounded-full overflow-hidden' 
                    src='data:image/jpeg;base64,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'
                  />
                </div>
                <div className='flex text-green-400 col-span-8 flex-col'>
                  <div className='text-sm font-semibold'>Getting started</div>
                  <div className='text-xs'>intro..</div>
                  <div className='text-xs text-white'>23k views</div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="item flex">
              <img alt='' src="https://marketplace.canva.com/EAFFt_DccoA/1/0/1600w/canva-colorful-freelancer-youtube-thumbnail-ucA52BZ7Bqk.jpg" />
              <div className=' w-64 grid py-5 grid-cols-12 px-2 h-full gap-x-3 bg-theme-light'>
                <div className='col-span-4 h-14 overflow-hidden'>
                  <img
                  alt=''
                    className='rounded-full overflow-hidden' 
                    src='data:image/jpeg;base64,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'
                  />
                </div>
                <div className='flex text-green-400 col-span-8 flex-col'>
                  <div className='text-sm font-semibold'>Getting started</div>
                  <div className='text-xs'>intro..</div>
                  <div className='text-xs text-white'>23k views</div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="item flex ">
              <img alt='' src="https://www.30daysinger.com/storage/tutorial_thumbnails/6ymMj4SpGyiGwBIHFmgQCex6zqUtdWXCweaKqfJl.png" />
              <div className=' w-64 grid py-5 grid-cols-12 px-2 h-full gap-x-3 bg-theme-light'>
                <div className='col-span-4 h-14 overflow-hidden'>
                  <img
                    alt=''
                    className='rounded-full overflow-hidden' 
                    src='data:image/jpeg;base64,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'
                  />
                </div>
                <div className='flex text-green-400 col-span-8 flex-col'>
                  <div className='text-sm font-semibold'>Getting started</div>
                  <div className='text-xs'>intro..</div>
                  <div className='text-xs text-white'>23k views</div>
                </div>
                <div></div>
              </div>
            </div> */}
            {/* <div className="button-container">
              <div id="1" onClick={handleClick} className="button">
                <svg id="1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </div>
              <div id="2" onClick={handleClick} className="button">
                <svg id="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div> */}
          </div>
        </div>



        <LiveChannels className="grid gap-3 grid-cols-6"/>

        <Category/>

        <div>
          <LiveChannels className="grid gap-6 grid-cols-3" />
          <LiveChannels className="grid gap-6 grid-cols-3" />
          <LiveChannels className="grid gap-6 grid-cols-3" />
          <LiveChannels className="grid gap-6 grid-cols-3" />
          <LiveChannels className="grid gap-6 grid-cols-3" />
        </div>

        <div className='w-full text-white bg-theme-light h-20 flex justify-center items-center'>
          a Padlec company
        </div>
    </div>
  )
}
