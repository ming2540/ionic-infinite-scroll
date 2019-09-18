import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Character, CharacterQuery } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {}
  
  load(pageNumber: number): Observable<CharacterQuery>{
    return this.http.get(`http://stapi.co/api/v1/rest/character/search?pageNumber=${pageNumber}`).pipe(
      map( data => {
        return {
          lastPage: data['page']['lastPage'],
          results: data['characters']
        }  
      })
    );
  }
}
