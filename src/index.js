import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import icon from './icon.png'

console.log(VERSION_H5)

function App () {
  return (
    <div>
      <div className="test">小王子</div>

      <div>
        <img src={icon} alt=""/>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
)