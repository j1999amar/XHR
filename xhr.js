const getCountries = () => {
    const xmr=new XMLHttpRequest();
    xmr.open("GET","https://restcountries.com/v3.1/all");
    xmr.send();
    xmr.responseType="json";
    xmr.onload =()=>{
        const countries=xmr.response;
        for (var i in countries){
            console.log(countries[i].name.common,countries[i].population)
        }
    };
};
getCountries();