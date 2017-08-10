import React from "react";
import cxs from "cxs";

export default ({ children, prefix, suffix, userStyles }) => {
    const styles = {
        container: cxs(`
            display: flex;
            align-items: center;
            cursor: pointer;
            background: white;
            border: solid 1px black;
            box-shadow: 1px 1px 0px black;
            border-radius: 3px;
            padding: 8px;
            margin: 0 5px;
            transition: transform 250ms, box-shadow 250ms;    
        `).hover(`
            transform: translate(-2px, -2px);
            box-shadow: 3px 3px 0px whitesmoke;
        `),
        prefix: cxs("margin-right: 8px"),
        suffix: cxs("margin-left: 8px"),
        content: cxs(`
            display: flex;
            justifyContent: center;
            flex: 1 1 auto;
            userSelect: none;
            fontSize: 14px;
            fontWeight: 600;
            lineHeight: 12px;
            text-decoration: none;
        `)
    };

    return (
        <div className={styles.container}>
            {prefix && <span className={styles.prefix}>{prefix}</span>}
            <span className={styles.content}>{children}</span>
            {suffix && <span className={styles.suffix}>{suffix}</span>}
        </div>
    );
};
