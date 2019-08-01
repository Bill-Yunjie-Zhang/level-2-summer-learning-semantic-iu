import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import Super from './Super'

class IndividualCard1 extends React.Component {
    render() {
        return (
            <Card>
                <Card.Content>
                    <Super count={count}/>
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
}
export default IndividualCard1 