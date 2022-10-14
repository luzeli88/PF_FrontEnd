import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logo-redes',
  templateUrl: './logo-redes.component.html',
  styleUrls: ['./logo-redes.component.css']
})
export class LogoRedesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }
}
