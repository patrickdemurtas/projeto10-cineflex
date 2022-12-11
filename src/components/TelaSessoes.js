import styled from "styled-components"


export default function TelaSessoes() {
    return (
        <TituloSessoes>
            <p>Selecione o horário</p>
        </TituloSessoes>
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
