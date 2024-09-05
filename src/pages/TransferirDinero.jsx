import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const TransferirDinero = () => {
    const [numeroCuentaDestinatario, setNumeroCuentaDestinatario] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [banco, setBanco] = useState('');
    const [transferenciaExitosa, setTransferenciaExitosa] = useState(false);
    const [numeroCuentaUsuario, setNumeroCuentaUsuario] = useState(null);

    useEffect(() => {
        // Obtener el número de cuenta del usuario desde el token
        const token = localStorage.getItem('authToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            setNumeroCuentaUsuario(decodedToken.numero_de_cuenta); // Guardar el número de cuenta del usuario
        }
    }, []);

    const handleNumeroCuentaChange = (e) => {
        setNumeroCuentaDestinatario(e.target.value);
    };

    const handleCantidadChange = (e) => {
        setCantidad(e.target.value);
    };

    const handleBancoChange = (e) => {
        setBanco(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!numeroCuentaUsuario) {
            alert("No se pudo obtener el número de cuenta del usuario.");
            return;
        }

        try {
            // Hacer la solicitud GET al servidor para realizar la transferencia
            const response = await axios.get(`https://upc-codex.tech:5600/API/V2/Transferir/${numeroCuentaUsuario}/${cantidad}/${numeroCuentaDestinatario}`);
            
            // Manejar la respuesta del servidor
            if (response.status === 200) {
                setTransferenciaExitosa(true);
            } else {
                alert('Hubo un problema al procesar la transferencia.');
            }
        } catch (error) {
            console.error('Error al realizar la transferencia:', error);
            alert('Ocurrió un error durante la transferencia. Inténtalo de nuevo.');
        }
    };

    return (
        <main className="w-full min-h-screen bg-gray-100 flex flex-col ">
             <nav className="w-full flex justify-between gap-5 p-3 items-center text-black">
                <a href='/Dashboard' className="btn btn-ghost">&#88; Atras</a>
                <img className="size-6" src="./icon.png" alt="icono" />
            </nav>
            <div className="bg-white p-6 shadow-md rounded-lg w-11/12 mx-auto max-w-md mt-10">
                <h1 className="text-2xl font-bold mb-6 text-center">Transferir Dinero</h1>
                {!transferenciaExitosa ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="numeroCuenta" className="text-gray-700 mb-2">Número de cuenta del destinatario:</label>
                            <input
                                type="text"
                                id="numeroCuenta"
                                value={numeroCuentaDestinatario}
                                onChange={handleNumeroCuentaChange}
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Ingresa el número de cuenta"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="cantidad" className="text-gray-700 mb-2">Cantidad a transferir:</label>
                            <input
                                type="number"
                                id="cantidad"
                                value={cantidad}
                                onChange={handleCantidadChange}
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Ingresa la cantidad"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="banco" className="text-gray-700 mb-2">Banco del destinatario:</label>
                            <select
                                id="banco"
                                value={banco}
                                onChange={handleBancoChange}
                                className="border border-gray-300 p-2 rounded"
                                required
                            >
                                <option value="" disabled>Selecciona un banco</option>
                                <option value="bancolombia">Bancolombia</option>
                                <option value="davivienda">Davivienda</option>
                                <option value="bbva">BBVA</option>
                                <option value="colpatria">Colpatria</option>
                                <option value="bogota">Banco de Bogotá</option>
                            </select>
                        </div>

                        <button type="submit" className="bg-yellow-400 text-black py-2 rounded mt-4">Transferir</button>
                    </form>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800">Transferencia Exitosa</h2>
                        <p className="mt-4 text-lg">Has transferido <span className="font-bold">${cantidad}</span> a la cuenta <span className="font-bold">{numeroCuentaDestinatario}</span> en el banco <span className="font-bold">{banco}</span>.</p>
                        <button
                            className="bg-gray-700 text-white py-2 px-4 rounded mt-6"
                            onClick={() => setTransferenciaExitosa(false)}
                        >
                            Realizar otra transferencia
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default TransferirDinero;
