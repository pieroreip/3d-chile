import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class DbSqlService {
  db:SQLiteObject;
  constructor(private sql:SQLite) { }

  crearBaseDatos(){
    this.sql.create({
      name:'3dgallery.db',
      location:'default'
    }).then((db:SQLiteObject)=>{
      this.db=db;
      console.log('base de datos creada');
    }).catch(e=>{
      console.log(JSON.stringify(e));
    })
  }
  crearTabla(){
    /* 
        nombre:string,
    descripcion:string,
    precio:number,
    id:string,
    imagen:string
    */
    const query=`create table if not exist productos(
      nombre varchar(20), descripcion varchar(200), precio number(10),
      id varchar(20), imagen varchar(300))
      )`;

    this.db.executeSql(query,[]).then((res)=>{
      console.log('tabla creada');
    }).catch(e=>{
      console.log(JSON.stringify(e));
    })
  }

  insertarDatos(prod:any){
    /* 
        nombre:string,
    descripcion:string,
    precio:number,
    id:string,
    imagen:string
    */
    const query=`
    insert into productos values(${prod.nombre},${prod.descripcion},${prod.precio},${prod.id},${prod.imagen})
    `;
    this.db.executeSql(query,[]).then((res)=>{
      console.log('se inserto los datos');
    }).catch(e=>{
      console.log(JSON.stringify(e));
    })
  }

  obtenerDatos(){
    let array=[]
    const query=`
    select * from productos
    `;
    this.db.executeSql(query,[]).then((res)=>{
      for(let x=0;x<res.rows.length;x++){
        array.push({
          nombre:res.rows.item(x).nombre,
          descripcion:res.rows.item(x).descripcion,
          precio:res.rows.item(x).precio,
          id:res.rows.item(x).id,
          imagen:res.rows.item(x).imagen
        })
      }
       
    }).catch(e=>{
      console.log(JSON.stringify(e));
    })
    
  }

  eliminarDatos(prod:any){
    const query=`delete from productos where id=${prod.id}`;
    this.db.transaction(()=>{
      this.db.executeSql(query,[]).then((res)=>{
        console.log('se elimino producto');
      }).catch(e=>{
        console.log(JSON.stringify(e));
      })
      
    }).then((res)=>{
      console.log('transaccion hecha');
    }).catch(e=>{
      console.log(JSON.stringify(e));
    })
  }

  modificarDatos(prod:any){
    const query=`
    update productos set nombre=?, descripcion=?, precio=? where id=?
    `;
    this.db.transaction(()=>{
      this.db.executeSql(query,[prod.nombre,
        prod.descripcion,
        prod.precio,
        prod.id]).then((res)=>{
          console.log('datos modificados');
        }).catch(e=>{
          console.log(JSON.stringify(e));
        })
    }).then((res)=>{
      console.log('transaccion hecha');
    }).catch(e=>{
      console.log(JSON.stringify(e));
    })
  }
}
