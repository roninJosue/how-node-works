// API https://dog.ceo/api/breeds/image/random
const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);

      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        console.log(
          `Random dog image saved to file!, img: ${res.body.message}`
        );
      });
    })
    .catch((err) => {
      console.log(`Err: ${err.message}`);
    });
});
