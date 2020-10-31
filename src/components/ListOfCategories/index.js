import React, {useState, useEffect} from 'react'
import {Category} from '../Category/index'
import {List, Item} from './styles'


export const CategoryList = () => {

  const [categories, setCategories] = useState([]); 
  
  useEffect(() =>{
    fetch('https://petgram-camilo.camilovict.vercel.app/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response);
    })
  }, [])

    return (
      <List>
          {
            categories.map(category => <Item key = {category.id}> <Category {...category}/> </Item>)
          }
      </List>
    )
}


