const fs = require("fs");

async function asyncFunc() {
    var aa = await fs.readFile("./aa.txt", "utf8", (err, data) => {
        // console.log(data, 555);
        return data
    })

    console.log(aa);


    var bb = await fs.readFile("./bb.txt", "utf8", (err, data) => {
        //console.log(data,7777); 
    })


    return aa + bb

}

asyncFunc()

