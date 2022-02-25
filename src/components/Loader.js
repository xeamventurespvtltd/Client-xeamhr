import React from "react";

const Loader = ({title = "Loading...", loading = false}) => {
    const className = `${(loading)? 'modal fade show' : 'modal fade'}`;
    const style = { display: `${(loading)? 'block' : 'none'}`, backgroundColor: 'rgba(0, 0, 0, 0.6)'};
    const role = `${(loading)? 'dialog' : 'none'}`;
    return (
        <div className={className} tabIndex="-1" aria-labelledby="exampleModalCenterTitle" style={style} aria-modal="true" role={role}>
            <div className="modal-dialog modal-dialog-centered justify-content-center">
                <div className="rounded p-3 d-flex justify-content-center align-items-center border border-warning" style={{backgroundColor: 'white', width: '35%'}}>
                    <div className="spinner-border text-warning d-flex" role="status"/>
                    <div style={{marginLeft: '5%'}}>{title}</div>
                </div>
            </div>
        </div>
    )
}

export default Loader;