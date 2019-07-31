import React from 'react'
import ImageCard from './ImageCard'
import axios from 'axios'
import lodash from 'lodash'
import { Card } from 'semantic-ui-react'

class ImageGallery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            images: []
        }
    }
    componentWillMount(){
        const that = this
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function(res){
            var data = res.data
            that.setState({
                images: data
            })
        })
    }
    render() {
        const count = this.props.count || 100
        const perRow = this.props.perRow || 6
        const images = lodash.take(this.state.images, count) || []
        console.log(this.state.images) 
        return (
            <Card.Group itemsPerRow={perRow}>
                {/* <ImageCard title="test title1" text="test text1" image="https://picsum.photos/200"/> */}
                {images.map(function(item){
                    return (
                        <ImageCard 
                            key={item.id}
                            title={item.title} 
                            image={item.url}
                        />
                    )
                })}
            </Card.Group>
        )
    }
}

export default ImageGallery