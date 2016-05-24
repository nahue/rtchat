import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection';
import UserSection from './users/UserSection';
import MessageSection from './messages/MessageSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      messages: []
    }
  }

  addChannel(name) {
      let {channels} = this.state;
      channels.push({id: channels.length, name});
      this.setState({channels});
      // TODO: Send to server
  }

  setChannel(activeChannel) {
    this.setState({activeChannel});
    // TODO: Get Channels Messages
  }

  addMessage(message) {
    let {messages} = this.state;
    messages.push({id: messages.length, created: new Date(), body: message});
    this.setState({messages})
  }

  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
          <UserSection
            {...this.state}
          />
        </div>
        <MessageSection
          {...this.state}
          addMessage={this.addMessage.bind(this)}
        />
      </div>

    )
  }
}

export default App;
