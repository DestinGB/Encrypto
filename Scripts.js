const uploadTab = document.getElementById('uploadTab')
const uploadTab2 = document.getElementById('uploadtab2')
const fileInput = document.getElementById('fileInput')

uploadTab.addEventListener('click', () => {
    fileInput.click();
})


uploadTab2.addEventListener('click', () => {
    fileInput.click();
})

/* Buttons */
const container1 = document.querySelector('.container')
const container2 = document.querySelector('.container2')
const btn1 = document.querySelector('.EB')
const btn2 = document.querySelector('.DB')

const btn3 = document.querySelector('.EB2')
const btn4 = document.querySelector('.DB2')

/*Encryption Display */
function showContainer1 (){
    container1.style.display = 'block'
    container2.style.display = 'none'
}

function showContainer2 (){
    container2.style.display = 'block'
    container1.style.display = 'none'
}

btn1.addEventListener('click', () => {
    showContainer1();
})

btn3.addEventListener('click', () => {
    showContainer1();
})

btn2.addEventListener('click', () => {
    showContainer2()
})

btn4.addEventListener('click', () => {
    showContainer2()
})


/* Error Handling Logic Bitch */

const encryptButton = document.getElementById('EncryptFileBtn');
const decryptButton = document.getElementById('DecryptFileBtn');
const note = document.getElementById('note');


function showNote(msg) {
            note.style.display = 'block';
            note.textContent = msg;
            setTimeout(() => {
                note.style.display = 'none'
            }, 3000)

   
}



encryptButton.addEventListener('click', () => {
    let file = fileInput.files[0];
    let password = document.getElementById('password');

    if(!file){
        showNote('Error🚫! Add file')
        return
    } else if(!password.value.trim()){
        showNote('Error🚫!Enter Password')
    }
})  

decryptButton.addEventListener('click', () => {
    let file = fileInput.files[0];
    let password = document.getElementById('password');

    if(!file){
        showNote('Error🚫! Add file')
        return
    } else if(!password){
        showNote('Error🚫!Enter Password')
    }
}) 

const encryptFileInfo = document.getElementById('encrypt-file-info')
const fileName = document.querySelector('.file-name')
const fileSize = document.querySelector('.file-size')


fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];

    if(file){
        encryptFileInfo.style.display = 'block'
        fileName.textContent = `📄File Name: ${file.name}`;
        fileSize.textContent = `📦File Size: ${Math.floor(file.size/1024)}KB`;
    }
})

const colors = ['#008181', '#1db954', '#ff7200', '#1283cf', '#333']

let colorLoop;
let index = 0

function altColors(){
      colorLoop = setInterval(() => {
        document.body.style.backgroundColor = colors[index]
        index = (index + 1) % colors.length
    }, 2000)
}

window.addEventListener('load', ()=>{
    altColors()
})
