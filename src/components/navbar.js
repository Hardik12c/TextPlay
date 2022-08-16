import React from 'react'

export default function Navbar(props) {

    return (
        <div>
            <nav style={{backgroundColor: props.mode? 'rgb(41 41 41)' :'#e5e5e5', color: props.mode? 'white' : 'black',}}>
                <div className='logo'>{props.title}</div>
                <ul>
                    <li><a style={{color: props.mode? 'white':'black'}} href="/">Home</a></li>
                    <li><a style={{color: props.mode? 'white':'black'}}  href="/">About</a></li>
                    <li><a style={{color: props.mode? 'white':'black'}}  href="/">Contact us</a></li>
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
