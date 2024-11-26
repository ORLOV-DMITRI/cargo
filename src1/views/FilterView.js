export default class FilterView {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
    }
  
    render(onFilterChange) {
      this.container.innerHTML = `
        <div class="mb-3">
          <label for="status-filter" class="form-label">Фильтр по статусу</label>
          <select id="status-filter" class="form-select">
            <option value="all" selected>Все</option>
            <option value="Ожидает отправки">Ожидает отправки</option>
            <option value="В пути">В пути</option>
            <option value="Доставлен">Доставлен</option>
          </select>
        </div>
      `;
  
      const filter = document.getElementById("status-filter");
      filter.addEventListener("change", (event) => {
        const status = event.target.value;
        onFilterChange(status);
      });
    }
  }
  