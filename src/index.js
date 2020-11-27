import "core-js/stable"
import "regenerator-runtime/runtime"

import React from 'react'
import ReactDOM from 'react-dom'
import icon from './icon.png'
import '@/index.less'
import style from './index.module.less'

// console.log(VERSION_H5)

console.log([1, 2, 3].find(v => v === 2))

function App () {
  return (
    <div>
      <div className='test'>小王子</div>

      <div className={style.name}>Neo</div>

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