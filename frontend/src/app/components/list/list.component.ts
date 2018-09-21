import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    // this.issueService.getIssues().subscribe((issues) => {
    //   console.log(issues);
    // });
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested: ');
      console.log(this.issues);
    });
  }

  editIssue(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id: number) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

}
