import React from 'react'
import { Category, NavCategory } from '../../components'
import LiveChannels from '../../components/LiveChannels'

export default function View() {
  return (
    <div className='w-full h-full flex flex-col gap-10'>
      <NavCategory categories={["All", "Cooking", "Gym", "Coding", "Games", "Videography", "Forex", "Martial Arts", "Repairs", "Well being", "Health"]} />
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
