import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DevTools from 'mobx-react-devtools';
import { observable, computed, extendObservable } from 'mobx';
import { observer } from 'mobx-react';

//В mobx нет строгого разделения на store, action, reduse. Фактически у нас всегда есть объект за свойствами которого мы следим а изменяем его свойства при посмощи свойств этого же объекта.
//Изменяем соществующие свойства, а не создаем копью объекта с новыми значениями.
//Все что касается стора может хранится в одном классе

const nickName = new class UserNickName {

  constructor(){ extendObservable(this, {
    firstName : 'Platon',
    age : 21
  })}

  // @observable firstName = 'Platon';
  // @observable age = 21;

  @computed get nickName() {
    console.log('Generate nickName');
    return `${this.firstName}${this.age}`
  }
}

nickName.increment = function() {
  this.age++
}

nickName.decrement = function() {
  this.age--
}

@observer class Counter extends Component {  

  handleIncrement = () =>{this.props.store.increment()}
  handleDecrement = () => {this.props.store.decrement()} 

  render() {
    return (
    <div className="App">
      <DevTools />
      <h1>{this.props.store.nickName}</h1>
      <h1>{this.props.store.age}</h1>
      <button onClick={this.handleDecrement}>-1</button>
      <button onClick={this.handleIncrement}>+1</button>
    </div>
  ) 
  };
}

ReactDOM.render(  
  <Counter store={nickName} />,
  document.getElementById('root')
);
