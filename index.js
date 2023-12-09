const DasarListrik = require("./SemesterSatu/DasarListrik")
const LinkedList = require('./SemesterDua/ASD/LinkedList')

const ds = new DasarListrik();

ds.findR("6V", "2A", (result) => {
    console.log(result)
})
