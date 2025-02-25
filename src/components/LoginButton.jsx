import { useState } from 'react'
import '../Login.css'

export default function LoginButton({logar}){

    return (
        <div>
            <button onClick={logar} className='botaoEntrar'>Entrar</button>
        </div>
    )
}