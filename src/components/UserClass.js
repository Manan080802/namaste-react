import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userinfo: {},
    };
    console.log(this.props.name + "class constructor");
  }
  async componentDidMount() {
    const jsonObject = await fetch("https://api.github.com/users/Manan080802");
    const data = await jsonObject.json();
    this.setState({
      userinfo: data,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div className="user-card">
        <img
          src={this.state.userinfo.avatar_url}
          alt={this.state.userinfo.name}
        />
        <h2>Name : {this.state?.userinfo?.name}</h2>
        <h3>Location :{this.state?.userinfo?.location}</h3>
        <h3>Contact : {this.state?.userinfo?.email || "-"}</h3>
        <h3>count {this.state.count}</h3>
        <button
          onClick={() => {
            // this.state.count = this.state.count + 1;  // never work
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase the count
        </button>
      </div>
    );
  }
}

export default UserClass;
