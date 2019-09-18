import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from '../services/character/character.service';
import { Character } from '../models/character';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  characters: Character[];
  private characterSubscribe: Subscription;
  lastPage: boolean = false;
  pageNum: number = 0;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterSubscribe =  this.characterService.load(0).subscribe(
      results => {
        this.characters = results.results;
        this.lastPage = results.lastPage;
      }
    );
  }

  ngOnDestroy() {
    this.characterSubscribe.unsubscribe();
  }

  loadMoreData(event) {
    this.pageNum++;
    this.characterSubscribe = this.characterService.load(this.pageNum).subscribe(
      results => {
        this.characters = [...this.characters, ...results.results];
        this.lastPage = results.lastPage;
        event.target.complete()
      }
    )
  }

}
