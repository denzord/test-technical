function bertemu() {
    const timeNana = 12, speedNana = 7; //satuan speed m/d sejam 25.2 km
    const timeAngela = 13, speedAngela = 10; // sejam 36 km
    let jarakNana = 0, jarakAngela = 0;
    let selisihJarak = (timeAngela-timeNana)*speedNana*3600; 
    //selisih jarak Nana dan Angela pukul 13
    let t, pukul;
  
    jarakNana += selisihJarak;
  
    for (t = 0; jarakAngela < jarakNana; t++ ) {
      jarakNana +=speedNana;
      jarakAngela +=speedAngela;
    }
    pukul = timeNana + t/3600;
    pukul = pukul.toFixed(2);
    console.log(`selisih jarak = ${selisihJarak}
    jarak Nana = ${jarakNana}
    jarak Angela = ${jarakAngela}
    waktu tempuh = ${t}
    pukul = ${pukul}
    `);
  }