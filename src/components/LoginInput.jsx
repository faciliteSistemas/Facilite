import '../Login.css'
import { useState } from 'react'

export default function LoginInput({input_text, senha}){

    const [mostrarSenha, setMostrarSenha] = useState(false)

    return (
        
        <div >

            <div>
                <p 
                    className='inputTxt'
                >{input_text}</p>

                <div className='inputContainer'>

                    <input placeholder={"Insira " +  input_text} className='login_input' type={senha && !mostrarSenha ? 'password' : 'text '}>
                    </input>
                    {senha ? 
                    <div onClick={()=>{
                        if (mostrarSenha == false){
                            setMostrarSenha(true)
                        }else{
                            setMostrarSenha(false)
                        }
                    }} className='olhoSenhaContainer'>
                        <img className='olhoSenhaImg' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNLjIgMTBhMTEgMTEgMCAwIDEgMTkuNiAwQTExIDExIDAgMCAxIC4yIDEwbTkuOCA0YTQgNCAwIDEgMCAwLThhNCA0IDAgMCAwIDAgOG0wLTJhMiAyIDAgMSAxIDAtNGEyIDIgMCAwIDEgMCA0Ii8+PC9zdmc+'></img>
                    </div>
                    : <br></br>}
                </div>

            </div>

        </div>
        
    )
}