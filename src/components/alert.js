import React from 'react'

export default function alert(props) {
    const tocapital=(word)=>{
        const lowerword=word.toLowerCase();
        return lowerword.charAt(0).toUpperCase()+lowerword.slice(1);
    }
    return (
        props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show m-0`} role="alert">
            <strong>{tocapital(props.alert.type) }</strong> {props.alert.msg}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
