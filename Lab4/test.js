const book={
  tytul:"I love you",
  autor:"Me",
  rok:2018,
}
aboutbook:function(){
  console.log(`${this.tytul} - ${this.autor} (${this.rok})`);
}
};
book.aboutbook();
