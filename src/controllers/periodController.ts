//Pide los datos a una api externa
//Que se encuentra en el siguiente link: http://127.0.0.1:8000/periodos
import { Response } from "express";

export class PeriodController {
  static async test(_req: any, res: Response) {
    return res.status(200).json({
      ok: true,
    });
  }
}