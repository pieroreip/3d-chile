import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  // Método para obtener información de un Pokémon por su nombre
  getPokemon(nombre: string): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/${nombre}`)
  }
}