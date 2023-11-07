import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormCadastro() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Digite o Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <br/>
      <FloatingLabel controlId="floatingPassword" label="Descrição">
        <Form.Control type="text" placeholder="Text" />
      </FloatingLabel>
      <br/>
      <FloatingLabel controlId="floatingPassword" label="Cor">
        <Form.Control type="text" placeholder="Text" />
      </FloatingLabel>
      <br/>
      <FloatingLabel controlId="floatingPassword" label="Data de Lapidação">
        <Form.Control type="text" placeholder="Text" />
      </FloatingLabel>
      <br/>
      <FloatingLabel controlId="floatingPassword" label="Quantidade Estoque">
        <Form.Control type="text" placeholder="Text" />
      </FloatingLabel>

      
    </>
  );
}

export default FormCadastro;