import React from 'react'
import Super from './Super'

const ForAvatar = function(props){
    const count = props.count
    // var divstyle = {
    //     float : "right"
    // }
    return (
        // <div style={divstyle}><Super count={count}/></div>
        <div style={{float: "right"}}><Super count={count}/></div>
    )
}
export default ForAvatar