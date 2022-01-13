import React, { Fragment, useState } from 'react';


const EditToDo = () => {

    return (
        <Fragment>
            <div className="block-example border-bottom ">
                <div className="d-flex">
                    <div style={{ marginLeft: '5%', marginTop: '3%' }}>
                        <h5 style={{ fontSize: 22 }}>home</h5>
                    </div>
                    <div style={{ marginLeft: '5%', marginTop: '3%' }}>
                        <h5 style={{ fontSize: 22 }}> about</h5>
                    </div>
                    <div style={{ marginLeft: '5%', marginTop: '3%' }} >
                        <h5 style={{ fontSize: 22 }}>apply</h5>
                    </div>
                    <div style={{ width: '100%', marginTop: '2%' }}>
                        <h5 style={{ textAlign: 'center', marginLeft: 60, fontSize: 42 }}>recruitr</h5>
                    </div>
                    <div style={{ width: '100%', marginTop: '2%', paddingRight: 40 }}>
                        <div style={{ float: 'right', display: 'flex', background: 'black', borderRadius: 30 }}>
                            <h5 style={{ paddingTop: 5, paddingRight: 20, paddingLeft: 20, color: 'white', borderRadius: '10%' }}>Sign In</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}



export default EditToDo;