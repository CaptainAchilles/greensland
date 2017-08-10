import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import cxs from "cxs";

const header = cxs(`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: seagreen;
    color: whitesmoke;
    padding: 0 10px;
`);

const buttons = cxs(`
    display: flex;
    color: whitesmoke;
`);

const link = cxs(`
    text-decoration: none;
    color: onyx;
`);

export default () => (
    <div className={header}>
        <h1>Greensland</h1>
        <div className={buttons}>
            <Link to="/" className={link}><Button>Main</Button></Link>
            <Link to="/map" className={link}><Button>Map</Button></Link>
            <Link to="/vr" className={link}><Button>VR</Button></Link>
        </div>
    </div>
);
