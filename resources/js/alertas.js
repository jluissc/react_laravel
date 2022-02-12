import Swal from 'sweetalert2'

function alert(type='error',title){
    Swal.fire({
        position: 'bottom-end',
        icon: type,
        title: title,
        showConfirmButton: false,
        timer: 2000
    })
}

export default alert