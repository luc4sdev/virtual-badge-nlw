const LinksSocialMedia = {
    github: "luc4sdev",
    youtube: "MysterCraft",
    instagram: "lucas_franca01",
    facebook: "",
    twitter: ""
}

function changeSocialMediaLinks() {

  for(let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  


}
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

    // fectch pega a resposta da url
    // then aguarda o fetch e pega a resposta do fetch

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.innerHTML = data.name;
        linkGit.href.innerHTML = data.html_url;
        bio.innerHTML = data.bio;
        userImage.src = data.avatar_url;
        userLogin.innerHTML = data.login;

    })
}

getGitHubProfileInfos()