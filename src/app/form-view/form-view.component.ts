import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  onClickBack() {
      return this._router.navigate(['/'])
  }

}
