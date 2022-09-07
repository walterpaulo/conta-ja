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
  position: string = 'top';

  constructor(
    private contaService: ContaService,
    private formBuild: FormBuilder
  ) {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.showdisplay && this.showDialog();
  }

  ngOnDestroy() {}

  fb = this.formBuild.group<any>({
    name: ['', Validators.required],
    price: [0.0],
    status: [false],
  });

  showDialog() {
    this.display = true;
    this.position = 'top';
  }

  save() {
    this.fb.get('status')?.setValue(this.checked ? true : false);
    if (this.fb.status == 'VALID') {
      console.log(this.fb.value);
      this.contaService.save(this.fb.value).subscribe(() => {
        console.log('Alterado com sucesso!');
        this.cleanForm();
      });
      window.location.href = '/';
      this.display = false;
    }
  }

  cleanForm() {
    this.fb.get('name')?.setValue(''),
      this.fb.get('price')?.setValue(0),
      (this.conta = {} as Conta);
  }
}
