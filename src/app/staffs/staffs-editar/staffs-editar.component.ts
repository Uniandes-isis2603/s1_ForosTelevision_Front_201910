import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Staff} from '../staff';
import {StaffsService} from '../staffs.service';

@Component({
  selector: 'app-staffs-editar',
  templateUrl: './staffs-editar.component.html',
  styleUrls: ['./staffs-editar.component.css'],
})
export class StaffsEditarComponent implements OnInit {

  /**
   * Constructor for the component
   * @param staffsService
   * @param activateRoute
   * @param router
   */
  constructor(
      private staffsService: StaffsService,
      private activateRoute: ActivatedRoute,
      private router: Router,
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  /**
   * Identificador de staff
   */
  public id = 0;

  /**
   * Entidad de usuario
   */
  public usuario: Usuario = null;

  /**
   * Entidad que representa un usuario
   */
  staff: Staff;
  /**
   * Arrelgo de roles de usuario
   */
  roles: string[];

  /**
   * Flag de lazy load y render lista
   */
  public flagLoad = false;

  /**
   * Carga de información en el componente
   */
  private async loadData() {
    await this.staffsService.getStaff(this.id).subscribe((informacion) => {
      this.usuario = informacion;
      this.flagLoad = true;
    });
  }

  /**
   * Envia la informacion al api
   */
  actualizar(): void {
    console.log('Actualizar', this.staff);
    this.staffsService.actualizarStaff(this.staff).then(
        () => {
          this.toastrService.success('Se ha editado el staff', 'Actualizar Realizado');
          this.router.navigate(['/admin/staff/lista']);
        });
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.loadData();
    this.roles = ['ACTOR', 'DIRECTOR'];
  }

}
