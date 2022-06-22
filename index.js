const express = require('express')

const app = express()
const port = 8000

const db = require('./connection/db')

app.set('view engine', 'hbs') // set view engine hbs

app.use('/assets', express.static(__dirname + '/assets')) 
app.use(express.urlencoded({extended: false}))

let isLogin = true

db.connect(function(err, client, done){
    if (err) throw err // menampilkan error koneksi database

    app.get('/', function(request, response){
        response.render('index')
    })
    
    app.get('/contact', function(request, response){
        response.render('contact')
    })
    
    app.get('/blog', function(request, response){

            client.query('SELECT * FROM tb_blog', function(err, result){
                if (err) throw err
                // console.log(result.rows);
                let data = result.rows

                let dataBlog = data.map(function(item){
                    return {
                        ...item,
                        post_at: getFullTime(item.post_at),
                        isLogin
                    }
                })

                response.render('blog',{isLogin, blogs: dataBlog})
            })

    })

    app.get('/blog-detail/:id', function(request, response){

        let id = request.params.id

            client.query(`SELECT * FROM public.tb_blog WHERE id=${id}`, function(err, result){
                if (err) throw err
                // console.log(result.rows[0]);
                let data = result.rows[0]
                // data.post_at = getFullTime(data.post_at)
                data = {
                    title: data.title,
                    image: data.image,
                    content: data.content,
                    post_at : getFullTime(data.post_at),
                    duration: getDistanceTime(data.post_at)
                }
                // console.log(data);

                response.render('blog-detail', data)
            })
    })

    app.get('/add-blog', function(request, response){
        response.render('add-blog')
    })

    app.post('/add-blog', function(request, response){

        const data = request.body
        // console.log(data);

        const query = `INSERT INTO tb_blog(title, image, content, social_media)
        VALUES ('${data.inputTitle}','${data.inputImage}','${data.inputContent}','{"tiktok","instagram"}');`

        client.query(query, function(err, result){
            if(err) throw err

            response.redirect('/blog')
        })

    })

    app.get('/delete-blog/:id', function(request, response){

        const id = request.params.id
        const query = `DELETE FROM public.tb_blog WHERE id=${id};`

        client.query(query, function(err, result){
            if(err) throw err

            response.redirect('/blog')
        })
    })

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