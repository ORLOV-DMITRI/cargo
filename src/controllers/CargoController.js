import { CargoModel } from "../models/CargoModel";
import { TableView } from "../views/TableView";

export const CargoController = {
    model: CargoModel,
    tableView: TableView,

    init() {
        const cargos = this.model.getCargos();
        this.tableView.renderTable(cargos)
    }
}