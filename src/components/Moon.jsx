import React,{ Component } from "react";
import '../styles/Moon.css';

class Moon extends Component {
        gmod(n,m){
            return ((n%m)+m)%m;
        }
        hijriDate(adjust){
            var today = new Date();
            if(adjust) {
                let adjustmili = 1000*60*60*24*adjust; 
                let todaymili = today.getTime()+adjustmili;
                today = new Date(todaymili);
            }
            let day = today.getDate();
            let month = today.getMonth();
            let year = today.getFullYear();
            let m = month+1;
            let y = year;
            if(m<3) {
                y -= 1;
                m += 12;
            }
        
            let a = Math.floor(y/100.);
            let b = 2-a+Math.floor(a/4.);
            if(y<1583) b = 0;
            if(y===1582) {
                if(m>10)  b = -10;
                if(m===10) {
                    b = 0;
                    if(day>4) b = -10;
                }
            }
        
            let jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;
        
            b = 0;
            if(jd>2299160){
                a = Math.floor((jd-1867216.25)/36524.25);
                b = 1+a-Math.floor(a/4.);
            }
            let bb = jd+b+1524;
            let cc = Math.floor((bb-122.1)/365.25);
            let dd = Math.floor(365.25*cc);
            let ee = Math.floor((bb-dd)/30.6001);
            day =(bb-dd)-Math.floor(30.6001*ee);
            month = ee-1;
            if(ee>13) {
                cc += 1;
                month = ee-13;
            }
            year = cc-4716;
            let iyear = 10631./30.;
            let epochastro = 1948084;
            let shift1 = 8.01/60.;
            let z = jd-epochastro;
            let cyc = Math.floor(z/10631.);
            z = z-10631*cyc;
            let j = Math.floor((z-shift1)/iyear);
            z = z-Math.floor(j*iyear+shift1);
            let im = Math.floor((z+28.5001)/29.5);
            if(im===13) im = 12;
            let id = z-Math.floor(29.5001*im-29);
            let moonArr = [
                'wi-moon-new',
                'wi-moon-waxing-crescent-1',
                'wi-moon-waxing-crescent-2',
                'wi-moon-waxing-crescent-3',
                'wi-moon-waxing-crescent-4',
                'wi-moon-waxing-crescent-5',
                'wi-moon-waxing-crescent-6',
                'wi-moon-first-quarter',
                'wi-moon-waxing-gibbous-1',
                'wi-moon-waxing-gibbous-2',
                'wi-moon-waxing-gibbous-3',
                'wi-moon-waxing-gibbous-4',
                'wi-moon-waxing-gibbous-5',
                'wi-moon-waxing-gibbous-6',
                'wi-moon-full',
                'wi-moon-waning-gibbous-1',
                'wi-moon-waning-gibbous-2',
                'wi-moon-waning-gibbous-3',
                'wi-moon-waning-gibbous-4',
                'wi-moon-waning-gibbous-5',
                'wi-moon-waning-gibbous-6',
                'wi-moon-third-quarter',
                'wi-moon-waning-crescent-1',
                'wi-moon-waning-crescent-2',
                'wi-moon-waning-crescent-3',
                'wi-moon-waning-crescent-4',
                'wi-moon-waning-crescent-5',
                'wi-moon-waning-crescent-6',
                'wi-moon-new',
                'wi-moon-new',
                'wi-moon-new'
            ];
            return moonArr[id];
        }
    render() {
        return (
            <div className="Moon">
                <i className={['wi', this.hijriDate(-1)].join(' ')}></i>
            </div>
        )
    }
}

export default Moon;