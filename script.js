function showForm(serviceId) {
    // Sembunyikan semua formulir
    const forms = document.querySelectorAll('.form-container form');
    forms.forEach(form => {
        form.classList.add('hidden');
    });
    // Tampilkan formulir yang dipilih
    document.getElementById(serviceId).classList.remove('hidden');
}

function submitForm(event, serviceName) {
    event.preventDefault(); // Mencegah pengiriman formulir
    const formData = new FormData(event.target);
    const name = formData.get('name') || '';
    const vehicleNumber = formData.get('vehicleNumber') || '';
    const message = `${serviceName} Dari: ${name} - Nomor: ${vehicleNumber}`;
    
    const phoneNumber = '6289526543809'; // Ganti dengan nomor WhatsApp Anda
    const text = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    
    window.open(url, '_blank');
}
