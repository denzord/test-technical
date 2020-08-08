function cetak_gambar(panjang) {
    let i, j, cetak = "";
    for (i = 1; i <= panjang; i++) {
        if ( i == 1 || i == panjang) {
            for (j = 1; j <= panjang; j++) {
                cetak += ("+");
            }
        } else if ( i > 1 && i < panjang  ) {
            for (j = 1; j <= panjang; j++) {
                if ( j%3 == 0) {
                    cetak += ("+");
                } else {
                    cetak += ("=");
                }
            }
        }
      cetak += ("\n");
    }
    console.log(cetak);
}