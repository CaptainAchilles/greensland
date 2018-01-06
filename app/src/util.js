import LOOKUP_MAP from "./objectMap";
import React from "react";

const getAssets = () => {
    return LOOKUP_MAP.reduce((carry, x) => {
        const _obj = `${x.name}-obj`;
        const _mtl = `${x.name}-mtl`
        return carry.concat([
            <a-asset-item key={_obj} id={_obj} src={`../assets/models/${x.name}.obj`}></a-asset-item>,
            <a-asset-item key={_mtl} id={_mtl} src={`../assets/models/${x.name}.mtl`}></a-asset-item>
        ]);
    }, [])
}

const itemLookup = item => {
    const _searchName = item.type.toLowerCase();
    // use for-loop for max speed.
    for (let i = 0; i < LOOKUP_MAP.length; i++) {
        const aliases = LOOKUP_MAP[i].aliases;
        for (let a = 0; a < aliases.length; a++) {
            if (_searchName.indexOf(aliases[a]) >= 0) {
                return LOOKUP_MAP[i];
            }
        }
    }
    return undefined;
}

const getElementFromItemType = item => {
    const itemInfo = itemLookup(item);
    if (itemInfo === undefined) {
        return <a-entity position={item.position} key={item.id}>
                <a-box  color="red" position="0 0.5 0" depth="1" height="1" width="1"></a-box>
                <a-text value={item.type} align="center" rotation="0 0 0" position="0 1.25 0" color="black"></a-text>
                <a-text value={item.type} align="center" rotation="0 180 0" position="0 1.25 0" color="black"></a-text>
        </a-entity>;
    } else {
        return <a-obj-model key={item.id} position={item.position} src={`#${itemInfo.name}-obj`} mtl={`#${itemInfo.name}-mtl`} scale={itemInfo.scale || "1 1 1"}></a-obj-model>;
    }
}

const createAFrameModel = item => {
    const element = getElementFromItemType(item);
    return element;
};

module.exports = {
    getAssets,
    createAFrameModel
}
