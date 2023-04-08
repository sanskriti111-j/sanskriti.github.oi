

fetch('https://api.ecelliitr.org/edc/community')
    .then((data) => {
        return data.json();

    })
    .then((completedata) => {
        //console.log(completedata[1].name);
        let data1 = "";
        completedata.map((values) => {
            data1 += `<div class="card">
            <h1 class="name">${values.name}</h1>
            <img src=${values.image} alt="img" class="images" width="100" height="250px"></img>                   <h2 class="title">${values.name}</h2 >
            <p>${values.description}</p>
            <p>${values. email}</p>
            <p class="contact">${values.contact}</p>
            <p class="linked in">${values.linkedin}</p>    
        </div >`;
            });
            document.getElementById("cards").innerHTML=data1;

                
        })
    .catch((err) => {
        console.log(err);
    })
