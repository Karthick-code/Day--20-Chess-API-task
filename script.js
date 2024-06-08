
result();
async function result() {
  try {
    var data = await fetch("https://api.chess.com/pub/streamers");
    var res = await data.json();
    console.log(res);
    var x=res.streamers
    var select = document.getElementById("player");
    for (var i = 0; i < x.length; i++) {
      const opt = document.createElement("option");
      opt.value = x[i].username;
      opt.innerText = x[i].username;
      select.append(opt);
      
    }
    document.querySelector("button").addEventListener("click", (ele) => {
      ele.onclick = display(x);
    })
  }
  catch (error) {
    console.log(error);
  }
}


function display(x) {
  var select = document.getElementById("player");
  var value = select.options[select.selectedIndex].text;
  console.log(value);
  var country_data = x.filter((element) => {
    if (element.username == value) {
      return element;
    }
  });
  console.log(country_data);

  var y=country_data[0];
  var card_div = document.createElement("div");
  card_div.className = "col-lg-12 col-md-8 col-sm-6 col d-flex justify-content-center ";
  card_div.id = "card";
  if (document.querySelector("#card") !== null) {
    var parent = document.querySelector("#card");
    parent.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${y.avatar}" class="card-img-top">
    <div class="card-body text-info">
      <h5 class="text-center">Player-Details</h5>
      <p class="output"><b>Username : ${y.username}</b></p>
      <p class="output"><b>Is live : ${y.is_live}</b></p>
      <p class="output"><b>Is community streamer : ${y.is_community_streamer}</b></p>
      <a href="${y.url}" target="_blank" class = "output">Link to see the Profile</a>
  </div>`
  }
  else {
    card_div.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${y.avatar}" class="card-img-top">
    <div class="card-body text-info">
      <h5 class="text-center">Player-Details</h5>
      <p class="output"><b>Username : ${y.username}</b></p>
      <p class="output"><b>Is live : ${y.is_live}</b></p>
      <p class="output"><b>Is community streamer : ${y.is_community_streamer}</b></p>
      <a href="${y.url}" target="_blank" class = "output">Link to see the Profile</a>
  </div>`
    var parent = document.querySelector(".container");
    parent.append(card_div);
  }
  


}
