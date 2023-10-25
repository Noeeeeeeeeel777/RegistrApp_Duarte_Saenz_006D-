export interface Users{
    id: number,
    username: string,
    rut: string,
    correo: string,
    password: string,
    asignatura1: string,
    asignatura2: string,
    anioAcademico1: number,
    semestre1: boolean,
    horasSemanales1: number,
    anioAcademico2: number, 
    semestre2: boolean,
    horasSemanales2: number
}

export interface IUsers {
    username: string,
    rut: string,
    correo: string,
    password: string,
    asignatura1: string,
    asignatura2: string,
    anioAcademico1: number,
    semestre1: boolean,
    horasSemanales1: number,
    anioAcademico2: number, 
    semestre2: boolean,
    horasSemanales2: number
}

export interface Books {
    id: number,
    titulo: string,
    autor: string,
    anio: number,
    descripcion: string,
    imagen: string
}