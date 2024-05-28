fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {

    sortByCountryPopulation(data);

    const top30Countries = data.slice(-30); 

    const trace = {
        x: top30Countries.map(d => d.country),
        y: top30Countries.map(d => d.population),
        type: 'bar',
        marker: {
            color: '#53AD9D', // Couleur des barres
        },
    };

    const layout = {
        title: 'Top 30 Countries by Population',
        xaxis: { title: 'Country', automargin: true },
        yaxis: { title: 'Population' },
    };

    Plotly.newPlot('populationPlot', [trace], layout);
}


function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}