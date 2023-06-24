import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  baseURL = 'https://localhost:7249/'
  constructor() { }
}
