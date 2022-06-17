const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'hbs') // set view engine hbs

app.use('/assets', express.static(__dirname + '/assets')) 
app.use(express.urlencoded({extended: false}))

app.get('/', function(request, response){
    response.render('index')
})

app.get('/contact', function(request, response){
    response.render('contact')
})

let isLogin = true
let dataBlog = [
    {
        title: 'Pasar Coding di Indonesia Dinilai Masih Menjanjikan',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a qui, ab architecto sint nihil tenetur odio cumque cum ratione eligendi et libero inventore autem voluptas molestias fuga incidunt magni!',
        postAt: new Date(),
        author: 'Samsul Rijal',
    }
]

app.get('/blog', function(request, response){

    let data = dataBlog.map(function(item){
        return{
            ...item,
            postAt: getFullTime(new Date()),
            isLogin,
            duration: getDistanceTime(item.postAt)
        }
    })

    // console.log(data);

    response.render('blog',{isLogin, blogs: data})
})

app.get('/blog-detail/:index', function(request, response){

    let index = request.params.index
    console.log(index);

    let blog = dataBlog[index]

    console.log(blog);

    response.render('blog-detail', blog)
})

app.get('/add-blog', function(request, response){
    response.render('add-blog')
})

app.post('/add-blog', function(request, response){
    // console.log(request.body);

    let data = request.body

    data = {
        title: data.inputTitle,
        content: data.inputContent,
        author: 'Samsul Rijal',
        postAt: new Date()
    }

    dataBlog.push(data)
    response.redirect('/blog')
})

app.get('/delete-blog/:index', function(request, response){
    // console.log(request.params.index);
    let index = request.params.index
    dataBlog.splice(index, 1)

    response.redirect('/blog')
})


function getFullTime(waktu){
    let month =  ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober']

    let date = waktu.getDate()
    let monthIndex = waktu.getMonth()
    let year = waktu.getFullYear()
    let hours = waktu.getHours()
    let minutes = waktu.getMinutes()

    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
    return fullTime
}

function getDistanceTime(waktu){

    let timeNow = new Date()
    let timePost = waktu
    let distance = timeNow - timePost // hasilnya milisecond
    // console.log(distance);

    let milisecond = 1000 // 1 detik 1000 milisecond
    let secondInHours = 3600 // 1 jam sama dengan 3600 detik
    let hoursInDay = 24 // 1 hari 24 jam

    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSeconds = Math.floor(distance / milisecond)

    
    if(distanceDay > 0){
        return `${distanceDay} day ago`;
    } else if (distanceHours > 0){
        return `${distanceHours} hours ago`
    } else if (distanceMinutes > 0){
        return `${distanceMinutes} minutes ago`
    } else {
        return `${distanceSeconds} seconds ago`
    }

}

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})