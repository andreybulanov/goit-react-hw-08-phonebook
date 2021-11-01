import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { registration } from '../Redux/Auth/auth-operation';

export default function RegisterView() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    const onSubmit = (name, email, password) => dispatch(registration({ name, email, password }));

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name': setName(value);
                break;
            case 'email': setEmail(value);
                break;
            case 'password': setPassword(value);
                break;
            default: return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, email, password);
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={name}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Label>Почта</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="email"
                name="email"
                required
                value={email}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Label>Пароль</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="password"
                name="password"
                required
                value={password}
                onChange={handleChange}
                pattern=".{8,}"
                title="Пароль должен состоять минимум из 8 цифр"
              />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Button type="submit">Зарегистрироваться</Button>
          </Col>
        </Row>
      </Form>
    </Container>
    )
};
