const firebaseConfig = {
    apiKey: "AIzaSyDIu-Yy1CNo-74E63F1a_fcgamqf9MRAJQ",
    authDomain: "idosossobcuidado.firebaseapp.com",
    projectId: "idosossobcuidado",
    storageBucket: "idosossobcuidado.appspot.com",
    messagingSenderId: "746503595167",
    appId: "1:746503595167:web:eeb1290d9e17685d1f2eaa",
    measurementId: "G-24VWSY7K9J"
};

firebase.initializeApp(firebaseConfig);

var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;
var img = document.getElementById("img-firebase");
function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName

}

function uploadImage(){

    let storageRef = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);


    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal+"%";
        progress.style.width=percentVal+"%";
    },(error)=>{
        console.log("Erros is ", error);
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL",url);

            if(url != ""){
                img.setAttribute("src",url);    
            }
        })
           
    })
}
