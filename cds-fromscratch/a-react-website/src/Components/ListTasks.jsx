import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';


class ListTasks extends Component {
  updateList = (taskIndex) => {
    this.props.dispatch(
      {
        type: '',
        taskIndex,
      },
    );
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item, index) => <Task task={item} updatePedro={this.updateList} index={index} />)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.list[0]);
  return state;
};

export default connect(mapStateToProps)(ListTasks);
