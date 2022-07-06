const fs = require('fs');
// creating a file as async
fs.writeFile("employees.json",'{"name": "Employee 1 Name", "salary": 2000}',(err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log("File has been created.");
    }
});

// reading a file as async
fs.readFile("employees.json","utf-8",(err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

// updating the file
fs.appendFile("employees.json",'\n{"name": "Employee 2 Name", "salary": 2320}',(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("File has been updated!");
    }
});

// deleting the file
fs.unlink('employees.json',err  => {
    if (err) console.log(err);
    console.log("File has been deleted!");
})
