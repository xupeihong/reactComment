/*
Author:

*/
import React from 'react'
import $ from 'jquery'
export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "请输入你的吐槽",
      text: "",
      author: "",
      comment: ""
    }
    this.getFoucs = this.getFoucs.bind(this)
    this.submitHander = this.submitHander.bind(this)
    this.setcomment = this.setcomment.bind(this)
    this.setauthor = this.setauthor.bind(this)
  }
  getFoucs() {
    this.setState({title: "你敢答应吗？"})
  }
  //点击提交时触发提交数据
  submitHander(e) {
    e.preventDefault()
    //将数值存到json文件中，父组件App中的submitComment
    this.props.submitComment({author: this.state.author, comment: this.state.comment})
    //提交完后清空
    this.setState({author: "", comment: ""})
  }
  setcomment(e) {
    this.setState({comment: e.target.value})
  }
  setauthor(e) {
    this.setState({author: e.target.value})
  }
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.title}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.submitHander}>
              <div className="form-group">
                <label htmlFor="author">你是谁？</label>
                <input type="text" className="form-control" id="author" placeholder="作者" onFocus={this.getFoucs} onChange={this.setauthor} value={this.state.author}/></div>
              <div className="form-group">
                <label htmlFor="content">吐槽内容</label>
                <input type="text" className="form-control" id="content" placeholder="内容" onChange={this.setcomment} value={this.state.comment}/></div>
              <button type="submit" className="btn btn-default">提交吐槽</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
