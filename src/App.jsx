import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header, Sidebar } from './components'
import {Homepage, Subscription, Posts, Watch} from './pages'


const App = () => {
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
    <>
    <div className='w-full h-full md:block hidden'>
      <BrowserRouter className='w-full ml-[230px] text-white h-max flex flex-col gap-y-16 px-5 overflow-hidden'>
          <Header/>

          <div className='flex bg-theme-darker w-full' >
            <Sidebar/>
            <div className='w-full ml-[230px] text-white h-max flex flex-col gap-y-16 px-5'>
                <Routes>
                  <Route path='/' element={<Homepage/>} />
                  <Route path='/subscriptions' element={<Subscription/>} />
                  <Route path='/posts' element={<Posts/>} />
                  <Route path='/watch' element={<Watch/>} />
                </Routes>
            </div>
          </div>
      </BrowserRouter>
    </div>

    <div className='w-full h-full md:hidden block'>
      <BrowserRouter className='w-full ml-[230px] text-white h-max flex flex-col gap-y-16 px-5 overflow-hidden'>
          <Header/>

          <div className='flex bg-theme-darker w-full' >
            <Sidebar/>
            <div className='w-full ml-[230px] bg-theme-darker text-white h-max flex flex-col gap-y-16 px-5'>
                <Routes>
                  <Route path='/' element={<Homepage/>} />
                  <Route path='/subscriptions' element={<Subscription/>} />
                  <Route path='/categories' element={<Posts/>} />
                  <Route path='/livestream' element={<Posts/>} />
                  <Route path='/watch' element={<Watch/>} />
                </Routes>
            </div>
          </div>
      </BrowserRouter>
    </div>
  </>
  )
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<Homepage/>} />
  //       <Route path='/subscriptions' element={<Subscription/>} />
  //       <Route path='/posts' element={<Posts/>} />
  //       <Route path='/watch' element={<Watch/>} />
  //     </Routes>
  //   </BrowserRouter>
  // )
}

export default App