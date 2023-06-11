const outfit= {name: "", hair: "", face:"", clothes: "", background: ""};

//function popUp() {
 //   let pop= document.getElementById("pop");
 //   console.log(pop);
  //  pop.classList.add("popUp");
   // const o= document.getElementById("overlay");
  //  o.classList.add("overlay2");
//}

//function popDown() {
  //  pop.classList.remove("popUp");
  //  let p= document.getElementById("overlay");
  //  p.classList.remove("overlay2");
//}
//setTimeout(function(){
  //  popUp(); }, 2)

function start(id) {
    console.log(id);
    document.getElementById(id+"_div").style.display="block";
    document.getElementById("starter_div").style.display="none";
}

function hair(id,className) {
    console.log(id);
    console.log(className);
    var elems = document.getElementsByClassName(className+"1");
    for (var i = 0; i < elems.length; i++ ) {
        elems[i].style.display = "none";}
    var hair = document.getElementById(id+"1");
    hair.style.display = "block";
    outfit[className]=id+"1";
    console.log(outfit);
}

function back(){
    document.getElementById("hair_div").style.display="none";
    document.getElementById("clothes_div").style.display="none";
    document.getElementById("face_div").style.display="none";
    document.getElementById("background_div").style.display="none";
    document.getElementById("starter_div").style.display="block";
}

function background(id) {
    console.log(id);
    document.body.style.backgroundImage = "url('../img/background/"+ id+"_background.jpg')";
    document.body.style.backgroundPosition= "center";
    document.body.style.backgroundRepeat= "no-repeat";
    document.body.style.backgroundSize= "cover";
    outfit["background"]=id+"_background.jpg";
}

async function save() {
    var name= prompt("What is the name of the save?");
    if (name !== null) {
    outfit["name"]=name;
    console.log(outfit);
    let options = {
        method: "post",
        body: JSON.stringify(outfit),
        headers: {
            'Content-Type': 'application/json'}}
        console.log(options.body);
    const fetch_response = await fetch('/save', options);
    const data = await fetch_response.json();
    console.log(data);
    alert("outfit " + data[data.length-1].name + " saved successfully")
}}

function load() {
    window.location.assign("../html/saved_outfits.html"); 
}

async function display() {
        const proccessed = await fetch('/array');
        const proccessed1= await proccessed.json();
        console.log(proccessed1)
        console.log(proccessed1.hair)
        document.getElementById(proccessed1.hair).style.display="block";
        document.getElementById(proccessed1.face).style.display="block";
        document.getElementById(proccessed1.clothes).style.display="block";
        console.log(proccessed1.background);
        document.body.style.backgroundImage = "url('../img/background/"+proccessed1.background+"')";
        document.body.style.backgroundPosition= "center";
        document.body.style.backgroundRepeat= "no-repeat";
        document.body.style.backgroundSize= "cover";
}

display();