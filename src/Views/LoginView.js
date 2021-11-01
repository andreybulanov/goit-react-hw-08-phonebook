import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { logIn } from '../Redux/Auth/auth-operation';

export default function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (email, password) => dispatch(logIn({ email, password }));

    const handleChange = e => {
        const { name, value } = e.target;
        name === 'email' ? setEmail(value) : setPassword(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Почта</Form.Label>
                            <Form.Control type="email" name="email" required value={email} onChange={handleChange} />
                       </Col>
                    </Row>

                    <Form.Label>Пароль</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control type="password" name="password" required value={password} onChange={handleChange} />
                       </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button type="sabmit">Вход</Button>
                       </Col>
                    </Row>
                </Form.Group>
            </Form>
        </Container>
    )
};
