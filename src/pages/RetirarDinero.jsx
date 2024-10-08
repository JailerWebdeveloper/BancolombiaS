import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const RetirarDinero = () => {
    const [medio, setMedio] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [montoRetirado, setMontoRetirado] = useState(null);
    const [cedula, setCedula] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Obtener la cédula del token
        const token = localStorage.getItem('authToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            setCedula(decodedToken.cedula); // Guardar la cédula desde el token
        }
    }, []);

    const handleMedioChange = (e) => {
        setMedio(e.target.value);
    };

    const handleCantidadChange = (e) => {
        setCantidad(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validar que la cantidad sea mayor que 0 y múltiplo de 10
        if (cantidad <= 0 || cantidad % 10 !== 0) {
            setErrorMessage('La cantidad debe ser un múltiplo de 10 y mayor que 0.');
            return;
        }

        if (!cedula) {
            alert("No se pudo obtener la cédula del usuario.");
            return;
        }

        try {
            // Hacer la solicitud GET al servidor con Axios
            const response = await axios.get(`https://upc-codex.tech:5600/API/V2/RetirarDinero/${cedula}/${cantidad}`);
            
            // Manejar la respuesta del servidor
            if (response.status === 200) {
                setMontoRetirado(response.data); // Guardar el monto retirado para mostrar en la pantalla
                setErrorMessage(''); // Limpiar mensaje de error si la solicitud es exitosa
            } else {
                alert('Hubo un problema al procesar el retiro.');
            }
        } catch (error) {
            console.error('Error al retirar dinero:', error);
            alert('Ocurrió un error durante el retiro. Inténtalo de nuevo.');
        }
    };

    return (
        <main className="w-full min-h-screen bg-gray-100 flex flex-col ">
            <nav className="w-full flex justify-between gap-5 p-3 items-center text-black">
                <a href='/Dashboard' className="btn btn-ghost">&#88; Atras</a>
                <img className="size-6" src="./icon.png" alt="icono" />
            </nav>
            <div className="bg-white p-6 shadow-md rounded-lg w-11/12 mx-auto max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Retirar Dinero</h1>
                {!montoRetirado ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="medio" className="text-gray-700 mb-2">Selecciona el medio:</label>
                            <select
                                id="medio"
                                value={medio}
                                onChange={handleMedioChange}
                                className="border border-gray-300 p-2 rounded"
                                required
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                <option value="banco">Cajero</option>
                                <option value="efectivo">Efectivo</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="cantidad" className="text-gray-700 mb-2">Cantidad a retirar:</label>
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

                        {/* Mostrar el mensaje de error si no se cumple la validación */}
                        {errorMessage && (
                            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                        )}

                        <button type="submit" className="bg-yellow-400 text-black py-2 rounded mt-4">Retirar</button>
                    </form>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800">{montoRetirado.message}</h2>
                        <p className="mt-4 text-lg">Has retirado: <span className="font-bold">${cantidad}</span></p>
                        <p className="mt-2">Saldo restante: <span className="font-bold">${montoRetirado.saldo}</span></p>

                        {/* Mostrar los billetes retirados */}
                        <h3 className="mt-4 text-lg font-semibold">Billetes retirados:</h3>
                        <ul className="mt-2">
                            {Object.keys(montoRetirado.contadorBilletes).map((denominacion) => (
                                montoRetirado.contadorBilletes[denominacion] > 0 && (
                                    <li key={denominacion} className="text-gray-700">
                                        {`${denominacion}: ${montoRetirado.contadorBilletes[denominacion]} billete(s)`}
                                    </li>
                                )
                            ))}
                        </ul>

                        <button
                            className="bg-gray-700 text-white py-2 px-4 rounded mt-6"
                            onClick={() => setMontoRetirado(null)}
                        >
                            Retirar más
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default RetirarDinero;
