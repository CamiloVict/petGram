import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'


const query = `query getPhotos($categoryId :ID) {
  photos (categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

export const withPhotos = graphql(gql`${query}`)