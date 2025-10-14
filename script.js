

// Esperar a que el DOM cargue
$(document).ready(function () {
    var año = new Date().getFullYear();
    $('#tituloAño').text('Feriados de Chile para el Año ' + año);
    
    const apiURL = 'https://api.boostr.cl/feriados/en.json';  // API 

    $.ajax({
        url: apiURL,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            $('#loading-alert').hide();

            if (response.status === 'success' && response.data && response.data.length > 0) {
                $('#holidays-container').show();
                let tableBody = $('#holidays-body');

                var sortedData = response.data.sort(function(a, b) {
                    return new Date(a.date) - new Date(b.date);
                });

                // Iterar sobre el array de feriados y agregar filas a la tabla
                $.each(sortedData, function (index, holiday) {
                    const inalienableStatus = holiday.inalienable ? 'Irrenunciable' : 'No Irrenunciable';
                    let row = `<tr>
                        <td data-label="Fecha">${holiday.date}</td>
                        <td data-label="Nombre">${holiday.title || 'N/A'}</td>  <!-- Fallback agregado -->
                        <td data-label="Tipo">${holiday.type || 'N/A'}</td>
                        <td data-label="Irrenunciable">${inalienableStatus}</td>
                    </tr>`;
                    tableBody.append(row);
                });
                
                console.log('Feriados cargados exitosamente: ' + response.data.length + ' días libres para el año ' + año);
            } else {
                $('#no-holidays-alert').text('No se encontraron feriados para este año.').show();
                console.warn('Respuesta de API sin datos:', response);
            }
        },
        error: function (error) {
            $('#loading-alert').hide();
            console.error('Error al consumir la API:', error);
            $('#no-holidays-alert').text('Error al cargar los feriados. Por favor, inténtelo de nuevo más tarde. Verifica tu conexión.').show();
        }
    });
});
