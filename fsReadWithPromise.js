fs = require('fs')
filePath = "./file1.txt"


function answer(filePath){
return new Promise((res,rej)=>{

    fs.readFile(filePath,"utf-8",(err,data)=>{

        if (err)rej("Error")
        else{res(data)}

    })

})
}

answer(filePath).then(data=>console.log(data)).catch(err=>console.log(err))