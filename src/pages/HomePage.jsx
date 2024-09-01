import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'Usuario') {
            setUsuario(value);
        } else if (name === 'Password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', {
                username: usuario,
                password: password,
            });

            const { token } = response.data;
            
            // Almacenar el token en localStorage
            localStorage.setItem('authToken', token);
            
            // Redirigir a la ruta privada
            navigate('/dashboard');
        } catch (error) {
            console.error('Error al iniciar sesión', error);
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <>
            <main className=" w-full relative min-h-screen flex mx-auto flex-col px-4 bg-gray-200">
                <img className=" z-0 absolute bottom-14 rotate-6 -left-20" src="./t1.svg" />
                <div className="w-full h-full flex flex-col z-10">
                    <nav className="w-full flex justify-between gap-5 p-3 items-center text-black">
                        <p className="btn btn-ghost">&#88; Cerrar</p>
                        <img className="size-6" src="./icon.png" alt="icono" />
                        <button className=" disabled">Continuar &gt;</button>
                    </nav>
                    <div className="mt-10 flex flex-col justify-center items-center  text-center  gap-5 mx-auto">
                        <h1 className="text-3xl font-bold text-black">¡Hola!</h1>
                        <p className="text-lg text-black  font-light">
                            Si aún no has creado el usuario, Ingresa tu numero de documento de
                            identidad.
                        </p>

                        <form
                            id="login"
                            className="flex flex-col gap-5 mx-auto w-full items-center justify-center"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-row gap-1 bg-white px-5 py-5 w-full">
                                <div className="border-b-2 flex gap-1 w-full pb-1 mt-3">
                                    <svg className="size-12 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <input
                                        id="Usuario"
                                        name="Usuario"
                                        placeholder="Ingresa el usuario"
                                        type="text"
                                        value={usuario}
                                        onChange={handleInputChange}
                                        className="bg-inherit focus:outline-none pl-2 text-black w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-1 bg-white px-5 py-5 w-full">
                                <div className="border-b-2 flex gap-1 w-full pb-1 mt-3">
                                    <svg className="size-12 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                    <input
                                        id="Password"
                                        name="Password"
                                        placeholder="Ingresa la Contraseña"
                                        type="password"
                                        value={password}
                                        onChange={handleInputChange}
                                        className="bg-inherit focus:outline-none pl-1 text-black  w-full"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn w-full text-2xl font-bold btn-warning rounded-3xl">Continuar</button>
                        </form>
                        <a className="link text-black">¿No eres Cliente?</a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Homepage;
