const DasarListrik = require("./Materi/DasarListrik")
const LinkedList = require('./Materi/LinkedList')

const ds = new DasarListrik();

ds.findR("6V", "2A", (result) => {
    console.log(result)
})

ds.findI("6v", "100Ohm", (result) => {
    console.log(result)
})

ds.findV("2mA", "250Ohm", (result) => {
    console.log(result)
})