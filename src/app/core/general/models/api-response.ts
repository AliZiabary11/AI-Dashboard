export class ApiResponse<T> {
  constructor(public data?: T, public errors?: any, public statusCode?: any) {
    this.data = data;
    this.errors = errors;
    this.statusCode = statusCode;
  }
}

