import React from 'react'
import './style.css'
export default class CommentForm extends React.Component{
	constructor(){
		super()
		this.state={
            val:"",//存储输入框的值
            arr:[]//存储多个数据
        }
	}
    handData(e){
        this.setState({
            val:e.target.value
        })
    }

    //点击按钮后触犯的事件
    onbuttonClick(e){
        var val=this.state.val
        console.log(val)
        this.setState({
            arr:[val,this.state.arr]
        })
    }
	render(){
        var arr1=this.state.arr
        // console.log(arr1)
		return(
			<form action="">
				<div className="panel panel-default">
	              <div className="panel-heading">
	                <h3 className="panel-title">我们一起来吐槽吧</h3>
	              </div>
				 <div className="box-body">
	                <div className="input-group pinglun">
	                  <label htmlFor="author" className="">评论者</label>
	                  <input type="text" className="form-control" id="author" name="author" placeholder="评论者姓名" onChange={this.handData.bind(this)}/>
	                </div>
	                <div className="form-group">
	                  <label htmlFor="comment">内容</label>
	                  <textarea type="text" rows="5" className="form-control" id="comment" name="comment" placeholder="快快来吐槽吧" />
	                </div>
	                <div className="box-footer foot">
	                <button type="button" className="btn btn-primary" id="sub" onClick={this.onbuttonClick.bind(this)}>提交</button>
                    <button type="button" className="btn btn-warning " id="update">修改</button>
	              </div>
	              </div>
	            </div>
			</form>
		)
	}
}
