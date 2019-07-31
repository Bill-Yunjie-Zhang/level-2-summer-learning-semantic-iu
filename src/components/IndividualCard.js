import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Super from './Super'
import ForAvatar from './ForAvatar'

const  IndividualCard = function(props) {
    const id = props.id
    const name = props.name
    const email = props.email
    const username = props.username
    return (
        <Card>
            <Card.Content>
                <ForAvatar />
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{email}</Card.Meta>
                <Card.Description>
                {username} wants to add you! 
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button basic color='green'>
                    Approve
                </Button>
                <Button basic color='red'>
                    Decline
                </Button>
                </div> 
            </Card.Content>
        </Card>
    )
}
export default IndividualCard