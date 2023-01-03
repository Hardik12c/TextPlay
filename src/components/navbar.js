import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <div>
            <nav style={{backgroundColor: props.mode? 'rgb(41 41 41)' :'#e5e5e5', color: props.mode? 'white' : 'black',}}>
                <div className='logo'>{props.title}</div>
                <ul>
                    <li><Link style={{color: props.mode? 'white':'black'}} to="/">Home</Link></li>
                    <li><Link style={{color: props.mode? 'white':'black'}}  to="/about">About</Link></li>
                    <li><Link style={{color: props.mode? 'white':'black'}}  to="/">Contact us</Link></li>
                    <li>
                        <div className="custom-control custom-switch ">
                            <input type="checkbox" onClick={props.changemode} className="custom-control-input " id="customSwitch1" />
                            <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
