import {Product} from '../smartphone';

export class Phone implements Product{
  anio: number;
  estado: string;
  gama: string;
  img: string;
  marca: string;
  modelo: string;

    constructor(anio: number, estado: string, gama: string, img: string, marca: string, modelo: string){
        this.anio = anio;
        this.estado = estado;
        this.gama = gama;
        this.img = img;
        this.marca = marca;
        this.modelo = modelo;
    }

    public getProduct(): Product {
        return {
            anio: this.anio,
            estado: this.estado,
            gama: this.gama,
            img: this.img,
            marca: this.marca,
            modelo: this.modelo
        }
    }
}
