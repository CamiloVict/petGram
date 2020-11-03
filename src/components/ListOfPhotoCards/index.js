import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { List, Item } from './styles'

export const PhotoCardListComponent = ({ data: { photos = [] } } = {}) => {

  return (
    <List>
      {
        photos.map(photo => <Item key={photo.id}> <PhotoCard {...photo} /> </Item>)
      }
    </List>
  )
}


