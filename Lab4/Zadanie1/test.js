const book = {
  tytul: "Podziemny krąg",
  autor: "Charles Michael «Chuck» Palahniuk",
  rok: 1996,
  aboutbook: function() {
    alert(`${this.tytul} - ${this.autor} (${this.rok})`);
  }
};

book.aboutbook();