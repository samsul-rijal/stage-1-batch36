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

app.get('/blog', function(request, response){
    response.render('blog',{isLogin})
})

app.get('/blog-detail/:id', function(request, response){

    // console.log(request.params.id);
    let id = request.params.id

    response.render('blog-detail', {
        blog: {
            id,
            title: 'Selamat datang',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dignissimos eveniet explicabo, provident animi porro deleniti velit facilis omnis illo, eligendi quaerat atque dicta qui dolor tenetur, vero minus magnam!',
            author: 'Samsul Rijal',
            postAt: '16 Juni 2022 10:24 WIB'
        }
    })
})

app.get('/add-blog', function(request, response){
    response.render('add-blog')
})

app.post('/add-blog', function(request, response){
    // console.log(request);
    console.log(request.body);
    // console.log(request.body.inputTitle);

    response.redirect('/blog')
})

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})