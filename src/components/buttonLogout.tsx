
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { url } from "inspector";





const ButtonLogOut = () => {
    const handleButtonClick = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            open('/')
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <button  onClick={handleButtonClick}>Sair</button>
    )
}

export default ButtonLogOut