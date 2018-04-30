import React, { Component } from 'react';
import Clock from './Clock';
import Moon from './Moon';
import Weather from './Weather';
import Date from './Date';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      cityName: '',
      temp: '',
      description: '',
      iconId: '',
      imageUrl: require(`../assets/03.jpg`)
    }
  }
  componentWillMount() {
    this.getLocation()
  }
  getLocation() {
    fetch('https://ipinfo.io/json')
      .then(result => result.json())
      .then(data => {
        let lat = 'lat=' + data.loc.split(",")[0],
          lon = '&lon=' + data.loc.split(",")[1],
          unit = '&units=imperial',
          appid = '&appid=f19ab83aa06dc74d66a49829fd97cc72';
        this.setState({ q: lat + lon + unit + appid });
        this.getWeather();
      })
  }
  getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?' + this.state.q)
      .then(result => result.json())
      .then(data => {
        this.setState({
          cityName: data.name,
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
          iconId: data.weather[0].icon,
          imageUrl: require(`../assets/${data.weather[0].icon.substr(0,2)}.jpg`)
        });
        console.log(data)
        if (typeof(Storage) !== "undefined") {
          localStorage.temp = this.state.temp;
      }
      });
  }
  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${this.state.imageUrl})`}}>
        <div className="overlay">
          <section className="top">
            <Clock cityName={this.state.cityName} />
            <Moon />
          </section>
          <Weather temp={this.state.temp} description={this.state.description} iconId={this.state.iconId} />
          <Date />
        </div>
      </div>
    );
  }
}

export default App;
