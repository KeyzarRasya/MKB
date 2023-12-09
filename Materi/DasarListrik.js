class DasarListrik {
    constructor(){

    }

  separate(value) {
    var hasil = value.match(/(\d+)([a-zA-Z]*)/);

    if (hasil) {
      var angka = parseInt(hasil[1], 10);
      var huruf = hasil[2];
      return [angka,huruf] ;
    } else {
      return null;
    }
  }

  getOhm(separate) {
    const [angka, huruf] = separate;
    switch (huruf.toUpperCase()){
        case "OHM":
            return angka * 1
            break;
        case "KOHM":
            return angka * 1000
            break;
    }
  }

  getAmpere(separate){
    const [angka, huruf] = separate;
    switch (huruf.toUpperCase()){
        case "A":
            return angka * 1
            break;
        case "MA":
            return angka * 0.1000
            break;
  }
}

getVoltage(separate){
  const [angka, huruf] = separate;
  switch (huruf.toUpperCase()){
    case "V":
      return angka * 1
      break;
  }
}

  findV(i, r, callback) {
    let [current, iUnit] = this.separate(i);
    let [resistance, rUnit] = this.separate(r);
    let iAmpere = this.getAmpere(current, iUnit)
    let rOhm = this.getOhm(resistance, rUnit);
    const result = {
      current:i,
      resistance:r,
      voltage:`${iAmpere * rOhm}V`
    }
    callback(result)
  }

  findI(v, r, callback){
    let vVoltage = this.getVoltage(this.separate(v))
    let rOhm = this.getOhm(this.separate(r))
    const result = {
      current:`${vVoltage/rOhm}A`,
      resistance:r,
      voltage:v
    }
    callback(result)
  }

  findR(v, i, callback){
    let vVoltage = this.getVoltage(this.separate(v))
    let iAmpere = this.getAmpere(this.separate(i));
    callback(this.result(i, `${vVoltage/iAmpere}Ohm`, v))
  }

  result(current, resistance, voltage){
    return {
      current:current,
      resistance:resistance,
      voltage:voltage
    }
  }
}

module.exports = DasarListrik;
