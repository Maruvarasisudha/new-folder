
var valuarry = []
let list=[]
let arrayvalue=[]

function validationform() {
    let names = document.getElementById("name").value;
    let phone = document.getElementById("phonenumber").value;
    let email = document.getElementById("email").value;

    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;


    let select = document.getElementById("status").value;
    let text = document.getElementById("floatingTextarea").value;
    var check = document.querySelector('input[type="radio"]:checked');
    let box = document.getElementsByClassName("language");

    var selected = new Array();

    var tblFruits = document.getElementById("tbl");
    var chks = tblFruits.getElementsByTagName("INPUT");


    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    } if (selected.length > 0) {
        document.getElementById("checkbox").innerHTML = "";
    } else {
        document.getElementById("checkbox").innerHTML = "please enter your languages"
    }

    if (names == "") {
        document.getElementById("nameerr").innerHTML = "Enter Your Full  Name!"
    }
    else {
        document.getElementById("nameerr").innerHTML = "";
    }

    if (phone == "" || !phoneNum.test(phone)) {

        document.getElementById("phoneerr").innerHTML = "Enter Your Vaild  Phone Number!"
    }
    else {
        document.getElementById("phoneerr").innerHTML = ""
    }
    if (email == "" || !regEmail.test(email)) {
        document.getElementById("emailerr").innerHTML = "Enter Your Vaild Email!"
    }

    else {
        document.getElementById("emailerr").innerHTML = ""
    }

    if (check) {
        document.getElementById("gendererr").innerHTML = "";

    }
    else {
        document.getElementById("gendererr").innerHTML = "Please Select Your Gender!"

    }


    if (select == "") {
        document.getElementById("option").innerHTML = " Please Select Your Current Status!";
    }

    else {
        document.getElementById("option").innerHTML = " ";
    }


    if (text == "") {
        document.getElementById("textarea").innerHTML = "Please Enter Your current Address!";
    }
    else {
        document.getElementById("textarea").innerHTML = " ";

    }

    let result = {
        "name": names, "phonenumber": phone, "email": email, "status": select,
        "address": text, "gender": check.value, "language": selected
    }
    if (names && phone && email && select && text && check.value && selected) {
        list.push(result)
        console.log(valuarry);
        localStorage.setItem("resultvalue", JSON.stringify(list))
        buildTable()
    }
    else {
        console.log("");
    }
}
function buildTable() {
     list = JSON.parse(localStorage.getItem("resultvalue"));
   arrayvalue.push(list)
    
    console.log(arrayvalue)

    var text;
    text = "";
    for (let i = 0; i < list.length; i++) { //displays multiple announcements
        text += "<td>" + list[i].name;
        text += "<td>" + list[i].phonenumber;
        text += "<td>" + list[i].email;
        text += "<td>" + list[i].gender;
        text += "<td>" + list[i].language;
        text += "<td>" + list[i].status;
        text += "<td>" + list[i].address;
        text += '<td> <button onclick="Edit('+ i +')">Edit</button> <tr>';
    }
    document.getElementById("tabbody").innerHTML = text;

}
// function Edit(item){
// editText=item;
// console.log(item);
// console.log(list);
// console.log(list[item]);
// document.getElementById("name").value=list[item].name;
// }







// builtTable(result)
// function builtTable(data) {
//     let tables = document.getElementById("tabbody")
//     for (let i = 0; i < data.length; i++) {
//         let row = `<tr>
// <td>${data[i].name}</td>
// <td>${data[i].phonenumber}</td>
// <td>${data[i].email}</td>
// <td>${data[i].gender}</td>
// <td>${data[i].language}</td>
// <td>${data[i].Status}</td>
// <td>${data[i].address}</td>
// </tr>`
//         tables.innerHTML += row

//     }




// }





document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();

}




)











