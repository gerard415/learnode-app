import React from 'react'
import {Header} from '../../components'
import {Sidebar} from '../../components'
import {Main} from '../../components'

export default function View() {
  return (
    <div className='w-full h-full'>
        <Header/>
        <div className='flex bg-theme-darker w-full' >
          <Sidebar/>
          <Main/>
        </div>
    </div>
  )
}
