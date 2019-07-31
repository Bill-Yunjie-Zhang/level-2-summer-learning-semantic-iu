import React from 'react'
import { Card } from 'semantic-ui-react'

const ImageCard = function(props) {
    const title = props.title
    const text = props.text
    const image = props.image
    return (
        <Card header={title} description={text} image={image}/>
    )
}

export default ImageCard