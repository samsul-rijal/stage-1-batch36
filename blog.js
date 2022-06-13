let dataBlog = []
console.log(dataBlog);

function addBlog(event){
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    image = URL.createObjectURL(image[0])

    let twitter = document.getElementById('input-twitter').checked
    let facebook = document.getElementById('input-facebook').checked

    if(twitter){
        twitter = document.getElementById('input-twitter').value
    } else {
        twitter = ''
    }
    if(facebook){
        facebook = document.getElementById('input-facebook').value
    } else {
        facebook = ''
    }

    let blog = {
        title,
        content,
        image,
        postAt: new Date(),
        author: 'Samsul Rijal',
        twitter,
        facebook
    }

    dataBlog.push(blog)
    console.log(dataBlog);

    renderBlog()
}

function renderBlog(){

    document.getElementById('contents').innerHTML = firstBlog

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
                    ${getFullTime(dataBlog[data].postAt)} | ${dataBlog[data].author}
                </div>
                <p>
                    ${dataBlog[data].content}
                </p>
                <i class="fa-brands fa-${dataBlog[data].twitter}"></i>
                <i class="fa-brands fa-${dataBlog[data].facebook}"></i>


                <div style="text-align: right; margin-top: 10px">
                    <span style="font-size: 12px; color: grey">${getDistanceTime(dataBlog[data].postAt)}</span>
                </div>
                </div>
            </div>
        `
    }

}


function getFullTime(waktu){
    let month =  ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober']

    let date = waktu.getDate()
    let monthIndex = waktu.getMonth()
    let year = waktu.getFullYear()
    let hours = waktu.getHours()
    let minutes = waktu.getMinutes()

    console.log(date);
    console.log(month[monthIndex]);
    console.log(year);
    console.log(hours);
    console.log(minutes);

    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
    return fullTime
}


function getDistanceTime(waktu){

    let timeNow = new Date()
    let timePost = waktu
    let distance = timeNow - timePost
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

setInterval(() => {
    renderBlog()
}, 3000)


let firstBlog = `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
              >
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>

            <div style="text-align: right; margin-top: 10px">
              <span style="font-size: 12px; color: grey">2 Minutes ago</span>
            </div>
            
          </div>
        </div>
    `
