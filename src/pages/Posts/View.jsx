import React from 'react'
import {Header} from '../../components'
import {Sidebar} from '../../components'
import {MainPosts} from '../../components'

export default function View() {
  return (
    <div className='w-full h-full'>
        <Header/>
        <div className='flex bg-theme-darker w-full' >
          <Sidebar/>
          <MainPosts/>
        </div>
    </div>
  )
}