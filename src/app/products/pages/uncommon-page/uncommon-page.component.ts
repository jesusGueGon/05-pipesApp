import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Jesus';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Nerea' ,'Jesus', 'Antonio', 'Jose', 'Fernando', 'Pedro', 'Manuel', 'Carlos', 'Pepe', 'Eduardo'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Jesus',
    age: 19,
    address: 'Andujar, Jaen'
  }

  // Async Pipe
  public myObservableTImer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.')
      this.person.name = 'Otro nombre';
    }, 3500);
  })

}
