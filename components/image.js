import React, { useContext } from 'react'
import LoadingContext from './context';

//[mobile, tablet, desktop]

export const getSize = ({isMobile, isTablet, sizes}) =>  {
    if(isMobile && !isTablet)
        return sizes[0]
    if (isTablet && sizes<1)
        return sizes[1]
    else 
        return sizes[sizes.length-1];
}

const image = ({
    imageUrl,
    sizes=[],
    classitem,
    ...props
}) => {

    const {isMobile, isTablet} = useContext(LoadingContext);
    // this.getSize(isMobile, isTablet,size)
    return(
    <img className={classitem} src={`${imageUrl}?odnWidth=${sizes}`} ></img>
    )
}

export default image;


