import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      avatar_url: <img src="" alt="no image" />,
      login: "",
      Bio: "",
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Sridevijagadesh");
    const json = await data.json();
    console.log(json);
    this.setState({
      name: json.name,
      location: json.location,
      avatar_url: json.avatar_url,
      login: json.login,
      Bio: json.bio,
    });
  }

  render() {
    const { name, location, avatar_url, login, Bio } = this.state;
    return (
      <>
        <h2>i am from UserClass</h2>
        <img
          src={avatar_url}
          alt="loading"
          width={200}
          style={{ borderRadius: 150 }}
        />
        <h2>user Name: {name}</h2>
        <h2>location: {location}</h2>
        <h3>{login}</h3>
        <p>{Bio}</p>
      </>
    );
  }
}

export default UserClass;
