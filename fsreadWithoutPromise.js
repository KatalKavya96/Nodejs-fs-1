fs = require('fs')

fs.readFile("./file1.txt","utf-8",((err,data)=>{
    let strr= ""
    if (err){console.log(err)}
    else{strr+=data
    }

    fs.readFile("./file2.txt","utf-8",(err,data)=>{

        if(err){console.log(err)}
        else{strr+=data
            console.log(strr)
        }
        fs.writeFile("./file3.txt",strr,(err)=>{

        if (err){console.log(err)}
    })

    })
}))