import React from 'react'
import {ImgWrapper, Button, Image} from './styles'
import {MdFavoriteBorder} from 'react-icons/md'


export const PhotoCard = ({id,likes=0,src = DEFAULT_IMAGE}) => {
    return (
        <article>
            <a href = {`/detail/${id}`}>
                <ImgWrapper>
                    <Image src = {src}/>
                </ImgWrapper>
            </a>

            <Button>
                <MdFavoriteBorder size = '32px'/>{likes} Likes!
            </Button>
        </article>
    )
}


