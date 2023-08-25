import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flash-screen',
  templateUrl: './flash-screen.component.html',
  styleUrls: ['./flash-screen.component.scss']
})
export class FlashScreenComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    setTimeout(() => { this._router.navigate(['/form-view']) }, 2000)
  }

}
