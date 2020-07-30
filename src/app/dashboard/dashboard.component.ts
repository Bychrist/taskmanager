import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  Designation:string;
  Username:string;
  NoOfTeamMembers:number;
  TotalCostAllOfProjects:number;
  PendingTasks:number;
  UpComingProjects:number;
  ProjectCost:number;
  CurrentExpenditure:number;
  AvailableFunds:number;

  Clients:string[];
  Projects:string[];
  Years:number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];
  project:string = "Project A";

  ngOnInit(): void 
  {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostAllOfProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52346;
    this.Clients = ["ABC Info Tech", "DEF Software Solutions", "GHI  Industries"];
    this.Projects = ["Project A", "Project B", "Project C", "Project D"];

   for (var i = 2019; i >=2010; i--) {
       this.Years.push(i)
     
   }

   this.TeamMembersSummary = [
     {Region: "East", TeamMembersCount:20, TemporarilyUnavailableMembers:4},
     {Region: "West", TeamMembersCount:10, TemporarilyUnavailableMembers:8},
     {Region: "North", TeamMembersCount:15, TemporarilyUnavailableMembers:1},
     {Region: "South", TeamMembersCount:12, TemporarilyUnavailableMembers:6},
   ]

  this.TeamMembers = [

    {Region:"East", Members:[
      {ID: 1, Name:"Ford",Status:"Available"},
      {ID: 2, Name:"Miller",Status:"Available"},
      {ID: 3, Name:"James",Status:"Busy"},
      {ID: 4, Name:"Jones",Status:"Busy"},
    ]},

    {Region:"West", Members:[
      {ID: 1, Name:"Ford",Status:"Available"},
      {ID: 2, Name:"Miller",Status:"Available"},
      {ID: 3, Name:"James",Status:"Busy"},
      {ID: 4, Name:"Jones",Status:"Busy"},
    ]},

    {Region:"South", Members:[
      {ID: 1, Name:"Ford",Status:"Available"},
      {ID: 2, Name:"Miller",Status:"Available"},
      {ID: 3, Name:"James",Status:"Busy"},
      {ID: 4, Name:"Jones",Status:"Busy"},
    ]},

    {Region:"North", Members:[
      {ID: 1, Name:"Ford",Status:"Available"},
      {ID: 2, Name:"Miller",Status:"Available"},
      {ID: 3, Name:"James",Status:"Busy"},
      {ID: 4, Name:"Jones",Status:"Busy"},
    ]},




  ]



  }


  onProjectChange($event)
    {
      
        if($event.target.text == "Project A")
        {
          this.ProjectCost = 2113507;
          this.CurrentExpenditure = 22450;
          this.AvailableFunds = 52436;
          this.project = "Project A";
        }
        else if($event.target.text == "Project B")
        {
          this.ProjectCost = 88923;
          this.CurrentExpenditure = 96788;
          this.AvailableFunds = 2640;
          this.project = "Project B";
        }
        else if($event.target.text == "Project C")
        {
          this.ProjectCost = 928431;
          this.CurrentExpenditure = 562;
          this.AvailableFunds = 883;
          this.project = "Project C";
        }
        else if($event.target.text == "Project D")
        {
          this.ProjectCost = 662183;
          this.CurrentExpenditure = 7721;
          this.AvailableFunds = 9811;
          this.project = "Project D";
        }



    }







}
