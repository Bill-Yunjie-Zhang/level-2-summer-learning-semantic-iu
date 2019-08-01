import React from 'react'
import { Card } from 'semantic-ui-react'

const PostCard = function(props){
    const title = props.title
    const body = props.body
    const id = props.key
    return (
        <Card>
            <Card.Content header={id} />
            <Card.Content description={body} />
            <Card.Content extra>{title}</Card.Content>
        </Card>
    )
}

export default PostCard