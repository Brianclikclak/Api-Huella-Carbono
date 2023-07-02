const APIKEY = "VW01MSGNTGMK8DHC65YMXPDWRBR0";
const ApiUrl = "https://beta4.api.climatiq.io";
const url =  "https://beta4.api.climatiq.io/travel/flights";

const config = {
    headers:{
        'Authorization': `Bearer ${APIKEY}`,
        'Content-Type': 'application/json'
    } 
}

const data = {
    "legs": [
      {
        "from": "BER",
        "to": "AMS",
        "passengers": 2,
        "class": "first"
      },
      {
        "from": "AMS",
        "to": "JFK",
        "passengers": 2,
        "class": "economy"
      }
    ]
  };

  axios.post(url, data, config)
  .then(response => {
    const result = response.data;
    console.log(result);

    // Actualizar el elemento 'co2e' con el valor de CO2e
    const co2eElement = document.getElementById('co2e');
    co2eElement.textContent = `CO2e: ${result.co2e} ${result.co2e_unit}`;

    // Actualizar el elemento 'legs' con los detalles de los viajes
    const legsElement = document.getElementById('legs');
    legsElement.innerHTML = '';

    result.legs.forEach((leg, index) => {
        const activity_value = leg.activity_data.activity_value;
        const activity_unit = leg.activity_data.activity_unit;

        const legElement = document.createElement("div");
        legElement.innerHTML = `<h3>Leg ${index + 1}</h3>
        <p>Activity: ${activity_value}, ${activity_unit}</p>`;

        legsElement.appendChild(legElement);
    });
  })
  .catch(error => {
    console.error('No se pudo obtener la solicitud:', error);
  });


 
  





  
  