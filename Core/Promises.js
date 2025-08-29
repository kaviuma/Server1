function Promisess(id) {
    let results = [{ id: 1, grade: 6, status: "pass" },{ id: 2, grade: 2, status: "fail" },{ id: 3, grade: 7, status: "pass" },{ id: 4, grade: 9, status: "pass" }
    ]

    let d = results[id];
    return new Promise((resolve, reject) => {
        if (d) {
            resolve(d)
        }
        else {
            reject("Invalid Id")
        }
    })
}


Promisess(1)
    .then((d) => {
        console.log(d);
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        console.log("Ended!");
    })