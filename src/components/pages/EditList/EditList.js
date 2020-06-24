import React from 'react';

import './EditList.scss';

class EditList extends React.Component {
  render() {
    const editId = this.props.match.params.listId;
    return (
      <div className="EditList">
        <h1>Edit List</h1>
    <h2>The List Id is {editId}</h2>
      </div>
    );
  }
}

export default EditList;
