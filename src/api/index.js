
export const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    return data;
}

export const fetchCountryDetails = async (code) => {
    const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
    const data = await response.json();
    return data;
}