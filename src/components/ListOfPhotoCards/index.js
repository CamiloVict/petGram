import React from 'react'
import {PhotoCard} from '../PhotoCard/index'
import {List, Item} from './styles'
import {photos} from '../../../api/db.json'


export const PhotoCardList = () => {
    return (
      <List>
          {
            photos.map(photo => <Item key = {photo.id}> <PhotoCard {...photo}/> </Item>)
          }
      </List>
    )
}


