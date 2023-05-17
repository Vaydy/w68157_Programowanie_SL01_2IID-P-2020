class Samochod {
  constructor(marka, model, rokProdukcji, kolor, predkosc) {
    this.marka = marka;
    this.model = model;
    this.rokProdukcji = rokProdukcji;
    this.kolor = kolor;
    this.predkosc = predkosc;
  }

  zwiekszPredkosc(wartosc) {
    this.predkosc += wartosc;
  }

  zmniejszPredkosc(wartosc) {
    this.predkosc -= wartosc;
  }

  informacjeOSamochodzie() {
    return `${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
  }
  wiekSamochodu() {
    const aktualnyRok = new Date().getFullYear();
    const wiek = aktualnyRok - this.rokProdukcji;
    return wiek;
  }
}


const samochod = new Samochod("BMW", "X5", 2022, "Czarny", 0);
console.log(samochod.informacjeOSamochodzie());
samochod.zwiekszPredkosc(50);
console.log(samochod.informacjeOSamochodzie());
samochod.zmniejszPredkosc(20);
console.log(samochod.informacjeOSamochodzie());
console.log(samochod.wiekSamochodu());
