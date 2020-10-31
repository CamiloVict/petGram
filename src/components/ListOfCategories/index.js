import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-camilo.camilovict.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false)
      })
  }, [])
  return {categories, loading}
}

export const CategoryList = () => {

  const {categories, loading} = useCategoriesData();
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
      const onScroll = e => {
        const position = window.scrollY > 200
        showCategories !== position && setShowCategories(position)
      }
      document.addEventListener('scroll', onScroll);

      return () => document.removeEventListener('scroll', onScroll);
  },[showCategories])


  const renderList = (fixed) => (<List fixed = {fixed}>
    {
      categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
    }
  </List>
  )
   
  if(loading){
    return '...Loading'
  }

  return (
    <Fragment>
      {renderList()}
      {showCategories && renderList(true)}
    </Fragment>
  )
}


