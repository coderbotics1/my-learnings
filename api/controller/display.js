import { db } from "../db.js"

export const displayC = (req, res) => {
    const sqlDisplay = "SELECT * FROM contact_tbl";
    db.query(sqlDisplay, (error, result) => {
        res.json(result);
    })
}