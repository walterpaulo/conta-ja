import { Conta } from './../../../models/conta';
import { ContaService } from './../../../services/conta.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.css'],
})
export class ContaListComponent implements OnInit {
  constructor(private contaService: ContaService) {}
  contas: Conta[] = [];
  @Input('status') status: boolean = true;
  display: boolean = false;
  acao: string = '';
  checked: boolean = false;

  ngOnInit(): void {
    this.getContas(this.status ? 'true' : 'false');
    this.acao = this.status ? 'Data de Pagamento' : 'Controle';
  }

  showDialog() {
    this.display = true;
    setInterval(() => (this.display = false), 1000);
  }

  getContas(status: string) {
    this.contaService
      .getConta(status)
      .subscribe((listContas: Conta[]) => (this.contas = listContas));
  }
}
