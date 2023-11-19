//Interface para edutacatorController
import { Request,Response } from 'express';

export interface IEducatorController {
    getEducatorById(req: Request, res: Response): Promise<void>;
    createEducator(req: Request, res: Response): Promise<any>;
    updateEducator(req: Request, res: Response): Promise<void>;
    deleteEducator(req: Request, res: Response): Promise<void>;
}