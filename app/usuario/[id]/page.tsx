import Link from 'next/link';

export default function PerfilUsuario( {params}: {params: {id: string } }) {
    return (
        <>
            <h1>Perfil</h1>
            <p>Nome do usuario</p>
           

            <p><Link href={'/'}>Voltar</Link></p>
        </>
    );
}