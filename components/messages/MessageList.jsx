import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <ul>{
        this.props.messages.map(m => {
          return <Message
            key={m.id}
            message={m}
          />
        })
      }</ul>
    )
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
}

export default MessageList;
