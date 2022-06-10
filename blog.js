
// let siswa1 = 'Hilal'
// let siswa2 = 'Surya'
// console.log(siswa1);

// let namaSiswa = ['Hilal', 'Surya', 'Acep', 'Ade']
// console.log(namaSiswa);
// // console.log(namaSiswa[2]);

// let dataHilal = {
//     nama: 'Hilal',
//     alamat: 'Jakarta',
//     umur: 20
// }

// let dataSurya = {
//     nama: 'Surya',
//     alamat: 'Tangerang',
//     umur: 21
// }
// console.log(dataHilal.alamat);
// console.log(dataSurya);

// let dataSiswa = [
//     {
//         nama: 'Hilal',
//         alamat: 'Jakarta',
//         umur: 20,
//     },
//     {
//         nama: 'Surya',
//         alamat: {
//             kelurahan: 'Cipedak',
//             kecamatan: 'Jagakarsa',
//             kota: 'Jakarta Selatan'
//         },
//         umur: 21,
//         batch: 36
//     },
// ]

// console.log(dataSiswa);
// console.log(dataSiswa[1].alamat);

// let dataProduct = [
//     {
//         name: 'Aqua',
//         price: 2000
//     },
//     {
//         name: 'Fanta',
//         price: 20000
//     },
// ]

// console.log(dataProduct);

let dataBlog = []
console.log(dataBlog);

function addBlog(event){
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    image = URL.createObjectURL(image[0])

    let blog = {
        title,
        content,
        image
    }

    dataBlog.push(blog)
    console.log(dataBlog);

    renderBlog()
}

function renderBlog(){

    document.getElementById('contents').innerHTML = ''

    for(let data = 0; data < dataBlog.length; data++){
        
        document.getElementById('contents').innerHTML += 
        `
            <div class="blog-list-item">
                <div class="blog-image">
                    <img src="${dataBlog[data].image}" alt="" />
                </div>
                <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank"
                    >${dataBlog[data].title}</a
                    >
                </h1>
                <div class="detail-blog-content">
                    12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
                </div>
                <p>
                    ${dataBlog[data].content}
                </p>
                </div>
            </div>
        `
    }

}