import { Injectable } from '@angular/core';

export class Data {
    mes: string;
    vendas: number;
}

let data: Data[] = [{
    mes: "Janeiro",
    vendas: 25000
}, {
    mes: "Fevereiro",
    vendas: 32000
}, {
    mes: "Março",
    vendas: 30000
}, {
    mes: "Abril",
    vendas: 36000
}, {
    mes: "Maio",
    vendas: 37500
}, {
    mes: "Junho",
    vendas: 40000
}, {
    mes: "Julho",
    vendas: 41500
}];

@Injectable()
export class Service {
    getData(): Data[] {
        return data;
    }
}
