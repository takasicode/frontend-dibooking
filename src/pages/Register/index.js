import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Form, FloatingLabel } from "react-bootstrap";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import './index.css';
import TextInputWithFloatLabel from '../../components/TextInputWithFloatLabel';
import DButton from '../../components/Button';
import DAlert from '../../components/Alert';
import logo from '../../assets/icons/logo.png';
import ilustrations from '../../assets/images/ilustrations.png';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    nama: '',
    nomor_ponsel: '',
    email: '',
    password: '',
    konfirmasi_password: '',
    daftar_sebagai: ''
  });

  const [alert, setAlert] = React.useState({
    status: false,
    message: '',
    type: ''
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi form di sini
    const isValid = validateForm();
    if (isValid) {
      // Jika form valid, lakukan proses submit
      setLoading(true);
      // Permintaan HTTP menggunakan axios
      axios.post('/api/register', form)
        .then((response) => {
          setLoading(false);
          // Navigasi ke halaman lain setelah berhasil mendaftar
          navigate('/home');
        })
        .catch((error) => {
          setLoading(false);
          // Handle Server Internal Error
          setAlert({
            status: true,
            message: 'Server Internal Error.',
            type: 'danger'
          });
        });
    }
  };

  const validateForm = () => {
    // Validasi form di sini
    // Cek apakah semua field telah diisi dengan benar
    if (
      form.nama.trim() === '' ||
      form.nomor_ponsel.trim() === '' ||
      form.email.trim() === '' ||
      form.password.trim() === '' ||
      form.konfirmasi_password.trim() === '' ||
      form.daftar_sebagai.trim() === ''
    ) {
      setAlert({
        status: true,
        message: 'Harap isi semua field.',
        type: 'danger'
      });
      return false;
    }
    // Cek apakah email valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setAlert({
        status: true,
        message: 'Harap masukkan alamat Email yang valid.',
        type: 'danger'
      });
      return false;
    }
    // Cek apakah password dan konfirmasi password sama
    if (form.password !== form.konfirmasi_password) {
      setAlert({
        status: true,
        message: 'Password dan Konfirmasi Password harus sama.',
        type: 'danger'
      });
      return false;
    }
    // Semua validasi berhasil, form valid
    return true;
  };
  return (
    <div className="h-100">
      <Row className="w-100 g-0">
        <Col lg="6" className="d-flex align-items-center">
          <Card.Body>
            <div className="text-center mt-5">
              <Image src={logo} className="logo" alt="logo"></Image>
              <Card.Title className="mt-1 mb-2">Daftar</Card.Title>
              <Card.Text>Silahkan daftar akun terlebih dahulu</Card.Text>
            </div>
            <Form className="p-5">
              {alert.status && <DAlert message={alert.message} type={alert.type} />}
              <TextInputWithFloatLabel
                label="Nama Lengkap"
                name='nama'
                value={form.nama}
                type='text'
                placeholder='Jhon Wick'
                onChange={handleChange}
              />
              <TextInputWithFloatLabel
                label="Nomor Ponsel"
                name='nomor_ponsel'
                value={form.nomor_ponsel}
                type='number'
                placeholder='081234567890'
                onChange={handleChange}
              />
              <TextInputWithFloatLabel
                label="Email"
                name='email'
                value={form.email}
                type='email'
                placeholder='name@example.com'
                onChange={handleChange}
              />
              <TextInputWithFloatLabel
                label="Password"
                name='password'
                value={form.password}
                type='password'
                placeholder='Password'
                onChange={handleChange}
              />
              <TextInputWithFloatLabel
                label="Konfirmasi Password"
                name='konfirmasi_password'
                value={form.konfirmasi_password}
                type='password'
                placeholder='Password Confirmation'
                onChange={handleChange}
              />
              <FloatingLabel size="sm" controlId="floatingSelect" label="Daftar Sebagai" className="mb-3">
                <Form.Select aria-label="Floating label select" name='daftar_sebagai' value={form.daftar_sebagai} onChange={handleChange}>
                  <option >Buka menu pilih ini</option>
                  <option value="Pemilik Lapangan ">Pemilik Lapangan</option>
                  <option value="Penyewa">Penyewa</option>
                </Form.Select>
              </FloatingLabel>
              <div className="text-muted mb-4">
                Sudah punya akun? <a href="#!" className="anchor">Masuk</a>
              </div>
              <ThemeProvider prefixes={{ btn: 'btn-fill' }}>
                <DButton loading={loading} disabled={loading} onClick={handleSubmit} variant="primary">Daftar</DButton>
              </ThemeProvider>
              <hr className="my-4" />
              <ThemeProvider prefixes={{ btn: 'btn-outline' }}>
                <DButton variant="primary"><FcGoogle className="me-2 mb-1" />Daftar dengan Google</DButton>
              </ThemeProvider>
            </Form>
          </Card.Body>
        </Col>

        <Col lg="6" className="d-flex justify-content-center align-items-center right">
          <Image src={ilustrations} className="image-right d-none d-lg-block p-3" alt="logo-register" />
        </Col>
      </Row>
    </div>
  );
}

export default Register;