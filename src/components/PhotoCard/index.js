import React, { useState, useRef, Fragment, useEffect } from 'react'
import { ImgWrapper, Button, Image, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'


export const PhotoCard = ({ id, likes, src }) => {
    const [show, setShow] = useState(false);
    const key = `like-${id}`;

    const [liked, setLiked] = useState(() =>{
        try{
            const like = window.localStorage.getItem(key);
            return like;
        }catch{
            return false
        }
    });
    const ref = useRef(null);

    const Icon = liked ? MdFavorite : MdFavoriteBorder;
    const setLocalStorage = (value) => {
        try{
            window.localStorage.setItem(key, value);
            setLiked(value);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined'
                ? window.IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            const observer = new window.IntersectionObserver(function (entries) {
                const { isIntersecting } = entries[0]
                if (isIntersecting) {
                    setShow(true)
                    observer.disconnect()
                }
            })
            observer.observe(ref.current)
        })
    }, [ref])



    return (
        <Article ref={ref}>
            {show &&
                <Fragment>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Image src={src} />
                        </ImgWrapper>
                    </a>

                    <Button onClick={() => { setLocalStorage(!liked) }}>
                        <Icon size='32px' />{likes} Likes!
                    </Button>
                </Fragment>
            }
        </Article>
    )
}


