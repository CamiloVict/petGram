import React, { useState, useRef, Fragment, useEffect } from 'react'
import { ImgWrapper, Button, Image, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'


export const PhotoCard = ({ id, likes = 0, src }) => {
    const [show, setShow] = useState(false);
    const ref = useRef(null);

    useEffect( () => {
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

                    <Button>
                        <MdFavoriteBorder size='32px' />{likes} Likes!
                </Button>
                </Fragment>
            }
        </Article>
    )
}


