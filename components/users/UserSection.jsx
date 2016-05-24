import React, {Component} from 'react';
import UserList from './UserList';

class UserSection extends Component {
  render() {
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Users</strong>
        </div>
        <div className='panel-body users'>
          <UserList {...this.props} />
        </div>
      </div>
    )
  }
}

UserSection.propTypes = {
  users: React.PropTypes.array.isRequired
}

export default UserSection;
