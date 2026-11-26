import { Component, input } from '@angular/core';
import { Place } from '../place';

@Component({
  imports: [],
  selector: 'app-place-card',
  styleUrl: './place-card.scss',
  templateUrl: './place-card.html',
})
export class PlaceCard {
  place = input.required<Place>();
  toggleDescription(place: Place) {
    place.isExpanded = !place.isExpanded;
  }
}
