export default class AlertView {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
    }
  
    showAlert(message, type = "danger", timeout = 3000) {
      // Добавляем алерт в контейнер
      const alert = document.createElement("div");
      alert.className = `alert alert-${type} alert-dismissible fade show`;
      alert.setAttribute("role", "alert");
      alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      this.container.appendChild(alert);
  
      // Удаляем алерт через timeout
      setTimeout(() => {
        alert.classList.remove("show");
        alert.addEventListener("transitionend", () => alert.remove());
      }, timeout);
    }
  }
  