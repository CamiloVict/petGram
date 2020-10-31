import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, Item } from './styles'


export const CategoryList = () => {

  const [categories, setCategories] = useState([]);
  const [showCategorie, setShowCategorie] = useState(false)

  useEffect(() => {
    fetch('https://petgram-camilo.camilovict.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response);
      })
  }, [])

  useEffect(() => {
    const onScroll = (e) => {
      const position = window.scrollY > 200

      showCategorie !== position && setShowCategorie(position);

    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  },[showCategorie])



  const renderList = (fixed) => (<List className={fixed ? 'fixed' : ''}>
    {
      categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
    }
  </List>
  )


  return (
    <Fragment>
      {renderList()}
      {showCategorie && renderList(true)}
    </Fragment>
  )
}


