document.getElementById('city-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener ciudades seleccionadas
    const selectedCities = Array.from(document.getElementById('cities').selectedOptions)
        .map(option => option.value);
    
    // Obtener datos de temperatura para las ciudades seleccionadas
    getTemperatureData(selectedCities)
        .then(data => {
            // Preparar datos para el gráfico
            const labels = Object.keys(data);
            const temperatures = Object.values(data);

            // Dibujar el gráfico
            drawChart(labels, temperatures);
        })
        .catch(error => {
            console.error('Error al obtener datos de temperatura:', error);
        });
});

function getTemperatureData(cities) {
    const apiKey = '27fb663103c954e2bc426809f9ec79cb'; // Reemplaza con tu propia API key de OpenWeatherMap
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

    // Promesas para obtener datos de temperatura para cada ciudad
    const promises = cities.map(city => {
        const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al obtener datos de temperatura para ${city}`);
                }
                
                return response.json();
            })
            .then(data => {
                return { [city]: data.main.temp };
            });
    });

    // Devolver una promesa que resuelve a un objeto con datos de temperatura para cada ciudad
    return Promise.all(promises)
        .then(results => {
            return results.reduce((acc, curr) => {
                return { ...acc, ...curr };
            }, {});
        });
}



let chart = null;  

function drawChart(labels, temperatures) {
    const ctx = document.getElementById('temperature-chart').getContext('2d');

    // Destruir el gráfico anterior si existe
    if (chart !== null) {
        chart.destroy();
    }

    // Crear un nuevo gráfico
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperatura (°C)',
                data: temperatures,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


