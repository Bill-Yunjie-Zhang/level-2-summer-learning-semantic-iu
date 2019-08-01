import React from 'react'
import PostCard from './PostCard'
import axios from 'axios'
import { Card, Container } from 'semantic-ui-react'
import lodash from 'lodash'


class PostList extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            posts: []
        }
    }

    componentWillMount() {
        var thisComponent = this
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(res){
            var data = res.data
            thisComponent.setState({
                posts: data
            })
        })
    }

    render() {
        const perRow = 5
        const count = 15
        const posts = lodash.take(this.state.posts, count) || []
        return (
            <Container>
                <Card.Group itemsPerRow={perRow}>
                    {posts.map(function(currentPost){
                        var title = currentPost.title
                        var body = currentPost.body
                        var id = currentPost.id
                        return (
                            <PostCard key={id} title={title} text={body}/>
                        )
                    })}
                </Card.Group>
            </Container>
        )
    }
}

export default PostList