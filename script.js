document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('carbonForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const origin = document.getElementById('origin').value;
      const destination = document.getElementById('destination').value;
      const passengers = parseInt(document.getElementById('passengers').value);
      const travelClass = document.getElementById('class').value;
  
      const API_KEY = 'VW01MSGNTGMK8DHC65YMXPDWRBR0';
  
      const apiUrl = 'https://beta4.api.climatiq.io/travel/flights';
  
      const config = {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      };
  
      const data = {
        "legs": [
          {
            "from": origin,
            "to": destination,
            "passengers": passengers,
            "class": travelClass
          }
        ]
      };
  
      axios.post(apiUrl, data, config)
        .then(response => {
          const result = response.data;
  
          const resultElement = document.getElementById('result');
          resultElement.textContent = `CO2e: ${result.co2e} ${result.co2e_unit}`;
          resultElement.style.display = 'block';
        })
        .catch(error => {
          console.error('No se pudo obtener la solicitud:', error);
        });
    });
  });
 
  





  
  