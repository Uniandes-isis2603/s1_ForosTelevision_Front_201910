import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Multimedia} from '../multimedia/multimedia';
import {Productora} from '../productoras/productora';
import {Produccion} from './produccion';

const API_URL = 'http://localhost:8080/s1_foros-api/api/producciones/';
const producciones_single = '';

@Injectable()
export class ProduccionesService {

    constructor(private http: HttpClient) {
    }

    /**
     * Retorna lista de producciones
     */
    getProducciones(): Observable<any> {
        return this.http.get<any>(API_URL + producciones_single);
    }

    /**
     * Retorna un producción especifico
     * @param id identificador unico de producción
     */
    getProduccion(id: number): Observable<any> {
        return this.http.get<any>(API_URL + producciones_single + `${id}`);
    }

    /**
     * Registra un nuevo producción
     * @param produccion entidad
     * @param multimedia
     * @param productora
     */
    registrarProduccion(produccion: Produccion, multimedia: Multimedia, productora: Productora): Promise<any> {
        const cuerpo = {
            nombre: produccion.nombre,
            descripcion: produccion.descripcion,
            clasificacionAudiencia: produccion.clasificacionAudiencia,
            calificacionPromedio: 0,
            multimedia,
            productora,
        };
        return this.http.post(API_URL, cuerpo).toPromise();
    }

    /**
     * Actualiza la informacion de un producción
     * @param produccion editado
     */
    actualizarProduccion(produccion: Produccion, multimedia: Multimedia, productora: Productora) {
        const cuerpo = {
            id: produccion.id,
            nombre: produccion.nombre,
            descripcion: produccion.descripcion,
            clasificacionAudiencia: produccion.clasificacionAudiencia,
            multimedia,
            productora,
        };
        return this.http.put(API_URL, cuerpo);
    }

}
