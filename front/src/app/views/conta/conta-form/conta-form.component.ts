import { Conta } from './../../../models/conta';
import { ContaService } from './../../../services/conta.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.css'],
})
export class ContaFormComponent implements OnInit {
  checked: boolean = false;
  display: boolean = false;
  @Input('showdisplay') showdisplay: boolean = true;
  conta = {} as Conta;

  constructor(
    private contaService: ContaService,
    private formBuild: FormBuilder
  ) {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.showdisplay && this.showDialog();
  }

  ngOnDestroy() {}

  fb = this.formBuild.group({
  name: [null, Validators.required],
  price: [0.0, Validators.required],
  status: [false]
  })

  showDialog() {
    this.display = true;
  }

  save() {
    if(this.fb.status == 'VALID'){
      console.log('salvar');

    }
    // this.display = false;
    console.log('erro');
  }
}
