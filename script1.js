prompt ('siapa nama kamu')
prompt('kamu mahasiswa kah ??')
var student = prompt('Benarkah')

if (student == 'iya'){
    var ipk = prompt('berapa ipk kamu??')
    ipk = parseFloat(ipk)
    if(ipk >= 1 &&  ipk <= 2){
        alert('ipk kamu cukup  memuaskan dengan nilaiipk ' +ipk);
    }
    else if(ipk > 2 && ipk <=3){
        alert('kamu cukup memuaskan karena jumlah ipkmu ' + ipk)
    }
    else if(ipk > 3.5 && ipk <=4){
        alert('selamat kamu mendapatkan ' + ipk +' dan anda cumladude')
    }
    else{
        alert('emang ada ipk segitu')
    }
}