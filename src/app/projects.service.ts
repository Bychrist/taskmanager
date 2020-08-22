import { Project } from './project';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
 url:string = "https://localhost:44354/";
  constructor(private httpClient:HttpClient) { }

 getAllProjects() : Observable<Project[]>
 {
      return this.httpClient.get<Project[]>( this.url + "api/project/");
 }

 insertProject(newProject:Project) : Observable<Project>
 {
    return this.httpClient.post<Project>(this.url + "api/project/",newProject);
 }

 
 updateProject(updateProject:Project) : Observable<Project>
 {
    return this.httpClient.put<Project>(this.url + "api/project/",updateProject);
 }


 deleteProject(index:number) : Observable<Project>
 {
   return this.httpClient.delete<Project>(this.url + "api/project/" + index);
 }

}
