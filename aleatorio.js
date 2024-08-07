const nomes = ["Hygor", "Guilherme", "Alison", "Marcelo", "Amanda", "Felipe", "Bianca"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)


