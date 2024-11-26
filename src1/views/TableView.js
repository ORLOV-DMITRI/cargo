export default class TableView {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
    }
  
    // Функция для определения цвета статуса
    getStatusClass(status) {
      switch (status) {
        case "Ожидает отправки":
          return "bg-warning"; // желтый
        case "В пути":
          return "bg-primary"; // синий
        case "Доставлен":
          return "bg-success"; // зеленый
        default:
          return "";
      }
    }
  
    render(cargos, onStatusChange) {
      this.container.innerHTML = `
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Номер</th>
              <th>Название</th>
              <th>Статус</th>
              <th>Пункт отправления</th>
              <th>Пункт назначения</th>
              <th>Дата отправления</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            ${cargos
              .map((cargo) => {
                const statusClass = this.getStatusClass(cargo.status);
                return `
                  <tr>
                    <td>${cargo.id}</td>
                    <td>${cargo.name}</td>
                    <td><span class="badge ${statusClass}">${cargo.status}</span></td>
                    <td>${cargo.origin}</td>
                    <td>${cargo.destination}</td>
                    <td>${cargo.departureDate}</td>
                    <td>
                      <select class="form-select" onchange="handleStatusChange('${cargo.id}', this.value)">
                        <option value="Ожидает отправки" ${cargo.status === "Ожидает отправки" ? "selected" : ""}>Ожидает отправки</option>
                        <option value="В пути" ${cargo.status === "В пути" ? "selected" : ""}>В пути</option>
                        <option value="Доставлен" ${cargo.status === "Доставлен" ? "selected" : ""}>Доставлен</option>
                      </select>
                    </td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
        </div>
      `;
    }
  }
  