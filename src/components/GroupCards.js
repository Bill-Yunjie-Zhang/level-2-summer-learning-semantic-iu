import React from 'react'
import axios from 'axios'
import lodash from 'lodash'
import {Card} from 'semantic-ui-react'
import IndividualCard1 from './IndividualCard'

class GroupCards extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }
    componentWillMount(){
        const that = this
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(res){
            var data = res.data
            that.setState({
                users: data
            })
        }) 
    }
    render() {
        const count = this.props.count || 100
        const perRow = this.props.perRow || 6
        const users = lodash.take(this.state.users, count) || []
        return (
            <Card.Group itemsPerRow={perRow}>
                {users.map(function(item){
                    return (
                        <IndividualCard1 
                            key={item.id}
                            name={item.name} 
                            username={item.username}
                            email={item.email}
                            count={count}
                        />
                    )
                })}
            </Card.Group>
        )
    }
}

export default GroupCards