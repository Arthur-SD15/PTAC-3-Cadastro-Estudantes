'use client'
import { useState } from 'react';
import styles from './../../../public/page.css'

export default function Cadastro() {
    const [nome, setNome] = useState();
    const [num_inscricao, setInscricao] = useState();
    const [curso, setCurso] = useState();
    const [photo, setPhoto] = useState();

    const cadastrar = (e) => {
        e.preventDefault() // Impede a ação padrão de um evento e fornecer um comportamento personalizado em seu lugar.
        const aluno = {
            nome, 
            num_inscricao,
            curso,
            photo
        }
        
        const alunoJson = JSON.stringify(aluno); //Transforma de objeto para string
        fetch("http://localhost:3003/alunos", { //Link da api
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson //O corpo vai ser o aluno transformado em JSON
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div>
            <div className='section'>
            <h2>Estudante/Cadastrar-se</h2>
                <form action='' onSubmit={cadastrar}>
                    <label htmlFor='nome'>Nome:</label>
                    <input placeholder='Informe seu nome' name='nome' type='text' required onChange={e => setNome(e.target.value)}></input>
                    <label htmlFor='curso'>Curso:</label>
                    <input placeholder='Informe seu curso' name='curso' type='text' required onChange={e => setCurso(e.target.value)}></input>
                    <label htmlFor='num_inscricao'>Número de Inscrição:</label>
                    <input placeholder='Informe seu numero' name='num_inscricao' required type='number' onChange={e => setInscricao(e.target.value)}></input>
                    <label htmlFor='photo'>Foto de identificação:</label>
                    <input placeholder='Endereço da imagem' name='photo' type='text' onChange={e => setPhoto(e.target.value)}></input>
                    <input type="submit" value="Enviar" />
                </form>
                <button className='listar'><a href="/">Listar Estudantes</a></button>
            </div>
        </div>
    );
}