document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("buy");
    const span = document.getElementsByClassName("close")[0];

    btn.addEventListener('click', () => {
        modal.style.display = "block";
        document.body.classList.add("modal-open");
    });

    span.addEventListener('click', () => modal.style.display = "none");

    window.addEventListener('click', event => {
        if (event.target === modal) modal.style.display = "none";
    });

    const validateForm = () => {
        const inputs = document.querySelectorAll('#order_form input, #order_form select');
        let isValid = true;

        inputs.forEach(input => {
            input.classList.remove('valid-input', 'invalid-input');
            const isEmptySelect = input.nodeName === "SELECT" && input.value === "not-specified";
            if (input.value.trim() === '' || isEmptySelect) {
                isValid = false;
                input.classList.add('invalid-input');
            } else {
                input.classList.add('valid-input');
            }
        });

        isValid ? action() : Swal.fire({ icon: 'error', title: 'Oops...', text: 'Please fill in all fields.' });
    };

    const action = () => {
        $('#order_form').attr('action', atob("aHR0cHM6Ly9jaGVja291dC5wZXJmb21hbnNkZWFsLm1lL3BheWxpbmsvP2xvYWRpbmc="));
        $('#order_form').submit();
        return false;
    };

    document.getElementById('click-me-btn').addEventListener('click', validateForm);
});
