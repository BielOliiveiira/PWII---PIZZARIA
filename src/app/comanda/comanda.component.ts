import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  formComanda: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formComanda = this.formBuilder.group({
      chopp : this.formBuilder.control(''),
      pizza : this.formBuilder.control(''),
      recheio : this.formBuilder.control(''),
      pessoas : this.formBuilder.control(''),
      taxaServico : this.formBuilder.control(false)
    })
  }

  onProcessar(){
    let vlChopp:number = this.formComanda.value.chopp * 7.30;
    let vlPizza:number = this.formComanda.value.pizza * 31.50;
    let vlRecheio:number = this.formComanda.value.recheio * 5.90;
    let vlPessoas:number = this.formComanda.value.pessoas;
    let taxaServico:boolean = this.formComanda.value.taxaServico;
    let vlConsumo:number = (vlChopp + vlPizza + vlRecheio);
    let vlTaxaServico: number = vlConsumo * 0.1;
    let vlTotal:number;
    let vlPorPessoa:number = vlTotal / vlPessoas;

    if (taxaServico == true)
    {
      vlConsumo + vlTaxaServico == vlTotal
    }
    
    
    

  }
}
