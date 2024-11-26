import TableView from "../views/TableView.js";
import FormView from "../views/FormView.js";
import AlertView from "../views/AlertView.js";
import FilterView from "../views/FilterView.js";
import CargoModel from "../models/CargoModel.js";

export default class CargoController {
  constructor() {
    this.model = new CargoModel();
    this.tableView = new TableView("table");
    this.formView = new FormView("form");
    this.filterView = new FilterView("filter");
    this.alertView = new AlertView("alerts"); 
    this.currentFilter = "all";

    this.init();
  }

  init() {
    this.renderFilter();
    this.renderTable();
    this.renderForm();
  }

  renderTable() {
    const cargos = this.model.getCargos();
    this.tableView.render(cargos, this.handleStatusChange.bind(this));
  }

  renderForm() {
    this.formView.render(this.handleAddCargo.bind(this));
  }

  renderFilter() {
    this.filterView.render(this.handleFilterChange.bind(this));
  }

  handleAddCargo(cargo) {
   if (!cargo.name || !cargo.origin || !cargo.destination || !cargo.departureDate) {
      this.alertView.showAlert("Все поля формы должны быть заполнены!", "danger");
      return;
    }

    this.model.addCargo(cargo);
    this.alertView.showAlert("Груз успешно добавлен!", "success");
    this.renderTable();
  }

  handleStatusChange(id, status) {
    const cargo = this.model.getCargos().find((item) => item.id === id);
    if (!cargo) return;

    // Если статус "Доставлен" и дата отправления в будущем
    const departureDate = new Date(cargo.departureDate);
    const currentDate = new Date();

    if (status === "Доставлен" && departureDate > currentDate) {
      this.alertView.showAlert(
        "Нельзя установить статус 'Доставлен', если дата отправления находится в будущем!",
        "danger"
      );
      return;
    }

    this.model.updateCargoStatus(id, status);
    this.alertView.showAlert("Статус груза успешно обновлён!", "success");
    this.renderTable();
  }
  handleFilterChange(filter) {
    this.currentFilter = filter;
    this.renderTable();
  }

  getFilteredCargos() {
    const cargos = this.model.getCargos();
    if (this.currentFilter === "all") {
      return cargos;
    }
    return cargos.filter((cargo) => cargo.status === this.currentFilter);
  }
}
