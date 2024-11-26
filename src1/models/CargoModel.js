export default class CargoModel {
    constructor() {
      this.cargos = [
        {
          id: "CARGO001",
          name: "Строительные материалы",
          status: "В пути",
          origin: "Москва",
          destination: "Казань",
          departureDate: "2024-11-24",
        },
        {
          id: "CARGO002",
          name: "Хрупкий груз",
          status: "Ожидает отправки",
          origin: "Санкт-Петербург",
          destination: "Екатеринбург",
          departureDate: "2024-11-26",
        },
      ];
    }
  
    getCargos() {
      return this.cargos;
    }
  
    addCargo(cargo) {
      this.cargos.push(cargo);
    }
  
    updateCargoStatus(id, status) {
      const cargo = this.cargos.find((item) => item.id === id);
      if (cargo) {
        cargo.status = status;
      }
    }
  }
  