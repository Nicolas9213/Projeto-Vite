import './Formulario.css';
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os seus dados para compra</h2>
                <CampoTexto label='Nome' placeholder='Digite seu nome' />
                <CampoTexto label='Sobrenome' placeholder='Digite seu nome' />
            </form>
        </section>
    )
}

export default Formulario;