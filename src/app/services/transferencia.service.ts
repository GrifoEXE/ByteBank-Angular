import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[]

  constructor() {
  this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);

    this.listaTransferencia.push(transferencia);
  }
  //const transferencia = {...$event, data: new Date()}
  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
