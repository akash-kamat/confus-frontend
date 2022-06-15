import React from 'react'
import './AddConfession.css'
export default function AddConfession({setRoute,setN}) {
    function addConfession() {
        const title = document.getElementById("title").value
        const confession = document.getElementById("confession").value
        if(confession==""){
            alert("write some damn thing")
        }
        else{
            var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "title": title,
        "confession": confession
        });

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
setRoute("loading")
fetch("https://confusbackend.herokuapp.com/confess", requestOptions)
  .then(response => response.text())
  .then(result => {
    setN(oldArray => [...oldArray, "2"]);  
    setRoute("home")})
  .catch(error => console.log('error', error));    
        }
         
    }
    return (
        <div className='form-holder'>
            <div className='form-box'>
                <div className='title-box'>
                <h1 className='titleText'>Title</h1>
                <input id='title' className='title-input' type="text" name="title" placeholder='optional'/>
                </div>
                <div className='confession-box'>
                <h1 className='confessionTitle'>Confession</h1>
                <textarea id='confession' className='confession-input' rows="7"/>
                </div>
                <button onClick={addConfession} className='confess'>Submit</button>
            </div>
        </div>
    )
}
