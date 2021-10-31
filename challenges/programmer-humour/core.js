const content = document.getElementById("content");
fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        const newImg = document.createElement("img");
        newImg.src = data.img;
        content.appendChild(newImg);
    })
    .catch(function (error){
        console.log(`ERROR - ${error}`);
    });