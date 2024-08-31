import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { Contato } from '../../models/contato';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    FormsModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit {

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = []
  filtroPorTexto: string = ''
  constructor(private service: AgendaService){ }

  ngOnInit(): void {

    this.service.listaAgenda().subscribe({
      next: data => {
        this.contatos = data.items

      },
      error: err => {
        console.log(err)
      }
    })
  }


  filtrarContatosPorLetraInicial(letra: string) : Contato[] {
    return this.filtrarContatoPorTexto().filter(contato => {

     return contato.nome.toLowerCase().startsWith(letra)

    })

  }

  filtrarContatoPorTexto(): Contato[] {

    if (!this.filtroPorTexto){
       return this.contatos
    }

    return this.contatos.filter(contato => {
       return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })

  }






}
