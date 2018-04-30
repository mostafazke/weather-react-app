import React, { Component } from 'react';
import '../styles/Clock.css';
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      icon: 'wi-time-1',
      short: true
    }
  }
  componentWillMount() {
    this.getTime();
  }
  componentDidMount() {
    setInterval(() => {
      this.getTime();
    }, 1000);
  }
  getTime = () => {
    const date = new Date(),
      hours = date.getHours(),
      minutes = date.getMinutes();
    if (this.state.short) {
      this.setState({ time: (hours > 12 ? hours - 12 < 10 ? 0 + '' + (hours - 12) : (hours - 12) : hours === 0 ? 12 : hours) + ' : ' + (minutes < 10 ? '0' + minutes : minutes) })
    } else {
      this.setState({ time: (hours < 10 ? '0' + hours : hours) + ' : ' + (minutes < 10 ? '0' + minutes : minutes) })
    }
    this.setState({icon: 'wi-time-' + (hours > 12 ? hours - 12: hours)})
  }
  toggleAmPm = () => {
    this.setState({ short: !this.state.short })
    this.getTime()
  }
  render() {
    return (
      <div className="Clock">
        <i className={["icon", "wi", this.state.icon].join(' ')}></i>
        <button onClick={this.toggleAmPm}>{this.state.time}</button>
        <h2 className="city">{this.props.cityName||'Cairo'}</h2>
      </div>
    )
  }
}
export default Clock;