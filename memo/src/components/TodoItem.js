import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

  //최적화 ReRandering 을 할 지 말지 정해준다.
  //이게 따로 구현되지 않으면 언제나 true를 반환한다. 이를 구현하는 경우에는 엡데이트에 영향을 끼치는 조건을
  //return 해주면 된다.
  shouldComponentUpdate(nextProps, nextState){
    return this.props.checked !== nextProps.checked;
  }
  render() {
    const { text, checked, id, onToggle, onRemove,color } = this.props;
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
      <div style ={{color}} className={`todo-text ${checked && 'checked'}`} >
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

export default TodoItem;
