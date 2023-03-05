import React from 'react'
import View from './View'
import { rec_channels } from '../../data'
import live1 from '../../assets/live/live1.jpeg'
import profile1 from '../../assets/profile/profile1.png'

export const Card = (props) => {
  return (
    <View 
      image={props.image} 
      avatar={props.avatar}
      title={props.title}
      subtitle={props.subtitle}
      tag={props.tag}
    />
  )
}
