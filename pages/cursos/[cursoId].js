export async function getStaticPaths(){
    return{
        paths: [
            {
                params: {
                    cursoId: '1',
                },
                params: {
                    cursoId: '2',
                }
            }
        ],
        fallback: false,
    }
}

export async function getStaticProps(contex){

    const id = contex.params.cursoId;

    const responde = await fetch('http://localhost:3000/api/cursos/' + id);

    const data = await responde.json();

    return {
        props:{
            curso: data,
        }
    }
}

export default function Cursos(props){

    const curso = props.curso;

    return <div>Meu Curso: {curso.nome} - {curso.id}</div>;

};