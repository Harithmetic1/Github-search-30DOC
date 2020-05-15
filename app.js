let userInput = document.getElementById('userInput');
let username = document.getElementById('username');
let avatar = document.getElementById('image');
let gitNumber = document.getElementById('number');
let repoLink = document.getElementById('repo');
let publicRepos = document.getElementById('publicRepo');
let name = document.getElementById('name');

 async function getData(){
  const data =  await fetch(`https://api.github.com/users/${userInput.value}`, {
      headers : {
          "Accept" : "application.json"
      }
  })
  const gitData = await data.json();
  console.log(gitData);

  let userN = gitData["login"]
  let avatarNumber = gitData["id"]
  let gitRepo = gitData["html_url"]
  let gitName = gitData["name"]
  let gitPRepo = gitData["public_repos"]

  username.innerHTML = "Username : " + userN;
  gitNumber.innerHTML = "#" + avatarNumber;
  repoLink.href = gitRepo;
  name.innerHTML = "Name : " + gitName;
  publicRepos.innerHTML = "Public Repo : " + gitPRepo; 

  var img = new Image();
  var div = document.getElementById('image');
img.onload = function() {
  div.appendChild(img);
  div.width = "50px"
  div.height = "50px"
};
img.src = "https://avatars0.githubusercontent.com/u/"+avatarNumber+"?v=4"

var nodes = div.childNodes;
        for(var i = 0; i < nodes.length; i++){
            div.removeChild(nodes[i]);
        }

}

function showLink(){
    document.getElementById('repo').style.display = 'block';
}  