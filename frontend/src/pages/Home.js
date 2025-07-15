import countriesData from '../config/countries.json';

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen mt-20'>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of the application.</p>
            <p>Total countries: {countriesData.countries.length}</p>
            <div>
                {countriesData.countries.map((country, index) => (
                    <div key={index} className='p-2 border-b'>
                        <h2 className='text-lg font-bold'>{country.name}</h2>
                        <div className='flex items-center gap-2'>
                            <img 
                                src={`https://flagsapi.com/${country.code}/flat/32.png`} 
                                alt={`${country.name} flag`}
                                className='w-8 h-6'
                            />
                            <p>Code: {country.code}</p>
                        </div>
                        <p>Population: {country.population.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;