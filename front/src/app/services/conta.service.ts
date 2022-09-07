import { Conta } from './../models/conta';
import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getConta(status: String = 'true'): Observable<Conta[]> {
    return this.httpClient
      .get<Conta[]>(environment.apihost + `/contas?status=` + status)
      .pipe(retry(2), catchError(this.handleError));
  }

  save(conta: Conta): Observable<Conta> {
    conta.dataCriacao = new Date();
    if (conta.status == true) {
      conta.dataPagamento = conta.dataCriacao;
    }
    return this.httpClient
      .post<Conta>(
        environment.apihost + `/contas`,
        JSON.stringify(conta),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  update(conta: Conta): Observable<Conta> {
    debugger;
    conta.dataPagamento = new Date();
    conta.status = true;
    return this.httpClient
      .put<Conta>(
        environment.apihost + `/contas` + '/' + conta.id,
        JSON.stringify(conta),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
