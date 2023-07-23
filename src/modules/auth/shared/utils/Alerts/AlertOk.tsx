import Swal from 'sweetalert2';
export function alertOk(text:string) {
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: text,
        timer: 3000, // Tiempo en milisegundos antes de que se cierre automáticamente
        timerProgressBar: true, // Muestra una barra de progreso durante el tiempo de cierre
        showConfirmButton: false, // No muestra el botón de confirmación
    });
}