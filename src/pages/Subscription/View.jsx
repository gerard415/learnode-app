import React from 'react'
import { NavCategory } from '../../components'
import LiveChannels from '../../components/LiveChannels'

export default function View() {
  return (
    <div className='w-full h-full flex justify-start flex-col gap-10'>
      <NavCategory categories={["Videos", "Posts", "Polls", "Shorts", "Lives"]} />

      <div className='flex flex-col h-max w-full gap-5'>
        <div className='text-lg text-black font-semibold'>Today</div>
        <div>
          <LiveChannels />
          <LiveChannels />
          <LiveChannels />
        </div>
      </div>

      <hr />

      <div className='flex flex-col h-max w-full gap-5'>
        <div className='text-lg text-black font-semibold'>Yesterday</div>
        <div>
          <LiveChannels />
          <LiveChannels />
          <LiveChannels />
        </div>
      </div>
    </div>
  )
}
