import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Rodape from "./Rodape";


export default function TelaSessoes() {

    const { idFilme } = useParams();
    console.log(idFilme);




    const [sessoes, setSessoes] = useState([])
    



    const [URL, setURL] = useState('')
    const [title, setTitle] = useState('')






    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        promise.then((res) => {
            setSessoes(res.data);


            setURL(res.data.posterURL);
            setTitle(res.data.title);
        })
        promise.catch((erro) => console.log(erro.response.data))
    }, [])

  

    console.log(sessoes)

    return (
        <>
            <TituloSessoes>
                <p>Selecione o horário</p>
            </TituloSessoes>

            <ConteudoSessoes>
            


            </ ConteudoSessoes>


            <Rodape title={title} URL={URL} />
        </>
    )
}


const TituloSessoes = styled.div`
width: 375px;
height: 110px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
p{
    font-size: 24px;
    font-weight: 400;
    color: #293845;
}
`

const ConteudoSessoes = styled.div`
margin: 0 auto;
width: 375px;
height: 800px;
background-color: white;
`

const DiaSemana = styled.div`
h1{
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
}
`