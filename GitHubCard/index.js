/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/candaceyw')
  .then((res) => {
    // console.log(res)
    newComponent.appendChild(component(res.data))
  })
  .catch((err) => {
    console.log('You hit an error: ', err);
  });

  


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const newComponent = document.querySelector('.cards');

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
axios.get('https://api.github.com/users/candaceyw/followers')
  .then((res) => {
    const followersArray = res.data;
    const followersList = followersArray.map((user) => {
      return user.login;
    });
    console.log(followersList);
    return followersList;
  })

  .then((followersList) => {
    followersList.forEach((user) => {
    axios.get(`https://api.github.com/users/${user}`) 
    .then((res) => {
      const data = res.data;
      const newCard = component(data);
      newComponent.appendChild(newCard)
    })    
    })
  })


// })
// axios
//   .get('https://api.github.com/users/candaceyw')
//   .then((res) => {
//     console.log(res)
//     return res.data.followers_url
//   })

//     .then((res) => {
//       return axios.get(res)

//       .then((res) => {
//       res.data.forEach(newCards => {
//         axios.get(newCards.url)

//         .then((res)=>{
//           newComponent.appendChild(component(res.data))
//           })

//         })
//       })
//     })
//   .catch((err) => {
//     console.log('You hit an error: ', err);
//   });
 

// const followersArray = ['galyonj', 'avpimblesr', 'Franzferdinan51', 'VictorSDelpiu', 'HeyMichelle'];

// followersArray.forEach((element) =>{
// axios
//   .get(`https://api.github.com/users/${element}`)
//   .then((res) => {
//     newComponent.appendChild(component(res.data))
   
//   })
  
// })



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function component(object){
  const newCard = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location= document.createElement('p');
  const profile = document.createElement('p');
  const anchor = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const userBio = document.createElement('p');

 
  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  img.src = object.avatar_url;
  name.textContent = object.name;
  userName.textContent = object.login;
  location.textContent = `Location: ${object.location}`;
  profile.textContent = `Profile: `;
  anchor.href = object.html_url;
  anchor.textContent = object.html_url;
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  userBio.textContent = `Bio: ${object.bio}`;


  newCard.appendChild(img);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(anchor);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(userBio);


  return newCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
