import { Training } from './../models/training';
import { Injectable } from '@angular/core';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  //private URL = "http://back.cristobaljjg.com/"

  async getTrainings() {
    return await Axios.get("https://back.cristobaljjg.com/trainings");
    //return await Axios.get("http://127.0.0.1:8000/trainings");
  }

  async addTraining(training: Training) {
    const body = {
      fecha: training.date,
      duracion: training.time,
      calorias: training.calories
    }
    return await Axios.post("https://back.cristobaljjg.com/training/new/", body);
    //return await Axios.post("http://127.0.0.1:8000/training/new/", body);
  }
}
