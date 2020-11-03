import React, {  Fragment  } from 'react'
import {useNearScreen} from '../hooks/useNearScreen'
import {useLocalStorage} from '../hooks/useLocalStorage'

import { ImgWrapper, Button, Image, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'


export const PhotoCard = ({ id, likes, src }) => {
    const key = `like-${id}`;
    const [show, ref] = useNearScreen()
    const [liked, setLiked] = useLocalStorage(key, false)

    const Icon = liked ? MdFavorite : MdFavoriteBorder;
    

    return (
        <Article ref={ref}>
            {show &&
                <Fragment>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Image src={src} />
                        </ImgWrapper>
                    </a>

                    <Button onClick={() => { setLiked(!liked) }}>
                        <Icon size='32px' />{likes} Likes!
                    </Button>
                </Fragment>
            }
        </Article>
    )
}


