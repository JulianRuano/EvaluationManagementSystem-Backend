export interface Period {
  readonly _id?: string;
  name:string,
  year:string,
  semester:number,
  startDate:Date,
  endDate:Date
}

export enum DocentType {
  TC = "Tiempo Completo",
  Planta = "Planta",
  Catedra = "Cátedra",
  Otro="Otro",
}

export enum EducatorRole {
  Docente = "Docente",
  Decano = "Decano",
  Coordinador = "Coordinador",
}

export interface Educator {
  readonly _id?: string;
  identification:string,
  email:string,
  password:string,
  isActive:boolean
  idType:string,
  docentType:DocentType,
  title:string,
  firstName:string,
  lastName:string,
  joinDate:Date,
  picture:string,
  notifications:string[],
  labours:string[],
  role:EducatorRole | string,
  autoEvaluations:string[]
}

export interface Notification{
  readonly _id?: string;
  title:string,
  content:string,
  date:Date,
  read:boolean,
}

export interface AutoEvaluation{
  readonly _id?: string;
  state:string,
  puntuation:number,
  date:Date,
  evaluator:Educator,
  evaluated:Educator,
  results:string,
  suggestions?:string,
  act?:boolean,
  observation?:string,
  labour:Labour,
  evidencesLink:string,
  period:Period
}

export interface Labour{
  readonly _id?: string;
  labourType:LabourType,
  assignedHours:number
  isActive:boolean,
  nameWork:string,
}

export interface LabourType{
  readonly _id?: string;
  idLabourType:number,
  code:string,
  description:string,
  toObject(): any;
}