import React from "react";
import cxs from "cxs";
const overlay = cxs(`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: red;
`);

export default props => <div className={overlay}>{props.id}</div>;
