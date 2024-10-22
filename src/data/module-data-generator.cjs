const fs = require('fs');

const count = Number(process.argv[2]);

let regPrefix = ["KR", "WA", "PO", "GD", "LU"];
let cars = [];

fs.readFile('./src/cars.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    cars = data.split("\n").map(s => s.trim()).filter(c => c.length != 0);
    
    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        let car = cars[~~(Math.random() * cars.length)];
        let id = i + 1;
        let regNumber = `${regPrefix[~~(Math.random() * regPrefix.length)]} ${Math.floor(10000 + Math.random() * 90000)}`;
        let year = Math.floor(Math.random() * (2024 - 1980) + 1990);
        
        content += `{
            id: ${id},
            brand: "${car}",
            year: "${year}",
            registrationNumber: "${regNumber}"
        },`;
    }
    content += "];";
    
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});
