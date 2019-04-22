function getNextVin() {
    var nextVin = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 12; i++)
      nextVin += possible.charAt(Math.floor(Math.random() * possible.length));
  
    console.log(nextVin);
  }

  getNextVin();