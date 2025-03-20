// const mysql = require('mysql2');
// const fs = require('fs');
// const path = require("path");
// const db = mysql.createConnection({
//     host:"localhost",
//     port:"3306",
//     user:"root",
//     multipleStatements:true
// });
// db.connect((err)=>{
//     if (err) throw err;
//     console.log("Sevrer Connected to DB..."); 
//     const table = fs.readFileSync(path.join(__dirname,"tableCreation.sql")).toString();
//     db.query(table,(err,data)=>{
//         if (err) throw err;
//         if(data[2].warningStatus){
//            console.log("Table Exists");
//            return
//         }
//         console.log("Table Created");
        
//     })
// });
// module.exports = db;
const mysql = require('mysql2'); // Use mysql2 with promises
const fs = require('fs');
const path = require("path");

// Create a MySQL connection pool (recommended for production apps)
const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    multipleStatements: true,
    waitForConnections: true,
    connectionLimit: 10, // Adjust based on your needs
    queueLimit: 0
});

const initializeDB = async () => {
    try {
        console.log("Connecting to MySQL...");
        
        // Read the table creation SQL script
        const tableScript = fs.readFileSync(path.join(__dirname, "tableCreation.sql"), "utf8");

        // Execute the table creation query
        const [data] = await db.query(tableScript);
        
        // Check if the table already exists
        if (data[2].warningStatus) {
            console.log("✅ Table already exists.");
        } else {
            console.log("✅ Table created successfully.");
        }
    } catch (err) {
        console.error("❌ Error initializing database:", err);
        throw err;
    }
};

// Initialize the database when the app starts
initializeDB();

module.exports = db;