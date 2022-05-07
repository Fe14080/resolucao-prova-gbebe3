import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  nome: string;
  sobrenome: string;

  indexItemAtivo: number = 0;

  itemA: string = 'itemA';

  pessoas: any[] = [
    { nome: 'João', sobrenome: 'Silva' },
    { nome: 'Carlos', sobrenome: 'Augusto' },
    { nome: 'José', sobrenome: 'Souza' },
    { nome: 'Maria', sobrenome: 'Isabel' },
    { nome: 'Sarah', sobrenome: 'Santos' },
  ];

  constructor() {}

  ngOnInit(): void {}

  itemC() {
    return 'itemC';
  }

  adicionar() {
    this.pessoas.push({ nome: this.nome, sobrenome: this.sobrenome });
    this.nome = null;
    this.sobrenome = null;
  }

  onItemSelecionado(event) {
    console.log(event);
  }
}
