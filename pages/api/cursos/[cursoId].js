const MeusCuros = [
    {
        id: '1',
        nome: 'React'
    },
    {
        id: '2',
        nome: 'Next.js'
    }
]


export default function Cursos(request, response){
    const id = request.query.cursoId,
        curso = MeusCuros.find(MeusCuros => MeusCuros.id === id );

    if(curso){
        response.status(200).json(curso);
    }
    else{
        response.status(404).json({
            mensagem: 'Curso Não Encontrado'
        });
    }
}