import Swal from 'sweetalert2'

export const alert = (title, type, withConfirm, footer, handleSubmitAlert, text) => {
    Swal.fire({
        icon: type, 
        title: `<p>${title}</p>`,
        text: text,
        footer: footer
    })
}

export const alertWithTimer = (title, type, timer, footer) => {
    Swal.fire({
        icon: type, 
        showConfirmButton: false,
        title: `<p>${title}</p>`,
        timer: timer,
        footer: footer
    })
}

export const simpleAlert = (title, type) => {
  Swal.fire({
      icon: type, 
      showConfirmButton: true,
      title: `<p>${title}</p>`
  })
}

export const alertWithTwoButtons = (title, type, cancelText, cancelColor, confirmText, confirmColor,footer, handleConfirm) => {
    Swal.fire({
        title: title,
        icon: type,
        showDenyButton: true,
        denyButtonText: cancelText,
        denyButtonColor: cancelColor,
        confirmButtonText: confirmText,
        confirmButtonColor: confirmColor,
        footer: footer,
    }).then((res) => {
    if (res.isConfirmed) {
        handleConfirm();
        alertWithTimer("Member Deleted", "success", 1500);
    }
    if (res.isDenied) {
        
    }
    });
}

export const alertWithInput = (title,okButton,handleConfirmChangeName,text) => {
    Swal.fire({
        title: title,
        text: text,
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: okButton,
        showLoaderOnConfirm: true,

        }).then((result) => {
        if (result.isConfirmed) {
            handleConfirmChangeName(result.value)
            alertWithTimer("Team Name Changed", "success", 1200);
        }
    })
}


