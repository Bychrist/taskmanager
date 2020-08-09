import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMemberSummary():any[]
  {
     var teamMemberSummary = [
      {Region: "East", TeamMembersCount:20, TemporarilyUnavailableMembers:4},
      {Region: "West", TeamMembersCount:10, TemporarilyUnavailableMembers:8},
      {Region: "North", TeamMembersCount:15, TemporarilyUnavailableMembers:1},
      {Region: "South", TeamMembersCount:12, TemporarilyUnavailableMembers:6},
     ]

     return teamMemberSummary;
  }



}
