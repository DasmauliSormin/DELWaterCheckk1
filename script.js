function navigate(pageId) {
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }
  
  function kirimLaporan() {
    const lokasi = document.getElementById('lokasi').value;
    const laporan = document.getElementById('laporan').value.trim();
  
    if (!lokasi || !laporan) {
      alert('Mohon isi semua field!');
      return;
    }
  
    alert(`Laporan terkirim!\nLokasi: ${lokasi}\nIsi: ${laporan}`);
    document.getElementById('lokasi').selectedIndex = 0;
    document.getElementById('laporan').value = '';
  }
  