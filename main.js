import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('kepurl').addEventListener('change', () => {
    document.getElementById('kep').src = document.getElementById('kepurl').value;
  })
  document.getElementById('betumeret').addEventListener('input', () => {
    document.getElementById('szoveg').style.fontSize = document.getElementById('betumeret').value + 'pt';
  })
  document.getElementById('sorkoz').addEventListener('input', () => {
    document.getElementById('szoveg').style.lineHeight = document.getElementById('sorkoz').value + 'em';
  })
  document.getElementById('betuszin').addEventListener('input', () => {
    document.getElementById('szoveg').style.color = document.getElementById('betuszin').value;
  })
  document.getElementById('gomb').addEventListener('click', () => {
    document.getElementById('kep').classList.toggle('jobbrausztatas');
  })
});