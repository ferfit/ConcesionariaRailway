"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantillaController = void 0;
exports.plantillaController = `
import { Request, Response, NextFunction } from "express";
import { Modulo, ModuloDocument } from './Modulo.model';

export const listar = async (req: Request, res: Response): Promise<any> => {
  
 try {

    const search: any = req.query.search || null;
    const sort: string = req.query.sort?.toString() || '_id';
    const order = req.query.order?.toString() || 'desc';
    const pageString:any = req.query.page?.toString() || 0;
    const sizeString = req.query.size?.toString() || '10';
    const page = parseInt(pageString, 10)+1;
    const size = parseInt(sizeString, 10);

    let query = {};

    if (search) {
      query = { $or: [
          { nombre: new RegExp(search, 'i') }
      ]}
    }

    Modulo.paginate(query, { sort: { [sort]: order }, page, limit: size
    }, (err: any, result: any) => {


      return res.send({
          ok: true,
          msg: 'Listado',
          registros: result.docs,
          pagination: {
            
            length: result.totalDocs,
            size: result.limit,
            totalPages: result.totalPages,
            page: result.page - 1,

          }
      })
    });

  } catch (error) {
    console.log("======================================================")
    console.log("===================/Modulos========================")
    console.log(error)

    return res.status(500).send({
      ok:false,
      mensaje:"Algo salió mal.",
      alerta:'danger',
    })
  }

   
};

export const crear = async (req: any, res: Response): Promise<any> => {

  try {
    
    let data:ModuloDocument = req.body;

    //crea
    let registro = await Modulo.create(data);

    if(registro){
      return res.status(200).send({
        ok:true,
        mensaje:"Modulo creado/a con éxito.",
        alerta:'success',
        registro
      })
    }
    
  } catch (error) {
    console.log("======================================================")
    console.log("===================/Modulo/crear====================")
    console.log(error)

    return res.status(500).send({
      ok:false,
      mensaje:"Algo salió mal.",
      alerta:'danger',
    })
  }
    
};


export const actualizar = async (req: any, res: Response): Promise<any> => {
  
  try {
    const { id } = req.params;
    let  data  = req.body.registro;

    const registroActualizado = await Modulo.findByIdAndUpdate({_id:id}, data, { new: true });

    if(!registroActualizado){
        return res.status(200).json({
            ok: false,
            mensaje: "Error al actualizar Modulo.",
            alerta:'danger'
        });
    }

    return res.status(200).json({
        ok: true,
        mensaje: "Modulo actualizado/a con éxito.",
        alerta:'success',
        registroActualizado
    });

  } catch (error) {
    console.log("======================================================")
    console.log("===================/Modulo/actualizar===============")
    console.log(error)

    return res.status(500).send({
      ok:false,
      mensaje:"Algo salió mal.",
      alerta:'danger',
    })
  }   
};

export const eliminar = async (req: any, res: Response) => {
  
  try {
      const { id } = req.params;

      const registro = await Modulo.findByIdAndDelete(id);

      if(!registro){
        return res.json({
          ok: false,
          mensaje: "Modulo no encontrado/a.",
        });
      }

      return res.status(200).json({
        ok: true,
        mensaje: "Modulo eliminado/a con éxito.",
      });
    
  } catch (error) {
    console.log("======================================================")
    console.log("===================/Modulo/eliminar===============")
    console.log(error)

    return res.send({
      ok:false,
      mensaje:"Algo salió mal.",
      alerta:'danger',
    })
  }
}
`;
//# sourceMappingURL=controller.js.map