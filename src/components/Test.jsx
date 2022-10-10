import React from "react";

export function Test1(){
    return(<h3>{
        fetch("https://localhost/loginHugo/model/formulario.php",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "email":"raas835@gmail.com",
                "password":"12345"
            })
            .then(x => x.json())
            .then(x => console.log(x))

        })}</h3>
    );
}
