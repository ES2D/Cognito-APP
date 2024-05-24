import React, { useState } from 'react';
import { CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import { userPool } from '../services/awsConfig';

const Formulario: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Por favor ingrese un correo electrónico válido');
      return;
    }

    try {
      const attributeList: CognitoUserAttribute[] = [];
      attributeList.push(new CognitoUserAttribute({ Name: 'email', Value: email }));

      await new Promise<void>((resolve, reject) => {
        userPool.signUp(email, password, attributeList, [], (err, result) => {
          if (err) {
            reject(err);
            return;
          }
          const user = result?.user as CognitoUser;
          setSuccessMessage('Usuario registrado con éxito. Por favor, verifica tu correo electrónico.');
          console.log('Usuario registrado:', user.getUsername());
          resolve();
        });
      });
    } catch (error) {
      setErrorMessage((error as Error).message || 'Hubo un error al registrar el usuario.');
    }
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Registrarse</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <button type="submit" className="btn btn-primary w-100">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
