import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor (props) {
    super(props)
    this.state={
      todos: [],
      allchecked: false
    }
  }
  AddItem (){
    let item = this.state.text;
    let todos = this.state.todos.concat([item])
    this.setState({todos})
  }
  DeleteItem (i) {
    let todos = this.state.todos;
    todos.splice(i,1)
    this.setState({todos})
  }
  ChooseAll () {
    this.setState({allchecked: true})
  }
  ChooseNone () {
    this.setState({allchecked: false})
  }
  render () {
    return (
      <div>
        <p>To Do List</p>
        <input value = {this.state.text}/>
        <button onClick = {this.AddItem.bind(this)}>增加</button>
        <button onClick = {this.ChooseAll.bind(this)}>全选</button>
        <button onClick = {this.ChooseNone.bind(this)}>取消全选</button>
        <ul>
          {
            this.state.todos.map((item, index) => {
            return <li>
              <input type = "checkbox" checked = {this.state.allchecked}/>
              <input value = {item}/>
              <button onClick = {this.DeleteItem.bind(this)}>删除</button>
            </li>
          })
          }
        </ul>
      </div>)
  }
}
