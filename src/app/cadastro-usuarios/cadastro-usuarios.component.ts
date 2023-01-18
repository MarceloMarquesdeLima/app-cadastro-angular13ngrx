import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../Models/UsuarioModel';
import { UsuarioService } from '../Repository/UsuarioService';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = {id: 0, nome: '', idade: 0, perfil: ''};

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
  addUsuario() {

    if (this.model.id == 0) {
      console.log('cadastra',this.model);
      // cadastra
      this.usuarioService.addUsuario(this.model).subscribe();
      //this.store.dispatch(fromUsuariosAction.CreateUsuario({payload:this.model}));

    }
    else {
      // atualizar
      //console.log('atualizar',this.model);
      //this.store.dispatch(fromUsuariosAction.UpdateUsuario({payload:this.model}));
    }
  }

}
