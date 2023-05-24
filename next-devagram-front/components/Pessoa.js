export default function Pessoa({idade, nome}) {
    return (
        <div className="pessoa">
            <b>Nome</b>: {nome}
            <br></br>
            <b>Idade</b> : {idade}
            <br></br>

            {idade >= 18 ? (
                <span>Maior de idade</span>                
    
            ) : (
                <span>Menor de idade</span>
            )}

            <br></br>
            <br></br>
        </div>
    );
}