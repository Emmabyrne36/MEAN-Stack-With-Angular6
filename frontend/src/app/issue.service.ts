import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getIssues() {
    return this.httpClient.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.httpClient.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title: string, responsible: string, description: string, severity: string) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.httpClient.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.httpClient.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id: number) {
    return this.httpClient.get(`${this.uri}/issues/delete/${id}`);
  }
}
