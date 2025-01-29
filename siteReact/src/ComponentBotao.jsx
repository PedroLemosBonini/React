import React from "react";

function ComponentCriar(){
    function click(){
        alert("Você clicou no botão de criar");
      }
    
      return(
        <button style={{padding: '10px 20px', fontSize: '16px', margin: '5px', cursor: 'pointer', backgroundColor: 'green'}} onClick={()=>click()}>Criar</button>
      )
}

export default ComponentCriar