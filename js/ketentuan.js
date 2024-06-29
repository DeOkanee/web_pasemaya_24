document.querySelectorAll('.ketentuan-btn').forEach(button => {
    button.addEventListener('click', () => {
        const lombaId = button.getAttribute('data-lomba');
        document.getElementById(`ketentuan-${lombaId}`).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        closeButton.parentElement.parentElement.style.display = 'none';
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('ketentuan-modal')) {
        event.target.style.display = 'none';
    }
}
