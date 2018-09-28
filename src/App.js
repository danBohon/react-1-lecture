import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      pictureURL: 'http://http.cat/506',
      friends: [{ name: 'T$', pictureURL: 'http://http.cat/404'}] 
    };
    // this.updateName = this.updateName.bind(this);      <------- no longer needed
    this.updateURL = this.updateURL.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  // updateName(event) {
  //   // console.log("type");
  //   this.setState({
  //     name: event.target.value
  //   });                                <-----moved below --- no binding needed now --
  // }
  updateURL(event) {
    this.setState({
      pictureURL: event.target.value
    });
  }

  addFriend() {
    const newFriend = { name: this.state.name, pictureURL: this.state.pictureURL };
    //DO NOT MUTATE STATE DIRECTLY!!!!
    // this.state.friends.push
    const friendsCopy = this.state.friends.slice();
    friendsCopy.push(newFriend);
    this.setState({friends: friendsCopy});
    this.clearNames();
  }

  clearNames(event) {
    // this.state.name = 'input name';
    this.setState({name: " ", picture: " "})
  }

  render() {
    // const name = this.state.name;
    // const pictureURL = this.state.pictureURL;
    const { name, pictureURL, friends} = this.state;
    console.log(this.state);
    

    return (
      <div> 
        <div>
          Name: <input value={name} onChange={e => this.setState({name: e.target.value})}/>  
          {name}
        </div>
        <div>
          Picture URL: <input value={pictureURL} onChange={this.updateURL}/>
          {pictureURL}
        </div>
        <button onClick={this.addFriend}>Add Friend</button>
        <div>Friends: {friends.map(friend => {
          return <div>
            Name: {friend.name}{' '}
            Picture: <img src={friend.pictureURL} />
          </div>
        })}</div>
      </div>
    );
  }
}

export default App;