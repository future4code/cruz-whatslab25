import React from 'react';
import styled from 'styled-components';
import { Mensagens } from './components/Mensagens';
import './App.css';

const PapelDeParede = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #E5DDD6;
`

const BlocoTexto = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`
const SpanTexto = styled.span`
  font-weight: bold;
`

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      mensagens: []
    }
  }

  addMensagem = (mensagemTexto) => {
    this.setState({mensagens: [...this.state.mensagens, mensagemTexto]})
  }

  render(){
    return(
        <PapelDeParede>
          <BlocoTexto>
            {
              this.state.mensagens.map((mensagemTexto, index) => <p key={index}><SpanTexto>{mensagemTexto.nome}</SpanTexto>{': ' + mensagemTexto.texto}</p> )
            }
            </BlocoTexto>
            <Mensagens addMensagem={this.addMensagem} />
        </PapelDeParede>
    );
  }
}
export default App;
