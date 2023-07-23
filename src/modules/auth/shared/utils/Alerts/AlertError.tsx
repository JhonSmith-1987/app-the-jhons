import Swal from 'sweetalert2';
export function alertError(text:string) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: text,
        timer: 3000, // Tiempo en milisegundos antes de que se cierre automáticamente
        timerProgressBar: true, // Muestra una barra de progreso durante el tiempo de cierre
        showConfirmButton: false, // No muestra el botón de confirmación
    });
}