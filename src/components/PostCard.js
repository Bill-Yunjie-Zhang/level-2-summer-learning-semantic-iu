 import React from 'react'
 import { Card } from 'semantic-ui-react'

 class PostCard extends React.Component {
    render() {
        const title = this.props.title
        const text = this.props.text
        return (
            <Card>
                <Card.Content header={title} description={text}/>
            </Card>
        )
    }
 }
 export default PostCard