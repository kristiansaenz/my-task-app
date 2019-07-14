import React from 'react';


class AddTodo extends React.Component {
    state = {
        title: ''
    }

    // as long as the name of the input equals the 
    // input we are changing, you can change multiple fields
    onChange = (e) => this.setState({ [e.target.name]: 
        e.target.value 
    });

    onSubmit = (e) => {
        // stop submitting to default file
        e.preventDefault();
        
        this.props.addTodo(this.state.title);
        
        //clear fields
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    placeholder="make pizza rolls"
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

export default AddTodo;