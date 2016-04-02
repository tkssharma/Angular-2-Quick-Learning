import {Component} from 'angular2/core';

import {ArtistItemComponent} from './artist-item.component';
import {ArtistDetailsComponent} from './artist-details.component';
import {Artist,ArtistService} from './app.service'

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html',
  directives: [ArtistItemComponent, ArtistDetailsComponent],
  styleUrls: ['css/app.css'],
  providers: [ArtistService]
})

export class AppComponent {

  currentArtist: Artist;

  artists: Artist[];

  constructor(artistService: ArtistService) {
    this.artists = artistService.getArtist();
  }

  showArtist(item) {
    this.currentArtist = item;
  }
}
