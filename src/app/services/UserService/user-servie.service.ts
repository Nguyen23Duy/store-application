import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/RegiserUser';
import axios from 'axios';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class UserServieService {

  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  registerUser(registerUser: User): Promise<any> {

    return axios.post("/register", {
      firstName: registerUser.firstName,
      lastName: registerUser.lastName,
      userName: registerUser.userName,
      email: registerUser.email,
      phoneNumber: registerUser.phoneNumber,
      password: registerUser.password})
    .then(response => {
      console.log("Registration successful:", response);
      return response.data.pipes;
    })
    .catch(error => {
      console.error("Registration failed:", error);
      throw error; 
    });
  }

  loginUser(loginUser: User) : Promise<any> {
    return axios.post("/login", {
      userName: loginUser.userName,
      password: loginUser.password}).
      then(response => {
        console.log("Registration successful:", response);
        return response.data;
      })
      .catch(error => {
        console.error("Registration failed:", error);
        throw error; 
      });
  }

}
