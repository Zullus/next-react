export async function getServerSideProps(contex){

    const id = contex.query.cursoId;

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

    return <div>Meu Curso: {curso.id} - {curso.id}</div>;

};