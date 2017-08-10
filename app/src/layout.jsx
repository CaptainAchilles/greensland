import React from "react";
import cxs from "cxs";

export default (props) => {
    cxs("font-family: 'Cabin', sans-serif; margin: 0", { selector: "body" });
    return (
        <div>
            {props.children}
        </div>
    );
};
