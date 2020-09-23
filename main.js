const userURL = 'https://api.github.com/users/nravens'
const infoDiv = document.getElementById('info') 
const storyDiv = document.getElementById('story')

fetch(userURL)
.then(response =>response.json())
.then(function(data) {
    console.log(data)
    let infoList =  document.createElement('ul')
    infoDiv.appendChild(infoList)

    let listNameEl = document.createElement('li')
    let nameEl = document.createElement('p')
    infoList.appendChild(listNameEl)
    listNameEl.appendChild(nameEl)
    nameEl.innerText = `Name ${data.name}`

    let listPathEl = document.createElement('li')
    let pathEl = document.createElement('p')
    //let pathText = document.createElement('p')
    pathText = 'nravens'
    let pathLinkEl = document.createElement('a')
    infoList.appendChild(pathLinkEl)
    //listPathEl.innerText = "GitHub URL"
    listNameEl.appendChild(pathEl)
    pathLinkEl.href = data.html_url
    //pathLinkEl.appendChild(pathText)
    pathLinkEl.appendChild    

    let listCompanyEl = document.createElement('li')
    let companyEl = document.createElement('p')
    infoList.appendChild(listCompanyEl)
    listNameEl.appendChild(companyEl)
    companyEl.innerText = `@${data.company}`
    

    let listSiteEl = document.createElement('li')
    let siteEl = document.createElement('p')
    let siteLink = document.createElement('a')
    let siteText =document.createElement('p')
    siteLink.href = data.blog
    siteLink.appendChild()
    infoList.appendChild(listSiteEl)
    listNameEl.appendChild(siteEl)
    siteEl.innerText = 'Website'
    siteLink.appendChild(siteText)
    siteEl.appendChild(siteLink)


    let avatarPic = document.createElement('img')
    avatarPic.src = data.avatar_url
    storyDiv.appendChild(avatarPic)





})