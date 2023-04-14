import { db } from "../db.js";

export const insertC = (req, res) => {
    // const sqlInsert = "INSERT INTO contact_tbl (`name`, `email`, `contact`) VALUES ('B', 'B@gmail.com', '0987654321')";
    // db.query(sqlInsert, (err, result) => {
    //     console.log("error", err);
    //     console.log("result", result);
    //     res.json("hello Express")
    // })

    const {name, email, contact} = req.body;
    const sqlInsert = "INSERT INTO contact_tbl (`name`, `email`, `contact`) VALUES (?, ?, ?)";
    db.query(sqlInsert, [name, email, contact], (error, result) => {
        if(error) {
            console.log(error)
        }
    })
}