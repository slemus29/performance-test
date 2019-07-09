import React, {useEffect, useRef, useState} from 'react';

const InView = ({
    children
}) => {
    const [visible, callback] = useState(false);
    const wrapper = useRef(null);
    useEffect(()=>{
        console.log('RENDER', wrapper.current);
        // const callback = entries => {
        //     console.log(entries);
        // };
        // const observer = new IntersectionObserver(callback(true), {
        //     rootMargin: '0px',
        //     threshold: 1.0,
        // });
        const observer = new IntersectionObserver( ([entry])=>{
            if(entry.isIntersecting){
                console.log("estoy enintersectiong", visible )
                callback(true)
            }
            
            console.log("observer", entry )
        }, {rootMargin: '100px',
            threshold: 0,})

        observer.observe(wrapper.current)
    });
    
    return(
        <div ref={wrapper}>
            {visible ? children : null}
        </div>
    )
}

export default InView;