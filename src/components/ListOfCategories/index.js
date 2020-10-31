import React, {useState, useEffect} from 'react'
import {Category} from '../Category/index'
import {List, Item} from './styles'
import {categories as mockCategories} from '../../../api/db.json'
export const CategoryList = () => {

  const [categories, setCategories] = useState(mockCategories); //El inicial es un array vacio
  
  useEffect(() =>{
    fetch('URL')
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


