import React from 'react'
import Header from './components/Header'
import CommentList from './components/CommentList'
import CommentItem from './components/CommentItem'
import CommentForm from './components/CommentForm'
import $ from 'jquery'

export default class App extends React.Component {
        //第一个生命周期，实例化的时候调用构造函数
        constructor() {
                super();
                this.state = {
                    comments: []
                }
                this.submitHander = this.submitHander.bind(this)
            }
            //加载json文件
        componentDidMount() {
                var _this = this;
                $.ajax({
                    url: "http://127.0.0.1:3100/api/comments",
                    type: "get",
                    success: function(data) {
                        _this.setState({ comments: data })
                    }
                })
            }
            //自定义组件需要绑定
        submitHander(data) {
            console.log(data)
            $.ajax({
                url: "http://127.0.0.1:3100/api/comments",
                type: "POST",
                data: data,
                success: (data) => {
                    this.setState({ comments: data })
                },
                error: function(err) {
                    console.log(err)
                }
            })
        }
        render() {
            console.log("正在渲染")
            return ( < div className = 'app' >
                < Header / >
                < div className = "container" >
                < div className = "row" >
                < div className = "col-md-6" >
                < CommentForm submitComment = {
                    this.submitHander
                }
                / > < /div > < div className = "col-md-6" >
                < CommentList comments = {
                    this.state.comments
                }
                title = "不一样的标题" / > < /div > < /div > < /div > < /div >)
            }
        }
