import styled from "styled-components"


export default function TelaAssentos(){
    return (
        <TituloAssentos>
            <p>Selecione o(s) assento(s)</p>
        </TituloAssentos>
    )
}

const TituloAssentos = styled.div`
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