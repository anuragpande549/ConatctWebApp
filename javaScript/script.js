let addUser = document.querySelector("#add-user");
let popUp = document.querySelector("#pop-up");
let cancle = document.querySelector("#cancle");
let form = document.querySelector("form");
let input = document.querySelectorAll("form input");
let submitBtn = document.querySelector("form button");
let getInput = document.querySelector("#get-name");
let getNumber = document.querySelector("#get-number");
let getTextArea = document.querySelector("#comment");
let contactList = document.querySelector("#contact-list");
let search = document.querySelector("#search");
let selectElement = document.querySelector("#select");
let genderElements = document.getElementsByName('gender');
let getSelectOpt = document.querySelectorAll(".selectOpt");

// Initialize contactArray from localStorage or use default
let contactArray = JSON.parse(localStorage.getItem("arrayContactData")) || [
    {
        name: "demo",
        phoneNumber: "7874655373",
        categery: "family",
        commentArea: "lorem Anurag is strange of the word",
        gender: "female",
    },
    {
        name: "rohit",
        phoneNumber: "9821345678",
        categery: "friends",
        commentArea: "Rohit is always punctual",
        gender: "male",
    },
    {
        name: "aisha",
        phoneNumber: "8901234567",
        categery: "work",
        commentArea: "Aisha is a great team leader",
        gender: "female",
    },
    {
        name: "vikram",
        phoneNumber: "9753145687",
        categery: "school",
        commentArea: "Vikram was top of his class",
        gender: "male",
    },
    {
        name: "neha",
        phoneNumber: "8801234567",
        categery: "family",
        commentArea: "Neha is an amazing cook",
        gender: "female",
    },
    {
        name: "rahul",
        phoneNumber: "9123456789",
        categery: "college",
        commentArea: "Rahul loves to play cricket",
        gender: "male",
    },
    {
        name: "sara",
        phoneNumber: "9987654321",
        categery: "friends",
        commentArea: "Sara is very creative",
        gender: "female",
    },
    {
        name: "manish",
        phoneNumber: "9812345678",
        categery: "work",
        commentArea: "Manish is a hard worker",
        gender: "male",
    },
    {
        name: "richa",
        phoneNumber: "9876543210",
        categery: "college",
        commentArea: "Richa is an excellent designer",
        gender: "female",
    },
    {
        name: "priya",
        phoneNumber: "9898765432",
        categery: "school",
        commentArea: "Priya loves to read books",
        gender: "female",
    },
    {
        name: "karan",
        phoneNumber: "9123456780",
        categery: "family",
        commentArea: "Karan is a great musician",
        gender: "male",
    },
    {
        name: "alka",
        phoneNumber: "9012345678",
        categery: "friends",
        commentArea: "Alka enjoys traveling",
        gender: "female",
    },
    {
        name: "saurabh",
        phoneNumber: "9812345671",
        categery: "school",
        commentArea: "Saurabh is a chess champion",
        gender: "male",
    },
    {
        name: "jaya",
        phoneNumber: "8809765432",
        categery: "work",
        commentArea: "Jaya is great with clients",
        gender: "female",
    },
    {
        name: "pankaj",
        phoneNumber: "9987654322",
        categery: "friends",
        commentArea: "Pankaj loves photography",
        gender: "male",
    },
    {
        name: "seema",
        phoneNumber: "9123456781",
        categery: "family",
        commentArea: "Seema is an excellent teacher",
        gender: "female",
    },
    {
        name: "deepak",
        phoneNumber: "9876543211",
        categery: "college",
        commentArea: "Deepak is a coding enthusiast",
        gender: "male",
    },
    {
        name: "megha",
        phoneNumber: "9123456782",
        categery: "work",
        commentArea: "Megha is very organized",
        gender: "female",
    },
    {
        name: "vishal",
        phoneNumber: "9801234567",
        categery: "school",
        commentArea: "Vishal loves solving puzzles",
        gender: "male",
    },
    {
        name: "kavita",
        phoneNumber: "8901234568",
        categery: "friends",
        commentArea: "Kavita is a nature lover",
        gender: "female",
    },
    {
        name: "amit",
        phoneNumber: "9876543212",
        categery: "college",
        commentArea: "Amit is a talented artist",
        gender: "male",
    },
    {
        name: "pooja",
        phoneNumber: "9123456783",
        categery: "family",
        commentArea: "Pooja is an excellent writer",
        gender: "female",
    }
];
let check;
let arryindex;
// Function to set localStorage
function setLocal() {
    localStorage.setItem("arrayContactData", JSON.stringify(contactArray));
    let myLocalData = JSON.parse(localStorage.getItem("arrayContactData"));
    console.log(myLocalData);
    printList(myLocalData);
}

// Prevent form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

// Get selected gender
function getSelectedGender() {
    let selectedGender;
    genderElements.forEach((each) => {
        if (each.checked) {
            selectedGender = each.value;
        }
    });
    return selectedGender;
}

// Add contact to contactArray and localStorage




// Create contact elements
function makeElement(elementName, elementId, listValue = null) {
    let createdElement = document.createElement(elementName);
    createdElement.id = elementId;
    createdElement.innerText = listValue;
    return createdElement;
}

// Add contact list to DOM
function addContactList(name, phoneNumber, categery, comment, gender) {
    let contactDetails = makeElement("div", "contact-details");
    let contactImg = makeElement("div", "contact-img");
    let contactInfo = makeElement("div", "contact-info");
    let contactName = makeElement("span", "contact-name", name);
    let contactNumber = makeElement("span", "contact-number", phoneNumber);
    let catageryInfo = makeElement("div", "catagery-info");
    let contactCatagery = makeElement("span", "contact-categery", categery);
    let contactGender = makeElement("span", "contact-Gender", gender);
    let control = makeElement("div", "control");
    let view = makeElement("div","view","View")
    let edit = makeElement("div", "edit", "Edit");
    let deleteContact = makeElement("div", "delete", "Delete");

    if (gender == "female") {
        contactImg.style.backgroundColor = "pink";
    }

    contactInfo.appendChild(contactName);
    contactInfo.appendChild(contactNumber);
    contactInfo.appendChild(catageryInfo);
    catageryInfo.appendChild(contactCatagery);
    catageryInfo.appendChild(contactGender);
    control.appendChild(view)
    control.appendChild(edit);
    control.appendChild(deleteContact);
    contactDetails.appendChild(contactImg);
    contactDetails.appendChild(contactInfo);
    contactDetails.appendChild(control);
    contactList.appendChild(contactDetails);
}

// Remove previous contact list
function removePrelist() {
    let allContactList = document.querySelectorAll("#contact-details");
    allContactList.forEach((e) => {
        e.remove();
    });
}

// Print the contact list
function printList(mylist = contactArray) {
    removePrelist();
    mylist.forEach(function(eachContact) {
        addContactList(
            eachContact.name,
            eachContact.phoneNumber,
            eachContact.categery,
            eachContact.commentArea,
            eachContact.gender
        );
    });
}

// Filter search
search.addEventListener("input", (event) => {
    let compair = search.value.toLowerCase();
    let filteredArray = contactArray.filter((e) => {
        return e.name.includes(compair) || e.phoneNumber.includes(compair);
    });

    if (filteredArray.length != 0) {
        contactList.textContent = "";
        printList(filteredArray);
    } else {
        contactList.textContent = "No Data found. Check again.";
    }
});

// Print all data
function printAlldata() {
    printList();
}

// On window load
window.addEventListener("load", function(e) {
    printAlldata();
});

// Pop-up control
function openPopUp(){
    popUp.style.display = "flex";
}
function closePopUp(){
    popUp.style.display = "none";
}

addUser.addEventListener("click", ()=>{
    openPopUp()
})

cancle.addEventListener("click", (e) => {
    submitBtn.style.display = ""
    submitBtn.textContent = "Add To Contact"
    getInput.value = null
    getNumber.value = null
    getTextArea.value = null
    selectElement.value = null
    closePopUp()
});


//delete function
function deleteContact(index){
    contactArray.splice(index,1)
    setLocal()
    printAlldata()
}

function selectElementSelected(child,catagery){
    Array.from(child).forEach((each)=>{
        console.log(catagery)
    })
    
}

function editCheckInputs(name, phoneNumber,comment){
    if(name =="" || phoneNumber.length != 10 || comment == "" ){
        alert("Fill All The Input Again")
        return editContact()
        
    }
}
function addCheckInputs(name, phoneNumber, comment) {
    if (name === "" || phoneNumber.length !== 10 || comment === "") {
        alert("Please fill in all the input fields correctly.");
        return false; // Return false to indicate validation failed
    }
    return true; // Return true if validation passed
}


function editToContact(){
    console.log(arryindex)
    editCheckInputs(getInput.value.toLowerCase().trim(),getNumber.value.trim(),getTextArea.value.toLowerCase().trim())
    contactArray[arryindex] = {
        name: getInput.value.toLowerCase().trim(),
        // name: checkName(getInput.value),
        phoneNumber: getNumber.value.trim(),
        categery: selectElement.value,
        commentArea: getTextArea.value.toLowerCase().trim(),
        gender: getSelectedGender(),
    }   

    submitBtn.textContent = "Add to Contact"
}

function addToContact() {
    if (addCheckInputs(getInput.value.toLowerCase().trim(), getNumber.value.trim(), getTextArea.value.toLowerCase().trim())) {
        contactArray.unshift({
            name: getInput.value.toLowerCase().trim(),
            phoneNumber: getNumber.value.trim(),
            categery: selectElement.value,
            commentArea: getTextArea.value.toLowerCase().trim(),
            gender: getSelectedGender(),
        });
    }
}

let addContactArray = (index = null)=>{

        openPopUp()
        check = event.target.textContent == "Edit"
        console.log(check,contactArray[index])
        
        if(check == true){
            arryindex = Number(index)
            
        }
    }

let saveData = (e)=>{
        console.log(e.target.textContent == "Add Edit Contact")

        if(e.target.textContent == "Add Edit Contact"){
            editToContact()
        }else{
            addToContact()
        }
        closePopUp()
        setLocal();
        printAlldata();
    
        getInput.value = null
        getNumber.value = null
        getTextArea.value = null
        selectElement.value = null
    
    }


    function editContactArray(listData,index){
        getInput.value = listData.name
        getNumber.value = listData.phoneNumber;
        getTextArea.value = listData.commentArea;
        selectElement.value = listData.categery 
        genderElements.forEach((radio) => {
            if (radio.value === listData.gender) {
                radio.checked = true;
            }
        });
        submitBtn.textContent = "Add Edit Contact"
        addContactArray(index)
    }
    
    function editContact(index){
        console.log(contactArray[index])
        editContactArray(contactArray[index],index)
    }
    
    function viewContactArray(listData,index){
        getInput.value = listData.name
        getNumber.value = listData.phoneNumber;
        getTextArea.value = listData.commentArea;
        selectElement.value = listData.categery 
        genderElements.forEach((radio) => {
            if (radio.value === listData.gender) {
                radio.checked = true;
            }
        });
        submitBtn.style.display = "none"
        openPopUp()
        // addContactArray(index)
    }
    function viewOnly(index){
        console.log(contactArray[index])
        viewContactArray(contactArray[index],index)
    }
    
    
    
    contactList.addEventListener("click",(event)=>{
        if(event.target.id == "delete"){
    
            let contactDetails = event.target.closest("#contact-details");
            let contactIndex = Array.from(contactList.children).indexOf(contactDetails);
            // console.log(contactDetails)
            // console.log(contactList.children)
            deleteContact(contactIndex)
    
        }
    
        if(event.target.id == "edit"){
            let contactDetails = event.target.closest("#contact-details");
            let contactIndex = Array.from(contactList.children).indexOf(contactDetails);
            editContact(contactIndex)
        }

        if(event.target.id == "view"){
            let contactDetails = event.target.closest("#contact-details");
            let contactIndex = Array.from(contactList.children).indexOf(contactDetails);
            // editContact(contactIndex)
            viewOnly(contactIndex);
        }
    })

submitBtn.addEventListener("click", saveData)

