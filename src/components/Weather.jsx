import React,{ Component } from 'react';
import '../styles/Weather.css';
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c: '℃',
            f: '℉',
            isF: true,
            day: '',
            night: '',
            temp: '100'
        }
    }
    componentDidMount() {
        this.getIcon();
    }
    componentWillMount() {
        this.getLocalStorage();
        this.getIcon();
    }
    getIcon() {
        let day = '',
            night = '';
        switch (this.props.iconId.substr(0,2)) {
            case '01':
                day = 'wi-day-sunny';
                night = 'wi-night-clear';
                break;
            case '02':
                day = 'wi-day-cloudy';
                night = 'wi-night-cloudy';
                break;
            case '03':
                day = 'wi-day-cloudy-high';
                night = 'wi-night-cloudy-high';
                break;
            case '04':
                day = 'wi-day-lightning';
                night = 'wi-night-lightning';
                break;
            case '09':
                day = 'wi-day-hail';
                night = 'wi-night-hail';
                break;
            case '10':
                day = 'wi-day-rain';
                night = 'wi-night-rain';
                break;
            case '11':
                day = 'wi-day-thunderstorm';
                night = 'wi-night-thunderstorm';
                break;
            case '13':
                day = 'wi-day-snow';
                night = 'wi-night-snow';
                break;
            case '50':
                day = 'wi-day-windy';
                night = 'wi-night-cloudy-windy';
                break;
            default:
                day = 'wi-day-sunny';
                night = 'wi-night-clear';
            }
            this.setState({day, night})
    }
    getLocalStorage() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.temp) {
                this.setState({temp: localStorage.temp})            
            }
        }
    }
    changeDeg = () => {
        this.setState({isF: !this.state.isF});
        // this.state.isF ? this.setState({temp: this.props.temp}) : this.setState({temp: });
    }
    render() {
        return (
            <div className="Weather">
                <h1><i className={["icon","wi",""+ this.props.iconId.charAt(this.props.iconId.length - 1) === 'd'? this.state.day: this.state.night +""].join(' ')}></i><button onClick={this.changeDeg}><span className="temp">{(this.state.isF ? this.props.temp : Math.round((this.props.temp - 32) * (5/9))) || this.state.temp}</span><span className="unit">{this.state.isF?this.state.f:this.state.c}</span></button></h1>
                <h2 className="cond">{this.props.description || 'clear sky'}</h2>
            </div>
        )
    }
}
export default Weather;