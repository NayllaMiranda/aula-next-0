import Link from 'next/link';

export default function Page() {
  return (
    <>
    <h1>Hello, Next.js!</h1>
    <h2>Titulo 2</h2>
    <h3> titulo 3</h3>
    
    <Link href={'/sobre'}>Sobre</Link>
    <Link href={'/cadusuario'}>Cadastro de usuário</Link>
    </>
  );
}
