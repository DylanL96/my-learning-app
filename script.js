const envSpan = document.getElementById('env');
envSpan.textContent = window.location.href.includes('dev') ? 'Development' : 'Production';