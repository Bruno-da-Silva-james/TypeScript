export class Livro {
    titulo: string
    autor: string
    genero: string
    status: string
    constructor(status: string, titulo: string, autor: string, genero: string) {
        this.status = status
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
    }

}