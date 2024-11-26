export default class FormView {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
    }
  
    render(onSubmit) {
      this.container.innerHTML = `
        <form id="cargo-form" class="mb-4 needs-validation" novalidate>
          <div class="mb-3">
            <label class="form-label">Название груза</label>
            <input type="text" id="cargo-name" class="form-control" required />
            <div class="invalid-feedback">Введите название груза.</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Пункт отправления</label>
            <input type="text" id="cargo-origin" class="form-control" required />
            <div class="invalid-feedback">Введите пункт отправления.</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Пункт назначения</label>
            <input type="text" id="cargo-destination" class="form-control" required />
            <div class="invalid-feedback">Введите пункт назначения.</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Дата отправления</label>
            <input type="date" id="cargo-date" class="form-control" required />
            <div class="invalid-feedback">Выберите дату отправления.</div>
          </div>
          <button type="submit" class="btn btn-primary">Добавить груз</button>
        </form>
      `;
  
      const form = document.getElementById("cargo-form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
  
        // Проверка встроенной валидации Bootstrap
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          return;
        }
  
        const cargo = {
          id: `CARGO${Date.now()}`,
          name: document.getElementById("cargo-name").value,
          origin: document.getElementById("cargo-origin").value,
          destination: document.getElementById("cargo-destination").value,
          departureDate: document.getElementById("cargo-date").value,
          status: "Ожидает отправки",
        };
  
        onSubmit(cargo);
        form.reset();
        form.classList.remove("was-validated"); // Сбрасываем стиль валидации
      });
    }
  }
  