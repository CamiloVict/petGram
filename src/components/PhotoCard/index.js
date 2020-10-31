import React, {useEffect, useRef, useState, Fragment} from 'react'
import {ImgWrapper, Button, Image, Article} from './styles'
import {MdFavoriteBorder} from 'react-icons/md'


export const PhotoCard = ({id,likes=0,src}) => {
    
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            const  {isIntersecting} = entries[0];
            if(isIntersecting){
                setShow(true);
                observer.disconnect();
            }
        });
        observer.observe(ref.current)
    }, [ref])

    return (
        <Article ref = {ref}>
        {show && 
        <Fragment>
            <a href = {`/detail/${id}`}>
                <ImgWrapper>
                    <Image src = {src}/>
                </ImgWrapper>
            </a>

            <Button>
                <MdFavoriteBorder size = '32px'/>{likes} Likes!
            </Button>
        </Fragment>
        }
        </Article>
    )
}


