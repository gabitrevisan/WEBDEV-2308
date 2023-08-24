import {} from 'react'
import Imagem from './assets/rachel.jpg'

function Cabecalho(){
    const aluno="Gabriela";
    const curso="Engenharia";

    return(
        <>
        <h1>Cabeçalho</h1>
            <img src={Imagem} alt = "Rachel Green" width="333px"/>
            <p>{aluno}</p>
            <p>{curso}</p>
        </>
    )
}
export default Cabecalho