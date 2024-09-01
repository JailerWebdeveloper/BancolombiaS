import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [formData, setFormData] = useState({
        cedula: '',
        nombre: '',
        apellido: '',
        usuario: '',
        contrasena: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/register', formData);
            const { token } = response.data;
            
            // Almacenar el token en localStorage
            localStorage.setItem('authToken', token);
            
            // Redirigir a la ruta privada
            navigate('/dashboard');
        } catch (error) {
            console.error('Error al registrar', error);
            alert('Hubo un problema con el registro. Por favor, intenta de nuevo.');
        }
    };

    return (
        <>
            <main className=" w-full relative min-h-screen flex mx-auto flex-col px-4 bg-gray-200">
                <img className=" z-0 absolute bottom-14 rotate-6 -left-20" src="./t1.svg" />
                <div className="w-full h-full flex flex-col z-10">
                    <nav className="w-full flex justify-between gap-5 p-3 items-center text-black">
                        <a href='/' className="btn btn-ghost">&#88; Cerrar</a>
                        <img className="size-6" src="./icon.png" alt="icono" />
                        <button className=" disabled">Continuar &gt;</button>
                    </nav>
                    <div className="mt-10 flex flex-col justify-center items-center text-center gap-5 mx-auto">
                        <h1 className="text-3xl font-bold text-black">Registro</h1>
                        <p className="text-lg text-black font-light">
                            Completa los siguientes campos para crear tu cuenta.
                        </p>

                        <form
                            id="register"
                            className="flex flex-col gap-5 mx-auto w-full items-center justify-center"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-row gap-1 bg-white px-5 py-5 w-full">
                                <div className="border-b-2 flex gap-1 w-full pb-1 mt-3">
                                    <input
                                        id="cedula"
                                        name="cedula"
                                        placeholder="Cédula"
                                        type="text"
                                        value={formData.cedula}
                                        onChange={handleInputChange}
                                        className="bg-inherit focus:outline-none pl-2 text-black w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row gap-1 bg-white px-5 py-5 w-full">
                                <div className="border-b-2 flex gap-1 w-full pb-1 mt-3">
                                    <input
                                        id="nombre"
                                        name="nombre"
                                        placeholder="Nombre"
                                        type="text"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        className="bg-inherit focus:outline-none pl-2 text-black w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row gap-1 bg-white px-5 py-5 w-full">
                                <div className="border-b-2 flex gap-1 w-full pb-1 mt-3">
                                    <input
                                        id="apellido"
                                        name="apellido"
                                        placeholder="Apellido"
                                        type="text"
                                        value={formData.apellido}
                                        onChange={handleInputChange}
                                        className="bg-inherit focus:outline-none pl-2 text-black w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row gap-1 bg-white px-5 py-5 w-full">
                                <div className="border-b-2 flex gap-1 w-full pb-1 mt-3">
                                    <input
                                        id="usuario"
                                        name="usuario"
                                        placeholder="Usuario"
                                        type="text"
                                        value={formData.usuario}
                                        onChange={handleInputChange}
                                        className="bg-inherit focus:outline-none pl-2 text-black w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row gap-1 bg-white px-5 py-5 w-full">
                                <div className="border-b-2 flex gap-1 w-full pb-1 mt-3">
                                    <input
                                        id="contrasena"
                                        name="contrasena"
                                        placeholder="Contraseña"
                                        type="password"
                                        value={formData.contrasena}
                                        onChange={handleInputChange}
                                        className="bg-inherit focus:outline-none pl-2 text-black w-full"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn w-full text-2xl font-bold btn-warning rounded-3xl">Registrarse</button>
                        </form>
                        <a className="link text-black">¿Ya tienes cuenta? Inicia sesión</a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Register;
