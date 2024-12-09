var z = new Promise((resolve, reject) => {
    if (resolve) {
        console.log("resolved")
    }
    if (reject) {
        console.log("rejected")
    }
});
//2
var b = new Promise((resolve, reject) => {
    if (resolve) {
        console.log("resolved")
    }
    else {
        console.log("rejected")
    }
});
//3
var c = new Promise((resolve, reject) => {
    if (1) {
        resolve("hello resolved")
    } else {
        reject("haii rejected")
    }
});
c.then((res) => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
console.log(z)
//4
var k = new Promise((resolve, reject) => {
    if (1) {
        resolve("hello resolve")
    } else {
        reject("haii reject")
    }
});

k.then(x => {
    console.log(x)
}).catch(y => console.log(y))
//5
var ticket = new Promise((resolve, reject) => {
    if (0) {
        resolve("fine")
    } else {
        reject("not fine")
    }
})
ticket.then(x => console.log(x)).catch(y => console.log(y))
//6

const data = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully! ")
        }, 2000)
    })
}
data().then(Res => console.log(Res))

