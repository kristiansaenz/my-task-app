import React from 'react';
import PropTypes from 'prop-types';


class TodoItem extends React.Component {

    getStyle = () => {
        return {
            background: '#404040',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>{' '}
                    { title }
                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
                </p>
            </div>
    )};
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle ={
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;


// for using custom methods such as our markComplete method:
// you can either use -> onChange={this.markComplete.bind(this)} to get access to props
// or you can write your method like this -> markComplete = (e) => { }
