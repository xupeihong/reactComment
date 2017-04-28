import React from 'react'
import './style.css'
export default class CommentItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( < div className = "comment-item" >
            < h4 > 评论者： { this.props.author } < /h4> < h4 > 内容： { this.props.comment }</h4>
            < /div>
        )
    }
}
