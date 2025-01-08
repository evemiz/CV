import React from "react";

function Title({ name }) {
    return(
        <>
        <div className="col text-center d-flex flex-column justify-content-center">
            <h1 className="title-size m-0 p-0">{name}</h1>
        </div>
        </>
    );
};

export default Title;