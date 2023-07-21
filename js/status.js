const serverStatusURL = 'https://api.mcsrvstat.us/2/hypixel.net';

async function getServerStatus() {
    try {
        const response = await fetch(serverStatusURL);
        const data = await response.json();

        // Verificar si el servidor está en línea
        if (data.online) {
            document.getElementById('status-server').textContent = 'En línea';
            document.getElementById('players').textContent = data.players.online + '/' + data.players.max;
        } else {
            document.getElementById('apagado').textContent = 'apagado';
            document.getElementById('players').textContent = '0/0';
        }
    } catch (error) {
        console.error('Error al obtener la información del servidor:', error);
        document.getElementById('status').textContent = 'Error al obtener el estado';
        document.getElementById('players').textContent = '0/0';
    }
}

document.addEventListener('DOMContentLoaded', getServerStatus);