// var myHeaders = new Headers();
// myHeaders.append("apikey", "FspQ3QjL82hPcSc6gQ5k2sxYenWvsTzn");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/exchangerates_data/latest?&base=USD", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

document.querySelector('form').onsubmit = function() {

    fetch('https://api.apilayer.com/exchangerates_data/latest?&base=USD&apikey=FspQ3QjL82hPcSc6gQ5k2sxYenWvsTzn')
    .then(response => response.json())
    .then(data => {
        const currency = document.querySelector('#currency').value.toUpperCase();
        const rates =  data.rates[currency];
        //console.log(rates);
        if(rates !== undefined) {
        document.querySelector('#result').innerHTML = `1 USD = ${rates.toFixed(2)} ${currency}.`;  
        } else {
            document.querySelector('#result').innerHTML = `Enter a valid Currency`;
        }

        document.querySelector('#currency').value = '';
    })
    .catch(error => {
        console.log('Error', error);
    });
    
    return false; // this also prevents the page from refreshing, or the default form submission
}

