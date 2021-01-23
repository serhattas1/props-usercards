import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';
import CardFooter from './CardFooter';

const App=()=>{
    return(
        <div>
            <UserCard name='Sam' comment='Comment-1'>
               <CardFooter date='3 days ago'/>
            </UserCard>
            <UserCard name='Jack' comment='Comment-2'>
               <CardFooter date='5 days ago'/>
            </UserCard>
            <UserCard name='Brain' comment='Comment-3'>
               <CardFooter date='2 days ago'/>
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)