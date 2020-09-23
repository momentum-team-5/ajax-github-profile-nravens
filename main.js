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
    infoList.appendChild(listNameEl)
    
    let nameEl = document.createElement('p')
    listNameEl.appendChild(nameEl)
    nameEl.innerText = `Name ${data.name}`
    


    let listPathEl = document.createElement('li')
    infoList.appendChild(listPathEl)
    
    let pathLinkEl = document.createElement('a')
    pathLinkEl.href = data.html_url
    listPathEl.appendChild(pathLinkEl)
    
    let pathEl = document.createElement('p')
    pathEl.innerText = data.login
    pathLinkEl.appendChild(pathEl)



    let listCompanyEl = document.createElement('li')
    infoList.appendChild(listCompanyEl)
    
    let companyEl = document.createElement('p')
    listCompanyEl.appendChild(companyEl)
    companyEl.innerText = `@${data.company}`
    


    let listSiteEl = document.createElement('li')
    infoList.appendChild(listSiteEl)
    
    let siteLinkEl = document.createElement('a')
    siteLinkEl.href = data.blog
    listSiteEl.appendChild(siteLinkEl)
    
    let siteEl = document.createElement('p')
    siteEl.innerText = data.blog
    siteLinkEl.appendChild(siteEl)
    


    let avatarPic = document.createElement('img')
    avatarPic.src = data.avatar_url
    storyDiv.appendChild(avatarPic)





})