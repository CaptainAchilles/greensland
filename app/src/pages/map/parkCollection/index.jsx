import React from "react";
import Async from "react-promise";
import cxs from "cxs";

import { ParkService } from "../../../services";

const typeList = cxs(`
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex: 1;
    justify-items: space-around;
    flex-wrap: wrap;
`);

const typeItem = cxs(`
    flex: 1 0 25%;
`);

const parkTypeToListItem = (parkType, clickHander, defaultSelected) => <li className={typeItem} key={parkType} onClick={e => { e.preventDefault(); clickHander(parkType)}}>
    <input type="checkbox" id={`checkbox_${parkType}`} checked={defaultSelected} />
    <label htmlFor={`checkbox_${parkType}`}>{parkType}</label>
</li>;

export default props =>  <div>
    <h2>Limit Parks To: </h2>
    <ul className={typeList}>{props.parkTypes.sort().map(parkItem => parkTypeToListItem(parkItem, props.onChange, props.defaultSelected.indexOf(parkItem) >= 0))}</ul>
</div>;
