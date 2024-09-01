import React, { useState } from 'react';

const RetirarDinero = () => {
    const [medio, setMedio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [montoRetirado, setMontoRetirado] = useState(null);

    const handleMedioChange = (e) => {
        setMedio(e.target.value);
    };

    const handleCantidadChange = (e) => {
        setCantidad(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMontoRetirado(cantidad);
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

                        <button type="submit" className="bg-yellow-400 text-black py-2 rounded mt-4">Retirar</button>
                    </form>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800">Retiro Exitoso</h2>
                        <p className="mt-4 text-lg">Has retirado: <span className="font-bold">${montoRetirado}</span></p>
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
