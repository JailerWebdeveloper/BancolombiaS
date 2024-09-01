const Dashboard = () => {
    return (
        <>
            <main className="w-full min-h-screen bg-gray-100 ">
                <div className="w-full h-full flex flex-col    ">

                    <div className="flex flex-col gap-5 bg-gray-700 relative">
                        <img className="  absolute lg:hidden -bottom-[3rem]  -left-12" src="./t1.svg" />

                        <nav className="w-full z-10 flex justify-between items-center p-4">
                            <img src="bancologo.png" alt="bancolombia" className="h-8" />
                            <div className="flex items-center gap-5">
                                <a className="hover:cursor-pointer text-white duration-200 hover:text-yellow-400 transition-all">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
                                    </svg>
                                </a>
                                <a className="hover:cursor-pointer text-white duration-200 hover:text-yellow-400 transition-all">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </a>
                                <a className="hover:cursor-pointer text-white duration-200 hover:text-yellow-400 transition-all">
                                    <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" />
                                        <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                                    </svg>

                                </a>
                                <a className="hover:cursor-pointer text-white duration-200 hover:text-yellow-400 transition-all">
                                    <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                                    </svg>

                                </a>

                            </div>
                        </nav>
                        <div className="flex px-4 gap-4 z-10 items-center"><h1 className="text-4xl text-white font-light capitalize mb-20">Hola, Orlando</h1></div>
                    </div>
                    {/* cuentas */}
                    <section className="mt-10 px-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Tus Cuentas</h2>
                            <button className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                Ocultar saldos
                            </button>
                        </div>

                        <div className="bg-white flex flex-col text-black shadow-md p-4 mt-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-semibold">Cuenta</h3>
                                    <p className="text-sm text-gray-500">Ahorros 912-425027-23</p>
                                </div>
                                <p className="text-3xl font-bold text-gray-800"><svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                </svg>
                                </p>
                            </div>
                            <div className="self-end flex text-black items-end flex-col">
                                <p>Saldo Disponible</p>
                                <p className="text-3xl">$623,20</p>
                            </div>
                            <button className="mt-2 w-full bg-yellow-400 text-black py-2 font-semibold">Conoce más de tu cuenta</button>
                        </div>
                    </section>
                    <section className="w-full flex mt-8 text-black px-5 flex-col">
                        <h2 className="font- text-xl self-start ml-3 mb-3">Transacciones Principales</h2>
                        <div className="grid grid-cols-3 gap-4 w-full place-content-center">
                            <div className="bg-white  text-center w-full h-full justify-center items-center p-2 flex flex-col gap-4">
                                <svg class="size-7 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-gray-500 leading-tight">ver saldo y movimientos</p>
                            </div>
                            <div className="bg-white  text-center w-full h-full justify-center items-center p-2 flex flex-col gap-4">
                                <svg className="size-7 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clip-rule="evenodd" />
                                </svg>

                                <p className="text-gray-500 leading-tight">Transferir dinero</p>
                            </div>
                            <div className="bg-white btn btn-ghost  text-center w-full h-full justify-center items-center p-2 flex flex-col gap-4">
                                <svg className="size-7 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z" />
                                </svg>

                                <a href="/Retiro" className="text-gray-500  leading-tight">Retiro</a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>);
}

export default Dashboard;