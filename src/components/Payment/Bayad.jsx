import React from 'react';

function Bayad() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800">
            <div className="container max-w-md p-6 rounded-lg border-2 border-gray-700 bg-opacity-80 shadow-lg">
                <h3 className="text-center text-3xl italic text-purple-500">Pay with</h3>
                <div className="mt-8">
                    <label htmlFor="email" className="text-white">Email :</label><br />
                    <input type="text" name="email" placeholder="Email :" className="w-full mt-2 px-4 py-2 text-lg border border-purple-700" /><br /><br /><br />
                    <label htmlFor="card" className="text-white">Card :</label><br />
                    <input type="text" name="card" placeholder="* **** **** **" className="w-full mt-2 px-4 py-2 text-lg border border-purple-700" /><br /><br /><br />
                    <label htmlFor="cvc" className="text-white">Expiration Date :</label><br />
                    <input type="text" id="date" name="cvc" placeholder="Year" className="w-1/5 mt-2 px-4 py-2 text-lg border border-purple-700 mr-4" />
                    <input type="text" id="dates" placeholder="Month" className="w-1/5 mt-2 px-4 py-2 text-lg border border-purple-700" />
                </div>

                <p className="text-white mt-8">Other Method :</p>

                <div className="mt-8">
                    <div className="bg-gray-200 p-4 rounded mt-4">
                    <h4 className="text-center text-xl text-purple-800 font-semibold relative">GYM</h4>
                        <div className="text-black">PAY WITH</div>
                        <div className="mt-2">
                            <p className="flex items-center">
                                <input type="radio" id="payg1" name="option" value="option1" className="mr-2" />
                                <label htmlFor="payg1" className="text-purple-500">Gcash<span className="text-gray-600 ml-2">PHP 000.00 Available Balance</span></label>
                            </p>
                            <p className="flex items-center">
                                <input type="radio" id="payg2" name="option" value="option2" className="mr-2" />
                                <label htmlFor="payg2" className="text-purple-500">Paypal<span className="text-gray-600 ml-2">PHP 000.00 Available Balance</span></label>
                            </p>
                        </div>
                        <div className="text-black mt-4">YOU ARE ABOUT TO PAY</div>
                        <div className="mt-2">
                            <p className="text-purple-500">Amount :<a href="#" className="ml-[50%] text-black">1</a></p>
                            <div className="border-b-2 border-gray-400 my-2"></div>
                            <p className="text-purple-500">Total :<a href="#" className="ml-[50%] text-black">1</a></p>
                            <p className="text-purple-300 text-lg mt-4">Confirm transaction?</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <button className="text-gray-300 w-1/3 h-12 bg-purple-700 rounded-full text-xl hover:bg-purple-600">
                        <a href="/dash">Add</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Bayad;
