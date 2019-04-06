import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Usuario} from '../usuario';

@Component({
    selector: 'app-usuario-edit',
    templateUrl: './usuario-edit.component.html',
    styleUrls: ['./usuario-edit.component.css'],
})
export class UsuarioEditComponent implements OnInit {

    public id = 0;
    public roles: string[];
    public usuario: Usuario;
    /**
     * Flag de lazy load y render lista
     */
    public flagLoad = false;

    constructor(activateRoute: ActivatedRoute,
                private router: Router,
                private apiService: ApiService) {
        this.id = activateRoute.snapshot.params['id'];
    }

    private async loadData() {
        await this.apiService.getUsuario(this.id).subscribe(
            (informacion) => {
                this.usuario = informacion;
                this.flagLoad = true;
            });
    }

    ngOnInit() {
        this.loadData();
        this.roles = ['ADMINISTRADOR', 'USUARIO'];
    }

    actualizar() {
        this.apiService.actualizarUsuario(this.usuario);
        this.router.navigate(['/admin/usuario/lista']);
    }

}
