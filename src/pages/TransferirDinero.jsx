import React, { useState } from 'react';

const TransferirDinero = () => {
    const [cedula, setCedula] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [banco, setBanco] = useState('');
    const [transferenciaExitosa, setTransferenciaExitosa] = useState(false);

    const handleCedulaChange = (e) => {
        setCedula(e.target.value);
    };

    const handleCantidadChange = (e) => {
        setCantidad(e.target.value);
    };

    const handleBancoChange = (e) => {
        setBanco(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se podría realizar la lógica para la transferencia, como una solicitud a una API.
        setTransferenciaExitosa(true);
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
                            <label htmlFor="cedula" className="text-gray-700 mb-2">Cédula del destinatario:</label>
                            <input
                                type="text"
                                id="cedula"
                                value={cedula}
                                onChange={handleCedulaChange}
                                className="border border-gray-300 p-2 rounded"
                                placeholder="Ingresa la cédula"
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
                        <p className="mt-4 text-lg">Has transferido <span className="font-bold">${cantidad}</span> a la cédula <span className="font-bold">{cedula}</span> en el banco <span className="font-bold">{banco}</span>.</p>
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
