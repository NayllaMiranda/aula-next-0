import Link from 'next/link';

import usuarios from '@/src/usuario';

export default function PerfilUsuario( {params}: {params: {id: string } }) {

    const Usuário = usuarios.filter((usu, index, Array) => usu.id === parseInt(params.id));
    return (
        <>
            <h1>Perfil</h1>
            <h1>
                <p>Nome: {Usuário[0].nome}</p>
                <p>Altura: {Usuário[0].altura}</p>
                <p>Ativo: {Usuário[0].ativo ? 'sim' : 'não'}</p>
            </h1>
           

            <p><Link href={'/'}>Voltar</Link></p>
        </>
    );
}