import React, { Component } from 'react';
import '../styles/Date.css';
class Dating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Day: '',
            DayName: '',
            MonthName: ''
        }
    }
    componentWillMount() {
        this.getTime();
    }
    getTime = () => {
        const date = new Date(),
            monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.setState({ Day: date.getDate(), DayName: days[date.getDay()], MonthName: monthes[date.getMonth()] })
    }
    render() {
        return (
            <div className="Dating">
                <h2>{this.state.DayName}</h2>
                <h3>{this.state.MonthName}, {this.state.Day}</h3>
            </div>
        )
    }
}

export default Dating;