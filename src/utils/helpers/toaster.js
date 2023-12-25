import { toast } from "react-toastify";

// toaster.show('error', 'message', 3000)
// toaster.show('success', 'message', 3000)
// toaster.show('warning', 'message', 3000)

export const toaster = {
    show: (type, message, time) => {

        if (type !== "") {
            return toast[type](message, {
                position: "top-center",
                autoClose: time,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast(`🦄 hello ${message}`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
}

// 