import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import '../Register/index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Form, FloatingLabel } from "react-bootstrap";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import TextInputWithFloatLabel from '../../components/TextInputWithFloatLabel';
import DButton from '../../components/Button';
import DAlert from '../../components/Alert';
import logo from '../../assets/icons/logo.png';
import ilustrations from '../../assets/images/ilustrations.png';

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    email: "",
    password: "",
    daftar_sebagai: "",
  });

  const [alert, setAlert] = React.useState({
    status: false,
    message: "",
    type: "",
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email) {
      setAlert({
        status: true,
        message: "Email harus diisi",
        type: "danger",
      });
      return;
    }
    if (!form.password) {
      setAlert({
        status: true,
        message: "Password harus diisi",
        type: "danger",
      });
      return;
    }
    if (!form.daftar_sebagai) {
      setAlert({
        status: true,
        message: "Pilih jenis masuk",
        type: "danger",
      });
      return;
    }

    setLoading(true);
    axios.post('/api/login', form)
      .then((response) => {
        setLoading(false);
        navigate("/home");
      })
      .catch((error) => {
        setLoading(false);
        setAlert({
          status: true,
          message: "Login gagal. Periksa kembali email dan password Anda",
          type: "danger",
        });
      });
  };

  return (
    <div className="h-100">
      <Row className="group g-0">
        <Col lg="6" className="d-flex align-items-center">
          <Card.Body>
            <div className="text-center mt-5">
              <Image src={logo} className="logo" alt="logo"></Image>
              <Card.Title className="mt-1 mb-2">Masuk</Card.Title>
              <Card.Text>Silahkan masuk untuk lanjut ke website kami</Card.Text>
            </div>
            <Form className="p-5">
              {alert.status && (
                <DAlert message={alert.message} type={alert.type} />
              )}
              <TextInputWithFloatLabel
                label="Email"
                name="email"
                value={form.email}
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <TextInputWithFloatLabel
                label="Password"
                name="password"
                value={form.password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <FloatingLabel
                size="sm"
                controlId="floatingSelect"
                label="Masuk Sebagai"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Floating label select"
                  name="daftar_sebagai"
                  value={form.daftar_sebagai}
                  onChange={handleChange}
                >
                  <option>Buka menu pilih ini</option>
                  <option value="Pemilik Lapangan ">Pemilik Lapangan</option>
                  <option value="Penyewa">Penyewa</option>
                </Form.Select>
              </FloatingLabel>
              <Row className="mb-4">
                <Col className="text-muted">
                  Belum punya akun? <a href="#!" className="anchor">Masuk</a>
                </Col>
                <Col className="d-flex justify-content-end">
                  <a href="#!" className="anchor">Lupa Password?</a>
                </Col>
              </Row>
              <ThemeProvider prefixes={{ btn: "btn-fill" }}>
                <DButton
                  loading={loading}
                  disabled={loading}
                  onClick={handleSubmit}
                  variant="primary"
                >
                  Masuk
                </DButton>
              </ThemeProvider>
              <hr className="my-4" />
              <ThemeProvider prefixes={{ btn: "btn-outline" }}>
                <DButton variant="primary">
                  <FcGoogle className="me-2 mb-1" />
                  Masuk dengan Google
                </DButton>
              </ThemeProvider>
            </Form>
          </Card.Body>
        </Col>

        <Col
          lg="6"
          className="d-flex justify-content-center align-items-center right"
        >
          <Image
            src={ilustrations}
            className="image-right d-none d-lg-block p-3"
            alt="logo-register"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
