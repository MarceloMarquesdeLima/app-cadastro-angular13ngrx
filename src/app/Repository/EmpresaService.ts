import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmpresaModel } from '../Models/Empresa';
import { Injectable, Type } from '@angular/core';
import { DeleteEmpresa } from '../Store/empresa/empresa.action';

@Injectable({ providedIn: 'root' })
export class EmpresaService {
  constructor(private http: HttpClient) {}

  getEmpresas() {
    return this.http.get<EmpresaModel[]>('http://localhost:3000/Empresas');
  }

  getEmpresa(id: number) {
    return this.http.get<EmpresaModel>('http://localhost:3000/Empresas/' + id);
  }

  addEmpresa(record: EmpresaModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<EmpresaModel[]>(
      'http://localhost:3000/Empresas',
      JSON.stringify(record),
      { headers: headers }
    );
  }

  updateEmpresa(record: EmpresaModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<EmpresaModel[]>(
      'http://localhost:3000/Empresas/' + record.id,
      JSON.stringify(record),
      { headers: headers }
    );
  }

  deleteEmpresa(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete('http://localhost:3000/Empresas/' + id, {
      headers: headers,
    });
  }
}
