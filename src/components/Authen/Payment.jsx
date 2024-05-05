import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Locator from '../Location/Locator';
import PrimaryBtn from '../Button/PrimaryBtn';
import { City, Country, State } from 'country-state-city';

export const Payment = () => {
    let countryData = Country.getAllCountries();
    const [stateData, setStateData] = useState()
    const [cityData, setCityData] = useState()

    const [country, setCountry] = useState(countryData[0]);
    const [state, setState] = useState()
    const [city, setCity] = useState()

    useEffect(() => {
        setStateData(State.getStatesOfCountry(country?.isoCode))
    }, [country]);

    useEffect(() => {
        setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
    }, [state]);

    useEffect(() => {
        stateData && setState(stateData[0]);
    }, [stateData]);

    useEffect(() => {
        cityData && setCity(cityData[0]);
    }, [cityData]);

    return (
        <section className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
            <div className="w-full h-auto flex items-center justify-center flex-col">
                <h4 className="lg:text-lg md:text-lg sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">
                    Add Payment
                </h4>
                <br />
                <div className="w-[50%] h-auto grid justify-center bg-black rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
                    <div>
                        <p className='text-gray-300 font-semibold'>Country  :</p>
                        <Locator
                            data={countryData}
                            selected={country}
                            setSelected={setCountry} />
                    </div>
                    <br />
                    {state && (
                        <div>
                            <p className='text-gray-300 font-semibold'>Province  :</p>
                            <Locator
                                data={stateData}
                                selected={state}
                                setSelected={setState} />
                        </div>
                    )}
                    <br />
                    {city && (
                            <div>
                                <p className='text-gray-300 font-semibold'>Province  :</p>
                                <Locator
                                    data={cityData}
                                    selected={city}
                                    setSelected={setCity} />
                            </div>
                        )}
                    <div>
                    <PrimaryBtn className="lg:w-[50%] md:w-[40%] sm:w-[50%] text-xl w-full h-auto relative ml-[-5%]">Cancel</PrimaryBtn>
                <PrimaryBtn className="lg:w-[10%] md:w-[40%] sm:w-[50%] text-xl w-full h-auto absolute ml-[2%]">
                    <Link to={'*'}>
                        Submit
                    </Link>
                </PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment