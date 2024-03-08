import { Injectable } from '@angular/core';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor() { }

  async getTrainings() {
    return await Axios.get('http://back.cristobaljjg.com/trainings');
  }
}
