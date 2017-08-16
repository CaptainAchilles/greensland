import {
    Sequelize
} from "./database";

import request from "request";
import csv from 'fast-csv';
import {
    Park,
    ParkItem
} from "./models";

Sequelize.sync().then(x => {
    const parkAssetCounts = "https://www.data.brisbane.qld.gov.au/data/dataset/8738f735-c60c-4f2f-86b3-0c0a58e5357c/resource/3c4730f8-5b79-4612-bdfe-144ead0de6ea/download/Open-Data---AM---datasetparksassetdatacountofparkitems.csv";
    const parkItems = "https://www.data.brisbane.qld.gov.au/data/dataset/39cb83b5-111e-47fb-ae21-6b141cd16f25/resource/66b3c6ce-4731-4b19-bddd-8736e3111f7e/download/Open-Data---AM---datasetparkfacilties.csv";
    new Promise((resolve, reject) => {
            console.log("Download Data...");
            request(parkItems, (err, res) => {
                if (err) reject(err);
                resolve(res);
            });
        })
        .then(response => new Promise((resolve, reject) => {
            console.log("Processing Download...");
            const readStream = csv.fromString(response.body, {
                ignoreEmpty: true,
                headers: true,
                trim: true
            });
            const rows = [];
            readStream.on("data", function (data) {
                rows.push(data);
            });
            readStream.on("end", function (data) {
                resolve(rows);
            });
            readStream.on("error", function (err) {
                reject(err);
            });
        }))
        .then(rows => {
            // Get all unique park names
            console.log("Saving Parks");
            const parks = rows.reduce((carry, x) => {
                if (carry.find(park => park.id == x.PR_NO) === undefined) {
                    const park = {
                        id: x.PR_NO,
                        parkName: x.PARK_NAME
                    };
                    carry.push(park);
                }
                return carry;
            }, []);
            return Park.bulkCreate(parks, {
                ignoreDuplicates: true
            }).then(() => rows);
        }).then(parkItems => {
            console.log("Saving Park Data");
            return Promise.resolve(parkItems.map(x => ({
                    id: x.ITEM_ID,
                    parkId: x.PR_NO,
                    type: x.ITEM_TYPE,
                    name: x.ITEMS_NAME,
                    description: x.DESCRIPTION,
                    easting: x.EASTING,
                    northing: x.NORTHING,
                    lat: x.LATITUDE,
                    lng: x.LONGITUDE
                })))
                .then(parkItems => ParkItem.bulkCreate(parkItems, {
                    ignoreDuplicates: true
                }));
        })
        .catch(err => {
            console.log(err);
            process.exit(1);
        })
})