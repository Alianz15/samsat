// Mengambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const serviceId = urlParams.get('service');
const serviceTitle = document.getElementById('service-title');

// Mengatur judul sesuai dengan pelayanan yang dipilih
serviceTitle.textContent = `Form Pelayanan ${serviceId}`;

function submitForm(event) {
    event.preventDefault(); // Mencegah pengiriman formulir
    const name = document.getElementById('name').value;
    const vehicleNumber = document.getElementById('vehicle-number').value;

    const message = `Pelayanan ${serviceId} 
    Dari        : ${name}
    Nomor STNK  : ${vehicleNumber}`;
    
    
    
    const phoneNumber = '6289526543809'; 
    const text = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    
    window.open(url, '_blank');
}
