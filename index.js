const getRate = (lama, umur) => {
    umurInt = parseInt(umur)
    if(!umurInt){
        throw(new Error("Umur harus merupakan angka"));
    }
    const tabel = {
      "5":[10.42, 10.42, 10.42, 10.42, 10.42, 10.58, 10.75,
        10.95, 11.18, 11.43, 11.71, 12.00, 12.30, 12.61, 12.90,
        13.19, 13.46, 13.73, 13.99, 14.27, 14.56, 14.87, 15.21,
        15.59, 16.01, 16.48, 16.99, 17.55, 18.16, 18.83, 19.55,
        20.32, 21.15, 22.04, 22.99, 24.00, 25.07, 26.21, 27.42,
        28.70, 30.04, 31.46, 32.96, 34.53, 36.19, 37.93, 39.76,
        41.69, 43.73, 45.87, 48.13, 50.50, 52.99, 55.59, 58.30,
        61.12, 65.06, 67.13, 70.33, 73.68, 77.18, 80.84, 84.65,
        88.61, 92.70, 111.59, 116.63, 121.85, 127.30, 133.01],
      "10":[
        6.33, 6.33, 6.33, 6.33, 6.33, 6.42, 6.53, 6.65,
        6.79, 6.95, 7.12, 7.30, 7.48, 7.67, 7.85, 8.02,
        8.19, 8.35, 8.51, 8.68, 8.86, 9.05, 9.25, 9.48,
        9.74, 10.02, 10.34, 10.68, 11.05, 11.46, 11.90, 12.37,
        12.88, 13.42, 14.01, 14.63, 15.29, 15.99, 16.74, 17.53,
        18.36, 19.24, 20.17, 21.15, 22.18, 23.27, 24.42, 25.63,
        26.92, 28.28, 29.71, 31.23, 32.82, 34.50, 36.25, 38.09,
        40.02, 42.05, 44.19, 46.45, 48.84, 51.35, 54.00, 56.78, 59.70],
      "15":[
        5.06, 5.06, 5.06, 5.06, 5.06, 5.14, 5.23, 5.33,
        5.44, 5.56, 5.70, 5.84, 5.99, 6.14, 6.29, 6.43,
        6.56, 6.69, 6.82, 6.95, 7.09, 7.25, 7.41, 7.60,
        7.80, 8.03, 8.28, 8.56, 8.86, 9.19, 9.54, 9.92,
        10.34, 10.78, 11.25, 11.75, 12.29, 12.86, 13.47, 14.11,
        14.80, 15.51, 16.28, 17.08, 17.93, 18.83, 19.79, 20.80,
        21.87, 23.01, 24.21, 25.49, 26.85, 28.28, 29.79, 31.38, 
        33.06, 34.84, 36.73, 38.75
      ],
      "20":[4.51, 4.51, 4.51, 4.51, 4.51, 4.57, 4.65, 4.74, 4.84,
        4.95, 5.07, 5.20, 5.33, 5.47, 5.60, 5.72, 5.84, 5.94, 6.07, 
        6.19, 6.32, 6.45, 6.60, 6.77, 6.95, 7.15, 7.38, 7.63, 7.90, 
        8.19, 8.51, 8.86, 9.23, 9.62, 10.05, 10.51, 10.99, 11.51, 
        12.06, 12.65, 13.27, 13.92, 14.62, 15.36, 16.14, 16.97, 
        17.85, 18.79, 19.79, 20.85, 21.99, 23.19, 24.48, 25.84, 27.29],
      "25":[4.23, 4.23, 4.23, 4.23, 4.23, 4.29, 4.36, 4.45,
        4.54, 4.65, 4.76, 4.88, 5.01, 5.13, 5.25, 5.37, 5.48,
        5.59, 5.70, 5.81, 5.93, 6.06, 6.20, 6.36, 6.53,
        6.72, 6.94, 7.17, 7.43, 7.71, 8.01, 8.34, 8.69,
        9.07, 9.48, 9.91, 10.38, 10.87, 11.40, 11.96, 12.56,
        13.19, 13.87, 14.58, 15.34, 16.15, 17.02, 17.94, 18.92, 
        19.97 ],
      "30":[4.09, 4.09, 4.09, 4.09, 4.09, 4.15, 4.22, 4.30,
        4.39, 4.49, 4.61, 4.72, 4.84, 4.96, 5.08, 5.20, 5.31,
        5.41, 5.52, 5.63, 5.74, 5.87, 6.00, 6.16, 6.33, 6.52,
        6.72, 6.95, 7.21, 7.48, 7.78, 8.10, 8.44, 8.82,
        9.22, 9.64, 10.10, 10.59, 11.12, 11.67, 12.27, 12.90, 
        13.57, 14.29, 15.05 ],
      "sekaligus":[49.40, 49.40, 49.40, 49.40, 49.40, 50.13,
        50.96, 51.92, 53.00, 54.19, 55.49, 56.86, 58.82, 59.69,
        61.08, 62.42, 63.71, 64.95, 66.22, 67.51, 68.88, 70.36,
        71.99, 73.78, 75.76, 77.96, 80.39, 83.05, 85.95, 89.08,
        92.48, 96.12, 100.04, 104.22, 108.68, 113.43, 118.49, 123.84,
        129.50, 135.48, 141.78, 148.40, 155.37, 162.70, 170.40, 178.50,
        187.00, 195.93, 205.34, 215.21, 225.57, 236.42, 247.74, 259.53,
        271.76, 284.46, 297.62, 311.29, 325.48, 340.21, 355.48, 371.27,
        387.54, 404.23, 421.33, 438.88, 456.73, 474.97, 493.64, 512.73],
    }
    if(umurInt>tabel[lama].length){
        throw new Error("Tidak tersedia rate untuk umur dan lama yang diinput");
    }
    return tabel[lama][umurInt-1]
}

const toRupiah = bilangan => {
    var angka = Math.round(bilangan)
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if(i%3==0) rupiah += angkarev.substr(i,3)+',';
    return rupiah.split('',rupiah.length-1).reverse().join('');
}

$('#hitung').click(function(){
    var umur = $("#umur").val();
    var uang = $("#uang").val();
    var lama = $("#lama").children("option:selected").val();
    const hasil = {
        rate: 0,
        perTahun: 0,
        perSemester: 0,
        perTriwulan: 0,
        perBulan: 0
    };
    try {
        hasil.rate = getRate(lama,umur);
        hasil.perTahun = uang/1000 * hasil.rate;
        hasil.perSemester = (hasil.perTahun * 52) / 100;
        hasil.perTriwulan = (hasil.perTahun * 27) / 100;
        hasil.perBulan = (hasil.perTahun * 10) / 100;
        if(hasil.perBulan < 1){
          $("#tahun").text(`Rp ${hasil.perTahun}`)
          $("#semester").text(`Rp ${hasil.perSemester}`)
          $("#triwulan").text(`Rp ${hasil.perTriwulan}`)
          $("#bulan").text(`Rp ${hasil.perBulan}`)
        } else {
          $("#tahun").text(`Rp ${toRupiah(hasil.perTahun)}`)
          $("#semester").text(`Rp ${toRupiah(hasil.perSemester)}`)
          $("#triwulan").text(`Rp ${toRupiah(hasil.perTriwulan)}`)
          $("#bulan").text(`Rp ${toRupiah(hasil.perBulan)}`)
        }
    } catch(err) {
        alert(err.message)
    }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}