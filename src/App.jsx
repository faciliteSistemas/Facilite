import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Login.css'
import LoginInput from './components/LoginInput'
import LoginButton from './components/LoginButton'

function App() {

  const [estado, setEstado] = useState("deslogado")
  //login ou logado

  const logar = () => {
    setEstado("logado")
  }
  

  if (estado == "deslogado"){
    return (
      <div>
        <div className='login_background' >
          <img 
              className='imagem_fundo' 
              src='https://moladvogados.com/wp-content/uploads/2017/09/Entenda-o-que-%C3%A9-e-como-funciona-a-recupera%C3%A7%C3%A3o-judicial-de-empresas.jpg'
          ></img>

          <div className="loginFormContainer">

            <div className="faciliteLogoContainer">
              <img className='facilite_imagem' alt='logo facilite' src='../src/assets/FaciliteLogo-no-background.png' ></img>   
            </div>

            <LoginInput input_text={"Login"} senha={false}></LoginInput>
            <br></br>
            <LoginInput input_text={"Senha"} senha={true}></LoginInput>
            <br></br>
            <div>
              <LoginButton logar={logar}></LoginButton>
            </div>

            
            
          </div>

          <div className="suporteContainer">

          </div>

        </div>
      </div>
    )
  }else if(estado == "logado"){
    return (
      <div>
        
        <header>
        
          <div className="leftSide">

            <div className="logoPrincipalContainer">
              <img className='imagemPrincipal' src='../src/assets/FaciliteLogo-no-background.png'></img>
            </div>
          </div>
          <div className="rightSide">
              .
          </div>

        </header>


        <div className="principal">


          <div onClick={()=>{
            setEstado("deslogado")
          }
          } className="botaoVoltar">
              <img className='voltarImg' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjZmFmZjAyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0yLjg3IDcuNzVsMS45NyAxLjk3YS43NS43NSAwIDEgMS0xLjA2IDEuMDZMLjUzIDcuNTNMMCA3bC41My0uNTNsMy4yNS0zLjI1YS43NS43NSAwIDAgMSAxLjA2IDEuMDZMMi44NyA2LjI1aDkuODhhMy4yNSAzLjI1IDAgMCAxIDAgNi41aC0yYS43NS43NSAwIDAgMSAwLTEuNWgyYTEuNzUgMS43NSAwIDEgMCAwLTMuNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=='></img>
          </div>
        </div>

      </div>
    )
  }

  
}

export default App
