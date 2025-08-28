fs = require('fs')
let filePath1 = "./file1.txt"
let filePath2 = "./file2.txt"
let filePath3 = "./file3.txt"
let resultPath = "./result.txt"


function answer(filePath){
return new Promise((res,rej)=>{

    fs.readFile(filePath,"utf-8",(err,data)=>{

        if (err)rej("Error")
        else{res(data)}

    })

})
}

let data1 = answer(filePath1).then(data=>console.log(data))
let data2 = answer(filePath2).then(data=>console.log(data))
let data3 = answer(filePath3).then(data=>console.log(data))

fs.writeFile(resultPath,data3+data2+data1,(err)=>{console.log(err)})

// solved