import React from 'react'
import Zmage from 'react-zmage'

const Super = function(props){
    return (
        <Zmage
            src="http://picsum.photos/id/201/50"
            set={[{
                src: "http://picsum.photos/id/201/1000",
            }]}
        />
    )
}

export default Super