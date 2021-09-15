import React from 'react'
import styled from 'styled-components';

const BlocoMensagem = styled.div`
  display: flex;
`
const InputUsuario = styled.input`
  width: 100px;
  padding: 5px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid red;
`
const InputMensagem = styled.input`
  flex: 1;
  padding: 11px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid red;
`
const ButtonEnviar = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`

export class Mensagens extends React.Component{
  constructor(props) {

    super(props)
    this.state = {
      valorNome: "",
      valorTexto: ""
    }
  }
 

      onChangeNome = (event) => {
        this.setState({valorNome: event.target.value})
      }
    
      
      onChangeTexto = (event) => {
        this.setState({valorTexto: event.target.value})
      }

      onSendMensagem = () => {
        const mensagemTexto = {
          nome: this.state.valorNome,
          texto: this.state.valorTexto
        }
        this.props.addMensagem(mensagemTexto)
        this.setState({valorTexto: ""})

      }
    
      render () {
        return (
          <BlocoMensagem>
            <InputUsuario type="text" placeholder={"Nome"} onChange={this.onChangeNome} value={this.state.valorNome} />
            <InputMensagem type="text" placeholder={"Mensagem"} onChange={this.onChangeTexto} value={this.state.valorTexto} />
            <ButtonEnviar onClick={this.onSendMensagem}>Enviar</ButtonEnviar>
          </BlocoMensagem>
        );
      }
}

