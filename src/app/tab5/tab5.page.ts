import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page {

  constructor(private router: Router) {}

 

  sair() {
    // Redireciona para a aba 'Home'
    this.router.navigateByUrl('/tabs/tab1'); // Substitua 'tabs/tab1' pelo caminho correto da sua aba 'Home'
  }
}

