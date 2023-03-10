import React from 'react'
import { CategoriesItem } from './CategoriesItem';

export default function View(props) {
  return (
    <div className='px-6 flex border-y border-gray-200 border-opacity-50 h-[450px] items-start justify-center overflow-hidden flex-col gap-5' >
        <h2 className='text-xl font-semibold section-header '>
            Categories
        </h2>
        <div className='grid grid-cols-6 gap-3 '>
            <CategoriesItem
                img='https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg'
                title='Just Chatting'
                viewers='233k Viewers'
                tag1='IRL'
            />
            <CategoriesItem
                img='https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg'
                title='Call Duty: War'
                viewers='38.5k Viewers '
                tag1='FPS'
                tag2='Shooter'
            />
            <CategoriesItem
                img='https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg'
                title='Fortnite'
                viewers='53k Viewers'
                tag1='Shooter'
                tag2='Action'
            />
            <CategoriesItem
                img='https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg'
                title='Minecraft'
                viewers='22k Viewers'
                tag1='Strategy'
            />
            <CategoriesItem
                img='https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg'
                title='Apex Legends'
                viewers='112k Viewers'
                tag1='FPS'
                tag2='Shooter'
            />
            <CategoriesItem
                img='https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg'
                title='Valorant'
                viewers='151k Viewers'
                tag1='FPS'
                tag2='Shooter'
            />  
        </div>
    </div>
  )
}
