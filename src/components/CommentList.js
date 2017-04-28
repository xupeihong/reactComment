import React from 'react'
import CommentItem from './CommentItem'

export default function CommentList(props) {
    let lists = props.comments.map((ele, index) => {
            return ( < CommentItem key = {
                    index
                }
                author = {
                    ele.author
                }
                comment = {
                    ele.comment
                }
                />)
            })

        return ( < div className = "panel panel-default" > < div className = "panel-heading" > < h3 className = "panel-title" > {
            props.title
        } < /h3> < / div > < div className = "panel-body" > {
            lists
        } < /div> < / div > )

    }
