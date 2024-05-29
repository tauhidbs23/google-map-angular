import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {GoogleMapsModule} from "@angular/google-maps";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,
    GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  map: any;
  latitude: number = 23;
  longitude: number = 90;

  selectedPosition: google.maps.LatLngLiteral = {
    lat: this.latitude,
    lng: this.longitude
  };
  markerPosition: google.maps.LatLngLiteral = {
    lat: this.latitude,
    lng: this.longitude
  };


  constructor() {}

  ngOnInit(): void {}

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: this.latitude,
    lng: this.longitude
  };
  zoom = 15;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }


  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }


  updateMarkerPosition() {
    this.markerPosition = { lat: this.latitude, lng: this.longitude };
    this.center = { lat: this.latitude, lng: this.longitude };
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPosition = event.latLng.toJSON();
      this.latitude = this.markerPosition.lat;
      this.longitude = this.markerPosition.lng;
    }
  }





}
