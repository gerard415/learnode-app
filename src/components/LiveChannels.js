import React from 'react'
import Channel from './Channel'
import live1 from '../assets/live/live1.jpeg'
import live2 from '../assets/live/live2.jpeg'
import live3 from '../assets/live/live3.jpeg'
import profile1 from '../assets/profile/profile1.png'
import profile2 from '../assets/profile/profile2.png'
import profile3 from '../assets/profile/profile3.png'
import { Card } from './Card'

const LiveChannels = () => {
  return (
        <div className='grid gap-x-4 gap-y-10 pb-10 h-max grid-cols-4' >
            <Card        
                image={"https://i.pinimg.com/736x/72/a0/06/72a0062afba4bc71293859600003265b.jpg"} 
                avatar={profile1}
                title='CHARITY STREAM! Any support is ap...'
                subtitle="Natt"
                tag={[
                {
                    'name': "gaming",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "tutorial",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "strategy",
                    'url': "http://126.0.0.1:3000"
                },
                ]}
            />


            <Card        
                image={"https://i.ytimg.com/vi/IGPzAKxtILA/maxresdefault.jpg"} 
                avatar={profile2}
                title='CHARITY STREAM! Any support is ap...'
                subtitle="Natt"
                tag={[
                {
                    'name': "gaming",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "tutorial",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "strategy",
                    'url': "http://126.0.0.1:3000"
                },
                ]}
            />


            <Card        
                image={"https://i.ytimg.com/vi/MQH8en4c2pk/maxresdefault.jpg"} 
                avatar={profile3}
                title='CHARITY STREAM! Any support is ap...'
                subtitle="Natt"
                tag={[
                {
                    'name': "gaming",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "tutorial",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "strategy",
                    'url': "http://126.0.0.1:3000"
                },
                ]}
            />



            <Card        
                image={"https://marketplace.canva.com/EAE8dp34pBo/1/0/1600w/canva-neutral-simple-and-minimalistic-skincare-routine-youtube-thumbnail-CEgEj1vNRb4.jpg"} 
                avatar={profile3}
                title='Skincare tutorial PT2.'
                subtitle="Natt"
                tag={[
                {
                    'name': "gaming",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "tutorial",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "strategy",
                    'url': "http://126.0.0.1:3000"
                },
                ]}
            />


<Card        
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrWNn2zF56ehX0obRvbzN0I8rSzhDt7LvCQg&usqp=CAU"} 
                avatar={profile1}
                title='CHARITY STREAM! Any support is ap...'
                subtitle="Natt"
                tag={[
                {
                    'name': "gaming",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "tutorial",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "strategy",
                    'url': "http://126.0.0.1:3000"
                },
                ]}
            />


            <Card        
                image={"https://i.ytimg.com/vi/485yYXLZqxc/mqdefault.jpg"} 
                avatar={profile2}
                title='CHARITY STREAM! Any support is ap...'
                subtitle="Natt"
                tag={[
                {
                    'name': "gaming",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "tutorial",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "strategy",
                    'url': "http://126.0.0.1:3000"
                },
                ]}
            />


            <Card        
                image={"https://embed-ssl.wistia.com/deliveries/5279ea91ba79082360e8941013052566.webp?image_crop_resized=1280x720"} 
                avatar={profile3}
                title='CHARITY STREAM! Any support is ap...'
                subtitle="Natt"
                tag={[
                {
                    'name': "gaming",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "tutorial",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "strategy",
                    'url': "http://126.0.0.1:3000"
                },
                ]}
            />



            <Card        
                image={"https://livemartialartstraining.com/wp-content/uploads/2022/12/LMA-E-Course-Thumbnail-1.png"} 
                avatar={profile3}
                title='Skincare tutorial PT2.'
                subtitle="Natt"
                tag={[
                {
                    'name': "gaming",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "tutorial",
                    'url': "http://126.0.0.1:3000"
                },
                {
                    'name': "strategy",
                    'url': "http://126.0.0.1:3000"
                },
                ]}
            />
        </div>
  )
}

export default LiveChannels