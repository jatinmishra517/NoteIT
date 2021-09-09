console.log("noteit.js");
displaynotes();
//add notes
document.getElementById("addbtn").addEventListener("click", function () {
    var x = document.getElementById("addtxt");
    var notes;
    if (localStorage.getItem("notes") == null) {
        notes = [];
    }
    else {
        notes = JSON.parse(localStorage.getItem("notes"));
    }
    notes.push(x.value);
    x.value = "";
    localStorage.setItem("notes", JSON.stringify(notes));
    displaynotes();

    // var a=document.createElement("h5");
    // a.className="card-title";a.innerHTML="NOTE";
    // var b= document.createElement("textarea");
    // b.className="form-floating form-control"
    // b.style.height="100px";
    // b.innerHTML=x.value;
    // x.value="";
    // var c=document.createElement("button");
    // c.className="btn btn-primary";
    // c.innerHTML="DELETE";
    // var d=document.createElement("div");
    // d.className="card-body card mx-3 my-3";d.style.width="18rem";
    // d.appendChild(a);d.appendChild(b);d.appendChild(c);
    // document.getElementById("notes").appendChild(d);


});
//display 
function displaynotes() {
    var notes1;
    if (localStorage.getItem("notes") == null) {
        notes1 = [];
    }
    else {
        notes1 = JSON.parse(localStorage.getItem("notes"));
    }
    var html = ``;
    notes1.forEach(function (element, index) {
        html = html + `<div class="card my-3 mx-3" style="width: 18rem;">
            
        <div class="card-body">
          <h5 class="card-title">NOTE ${index + 1}</h5>
          <p class="a card-text">${element}</p>
          <button class="xyz btn btn-primary">DELETE</button>
        </div>
      </div>`;
    });
    var notesdisplay = document.getElementById("notes");

    if (html == ``) {
        notesdisplay.innerHTML = "<p>No note to display</p>";
    }
    else {
        notesdisplay.innerHTML = html;
    }
    delete1();
}

//delete button
function delete1() {
    var a = document.getElementsByClassName("xyz btn btn-primary");
    Array.from(a).forEach(function (element) {
        element.addEventListener("click", function () {
            var b = element.previousElementSibling.innerHTML;
            var notes2;
            if (localStorage.getItem("notes") == null) {
                notes2 = [];
            }
            else {
                notes2 = JSON.parse(localStorage.getItem("notes"));
            }
            var c = notes2.indexOf(b);
            notes2.splice(c, 1);
            localStorage.setItem("notes", JSON.stringify(notes2));
            displaynotes();
            console.log(b);
        })
    })
}

//delete all button
document.getElementById("delbtn").addEventListener("click", function () {
    localStorage.clear();
    displaynotes();
});

//search function
var txt=document.getElementById("searchtxt");

txt.addEventListener("input",function(){
    var txt1=txt.value;
    var h=document.getElementsByClassName("a card-text");
    Array.from(h).forEach(function(element){
        
        var k=element.innerText;
        console.log(k);
        if(k.includes(txt1)){
            element.parentElement.parentElement.style.display="block";
        }
        else{
            element.parentElement.parentElement.style.display="none";
        }


    })
    //var k=document.getElementById("notes").getElementsByTagName("p").innerHTML
})
