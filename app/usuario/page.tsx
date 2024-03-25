import Link from 'next/link';

import usuarios from '../../src/usuario';

export default function ListaUsuarios() {
    return (
        <>
            <h1>Lista de usuários</h1>
          {/*  <p><Link href={'/usuarios/1'}>Usuário 1</Link></p>
            <p><Link href={'/usuarios/2'}>Usuário 2 </Link></p>
    <p><Link href={'/usuarios/3'}>Usuário 3 </Link></p>*/}

    {
        usuarios.map((usuario) => <p>Nome:{usuario.nome} </p>)
    }

            <p><Link href={'/'}>Voltar</Link></p>
        </>
    );
}