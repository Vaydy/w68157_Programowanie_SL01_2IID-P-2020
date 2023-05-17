class Prostokat {
  constructor(dlugosc, szerokosc) {
    this.dlugosc = dlugosc;
    this.szerokosc = szerokosc;
  }

  poleProstokata() {
    return this.dlugosc * this.szerokosc;
  }

  obwodProstokata() {
    return 2 * (this.dlugosc + this.szerokosc);
  }

  czyKwadrat() {
    return this.dlugosc === this.szerokosc;
  }
}


const prostokat1 = new Prostokat(8, 9);
window.alert(prostokat1.poleProstokata());
window.alert(prostokat1.obwodProstokata());
window.salert(prostokat1.czyKwadrat());

const prostokat2 = new Prostokat(6, 6);
console.log(prostokat2.poleProstokata());
console.log(prostokat2.obwodProstokata());
console.log(prostokat2.czyKwadrat());
