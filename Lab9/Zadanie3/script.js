const car = {
    marka: 'BMW',
    model: 'X5',
    rokProdukcji: 2022,
    kolor: 'Czarny',
    prędkość: 0,

    zwiększPrędkość: function(wartość) {
        this.prędkość += wartość;
        },

    zmniejszPrędkość: function(wartość) {
        if (this.prędkość - wartość >= 0) {
            this.prędkość -= wartość;
        } else {
            this.prędkość = 0;
        }
    },

    informacjeOSamochodzie: function() {
        return `Marka: ${this.marka}, Model: ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.prędkość}`;
    }
};

const wartość = prompt("Podaj wartość!");

car.zwiększPrędkość(Number(wartość));
window.alert(car.informacjeOSamochodzie());