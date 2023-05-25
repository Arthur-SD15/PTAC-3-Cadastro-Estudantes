import styles from './../../public/list.css'

export default async function Home() {
  const req = await fetch("http://localhost:3003/alunos",{
    cache:"no-cache"
  });
  const alunos = await req.json();

  return (
    <main>
      <div className="cards-container">
        {alunos.map(aluno => (
          <div className='card' key={aluno.id}>
            <div className="card-content">
              <div className="person-details">
                <img className="person-photo" src={aluno.photo} alt={aluno.nome} />
                <div className="person-info">
                  <h3>{aluno.nome}</h3>
                  <p>{aluno.num_inscricao}</p>
                  <p>{aluno.curso}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='cadastrar'><a href="/cadastro">Voltar</a></button>
    </main>
  )
}