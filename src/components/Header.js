import React from 'react'
import logo from '../logo.svg'
//无状态组件
export default function Header(props) {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="Brand" src={logo} width="30"/>
            </a>
            <h4 className="navbar-text">欢迎来学习react</h4>
          </div>
        </div>
      </nav>
    )
}
