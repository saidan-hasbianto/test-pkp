import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { LogErrorHandleService } from 'src/app/services/log-error-handle.service';
import { ProductHeader } from '../models/product-header';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.apiUrl;  // URL to web api

  constructor(
    private http: HttpClient,
    private logErrorHandle: LogErrorHandleService

  ) { }

  getAll(): Observable<ProductHeader> {
    return this.http.get<ProductHeader>(this.url, httpOptions).pipe(
      catchError(this.logErrorHandle.handleError<ProductHeader>('getAll'))
    );
  }

  getDetail(id: string): Observable<Product> {
    return this.http.get<Product>(this.url + "/" + id, httpOptions).pipe(
        catchError(this.logErrorHandle.handleError<Product>('getDetail'))
      );
  }

  searchProd(value: string): Observable<ProductHeader> {
    return this.http.get<ProductHeader>(this.url + "/search?q=" + value, httpOptions)
      .pipe(
        catchError(this.logErrorHandle.handleError<ProductHeader>('searchProd'))
      );
  }
}
