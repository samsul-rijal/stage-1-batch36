
// Variabel
// VAR
// LET
// CONST

// var gelas = "Kopi"
// console.log(gelas)
// var gelas = "Susu"
// console.log(gelas);

// let piring = "Nasi"
// piring = "Air"
// console.log(piring);

// const mangkok = "Sop"
// mangkok = "Mie"
// console.log(mangkok);

// Tipe Data
// let namaDepan = "Surya"
// let umur = 20
// console.log(`${namaDepan} umurnya ${umur} tahun`);
// console.log(namaDepan + " umurnya " + umur + " tahun");
// console.log(namaDepan, "umurnya", umur, "tahun");

// let bilangan1 = 50
// let bilangan2 = 20
// console.log(bilangan1+bilangan2);


// Condition
// let nilai = 70

// if(nilai < 70){
//     console.log("Tidak Lulus");
// } else {
//     console.log("Lulus");
// }

// Function

// function bilangan(){
//     let bilangan1 = 50
//     let bilangan2 = 20
//     console.log(bilangan1+bilangan2);
// }

// bilangan()

// function bilangan(bilangan1, bilangan2, bilangan3){

//     console.log(bilangan1+bilangan2+bilangan3);
// }

// bilangan(50, 20, 10)

function submitData(){

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if(name == ''){
        return alert("Nama wajib diisi")
    } else if(email == ''){
        return alert("Email wajib diisi")
    } else if(phone == ''){
        return alert("Phone wajib diisi")
    } else if(subject == ''){
        return alert("Subject wajib diisi")
    } else if(message == ''){
        return alert("Pesan wajib diisi")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);
    // <a href="mailto:user@mail.com?subject=Frontend&body=Hallo saya samsul">Send email</a>
    let emailReceiver = "admin@mail.com"
    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name} ${message} silahkan hubungi ${phone} Email: ${email}`
    a.click()

    let dataObject = {
        namaLengkap: name,
        email,
        phone,
        subject,
        message
    }

    console.log(dataObject);

}

let name = "Samsul"




