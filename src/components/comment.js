export class Comment {
  constructor({ id, issue_id, description, commentor, created_at }) {
    this.id = id
    this.issueId = issue_id
    this.description = description
    this.commentor = commentor
    this.createdDate(created_at)
  }

  // Set date to locale format and /mm/dd/yyyy
  createdDate(created_at) {
    this.createdDate = Intl.DateTimeFormat().format(new Date(created_at));
  }
}