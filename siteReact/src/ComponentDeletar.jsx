import React from "react";

function ComponentDeletar(){
    function click(){
        alert("Você clicou no botão de deletar")
    }

    return(
        <button style={{padding: '10px 20px', backgroundColor: 'red', fontSize: '16px', cursor: 'pointer'}}onClick={()=>click()}>Deletar</button>
    )
}
export default ComponentDeletar