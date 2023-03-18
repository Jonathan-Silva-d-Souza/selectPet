const dogButton = document.querySelector('#random-dog');
const catButton = document.querySelector('#random-cat');
const surprise = document.querySelector('#surprise-me');
const randomPetImage = document.querySelector('#random-pet-image');


dogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    const petURL = data.message;
    randomPetImage.src = petURL;
  });

});

catButton.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
  .then(resolve => resolve.json())
  .then(data => {
    const petURL = data.file;
    randomPetImage.src = petURL;
  });
});

surprise.addEventListener('click', () => {
  Promise.any([
    fetch('https://aws.random.cat/meow'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ])
  .then((response) => response.json())
  .then((data) => {
    const petURL = data.message ?? data.file;
    randomPetImage.src = petURL;
  });
});