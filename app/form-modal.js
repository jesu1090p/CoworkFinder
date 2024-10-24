const form = document.getElementById('userForm');
const modal = document.getElementById('confirmationModal');
const closeModal = document.getElementById('closeModal');
const confirmModal = document.getElementById('confirmModal');

// Función reutilizable para mantener el foco en el formulario
function mantenerFocoEnFormulario() {
  form.scrollIntoView({ behavior: 'smooth' });
  document.body.classList.remove('modal-open'); // Eliminar desenfoque
}

// Capturar y mostrar datos en el modal
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar recarga

  // Obtener los valores ingresados
  const email = document.getElementById('email').value;
  const celular = document.getElementById('celular').value;
  const fechaIni = document.getElementById('fecha-ini').value;
  const fechaFin = document.getElementById('fecha-fin').value;
  const terminos = document.getElementById('de-acuerdo').checked ? 'Sí' : 'No';

  // Mostrar los datos en el modal
  document.getElementById('modalEmail').textContent = email;
  document.getElementById('modalCelular').textContent = celular;
  document.getElementById('modalFechaIni').textContent = fechaIni;
  document.getElementById('modalFechaFin').textContent = fechaFin;
//  document.getElementById('modalTerminos').textContent = terminos;

  // Abrir el modal y desenfocar el fondo
  modal.showModal();
  document.body.classList.add('modal-open');
});

// Cerrar el modal y mantener foco en el formulario
closeModal.addEventListener('click', () => {
  modal.close();
  mantenerFocoEnFormulario();
});

// Confirmar y cerrar el modal sin desplazamiento al inicio
confirmModal.addEventListener('click', (e) => {
  e.preventDefault(); // Evitar recarga
  modal.close();
  alert('Datos confirmados exitosamente\nPronto te enviaremos un mensaje con los detalles sobre tu reserva.');
  form.reset(); // Limpiar el formulario
  mantenerFocoEnFormulario(); // Mantener foco
});
