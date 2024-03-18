import Link from 'next/link';

export default function ListaUsuarios() {
    return (
        <>
            <h1>Lista de usuários</h1>
            <p>Usuário 1</p>
            <p>Usuário 2</p>
            <p>Usuário 3</p>

            <p><Link href={'/'}>Voltar</Link></p>
        </>
    );
}