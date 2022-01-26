import React, { Fragment } from 'react'

export default function XucXac(props) {
    let {xucXacItem} = props;
    return (
        <Fragment>
            <div>
                <img className="mr-3" src={xucXacItem.hinhAnh} alt="" style={{ width: "50px" }} /> 
            </div>  
        </Fragment>
    )
}
