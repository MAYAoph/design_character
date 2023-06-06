let del1= false;

async function load() {
    const fetch_response = await fetch('/get_outfits');
    const data = await fetch_response.json();
    console.log(data);
    for (let index = 0; index < data.length; index++) {
        let button = document.createElement("input");
            button.setAttribute("type", 'button');
            button.className = "outfit";
            button.setAttribute("id", index.toString() )
            button.setAttribute("onclick", "load_this(this.id);");
            document.getElementById("outfit_div").appendChild(button); 
            button.setAttribute("value", data[index].name );
            }
    }

load();

async function load_this(id) {
    const id1= {index: id};
    let options = {
        method: "post",
        body: JSON.stringify(id1),
        headers: {
            'Content-Type': 'application/json'}}

    if (del1==false) {
        const upload_response = await fetch('/chosen', options);
        console.log(upload_response.json());
        back();
     }

    if (del1==true) {
        if (confirm("Are you sure you want to delete this save?")){
            const upload_response2 = await fetch('/delete', options);
            var elements = document.getElementsByClassName("outfit");
            for(var i = 0; i < elements.length; i++){
                // elements[i].parentNode.removeChild(elements[i]);
                elements[i].style.display = "none";
            }
            del1=false;
            load();
        }
        
        else{
            alert ("deletion cancelled");}
        }
}

function back() {
    window.location.assign("../main.html"); 
}

function del() {
    console.log(del1)
    if (del1==true){
        del1=false;
        alert("deletion mode stopped")
    }
    else{
        del1=true;
        alert("deletion mode started")
    }
}