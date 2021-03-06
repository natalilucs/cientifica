import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CientificaService {    

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string) : number {

    let resultado: number;

    switch(operacao){
      case CientificaService.SOMA:
        resultado = num1 + num2;
        break;
      case CientificaService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CientificaService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CientificaService.MULTIPLICACAO:
          resultado = num1 * num2;
      break;
      default:
      resultado = 0;
      break;
    } 
    return resultado;
  }
}