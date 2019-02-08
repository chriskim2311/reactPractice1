import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from "./CommentDetail"
import ApprovalCard from './ApprovalCard'

// import App from './components/app';



const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard> 
        <CommentDetail 
        author = "Sam"
        timeAgo="today at 2:00AM"
        content= "Nice Blog Post!"
        avatar= {faker.image.avatar()} />
        </ApprovalCard> 
        </div>
    )

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
