const urlApi = "https://api.github.com/users/marcosfmd"
const urlApiRepos = "https://api.github.com/users/marcosfmd/repos"
const repositories = document.querySelector(".projects__github")

function dataProfileUser () {
  fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    userNameProfile.textContent = data.name
    photoProfile.src = data.avatar_url
  })
  .catch(error => console.error(error))
}



function myRepositories () {
  fetch(urlApiRepos)
  .then(async response => {
    if(!response.ok) {
      throw new Error(response.status)
    }

    let data  = await response.json()
    console.log(data)
    data.map(item => {
      let project = document.createElement('div')
      project.className ='project__github'
      project.innerHTML = `
        <p class="name__project">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> <span id="nameRepos">${item.name}</span>
        </p>

        <p class="description__project">${item.description}</p>

        <div class="project__group">
          <div class="project-group__item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> ${item.stargazers_count}

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg> ${item.forks_count}
          </div>
          <p class="linguage__project">${item.language}</p>
        </div>
      `
      repositories.appendChild(project)
    })
  })
}

dataProfileUser()
myRepositories()
