import React from 'react'
import Zmage from 'react-zmage'

const Super = function(props){
    return (
        <Zmage
            src="https://picsum.photos/2000/1800"
            alt="展示序列图片"
            set={[{
                src: "https://picsum.photos/2000/1900",
                alt: "First image description"
            },{
                src: "https://picsum.photos/2000/2000",
                alt: "Second image description"
            }]}
        />
    )
}

export default Super