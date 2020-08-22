import { ProjectsService } from './../../projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Project[];
  newProject:Project = new Project();
  editProject:Project = new Project();
  editIndex:number = null;
  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
 this.projectService.getAllProjects().subscribe(

    (response:Project[]) => {
      this.projects = response
    }



 );


  }


 onSaveClick()
 {
   this.projectService.insertProject(this.newProject).subscribe(
     (response) => {
       console.log(response);
        this.projects.push(response);
        this.newProject = {
          projectID : 0,
          projectName: "",
          teamSize: 0,
          dateOfStart:""
        };
     },
     (error) => {
        console.log(error);
     }
   )
 }


 onEditClick(event,index:number)
 {
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
 }

onUpdateClick()
{
  this.projectService.updateProject(this.editProject).subscribe(
    (response:Project) => {
      var p:Project = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects[this.editIndex] = p;


    this.editProject.projectID = null;
    this.editProject.projectName = null;
    this.editProject.dateOfStart = null;
    this.editProject.teamSize = null;


    },
    (error) =>{
      console.log(error);
    }
  )
}

onDeleteClick(event, index:number)
{
      this.projectService.deleteProject(this.projects[index].projectID).subscribe(
        (response)=>{
          this.projects.splice(index,1);
        },
        (error)=>
        {
          console.log(error);
        }
      )
}






}
