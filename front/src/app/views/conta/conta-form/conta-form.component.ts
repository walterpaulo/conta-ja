import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.css'],
})
export class ContaFormComponent implements OnInit {
  checked: boolean = false;
  display: boolean = false;
  @Input('showdisplay') showdisplay: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    console.log('oi');
    this.showdisplay && this.showDialog();
  }

  ngOnDestroy() {}

  showDialog() {
    this.display = true;
  }

  save() {
    this.ngOnDestroy();
    console.log('salvar');
    this.display = false;
    console.log(this.display);
  }
}
