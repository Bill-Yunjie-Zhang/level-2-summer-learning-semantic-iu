import React from 'react'
import Zmage from 'react-zmage'
import images from '../data/photos'

class Super extends React.Component {
    constructor(props){
        super(props)
        this.state = images
    }
    render() {
        const count = this.props.count
        const id = this.props.id
        console.log(this.state[id])
        const thumbnails = thumbnail
        const originals = original
        return (
            <Zmage style={{float: "right"}}
                src={thumbnails}
                set={[{
                    src:{originals},
                }]}
            />
        )
    }
}

// const Super = function(props){
//     // const count = props.count
//     // console.log(count)
//     // var thumbnail = photos[count].thumbnail
//     // var original = photos[count].original
//     // return (
//     //     <Zmage
//     //         src= {thumbnail}
//     //         set={[{
//     //             src: {original},
//     //         }]}
//     //     />
//     // )
//     // for(var i = 0; i < count; i++){
//     //     var thumbnail = photos[i].thumbnail
//     //     var original = photos[i].original
//     //     return (
//     //         <Zmage
//     //             src= {thumbnail}
//     //             set={[{
//     //                 src: {original},
//     //             }]}
//     //         />
//     //     )
//     // }
    // return (
        // <Zmage style={{float: "right"}}
        //     src="http://picsum.photos/id/201/50"
        //     set={[{
        //         src: "http://picsum.photos/id/201/1000",
        //     }]}
        // />
    // )
// }

export default Super