export class Boolean {
    static AND(a: boolean, b: boolean): boolean {
        return a && b;
    }
    static OR(a: boolean, b: boolean): boolean {
        return a || b;
    }
    static XOR(a: boolean, b: boolean): boolean {
        return a !== b;
    }
    static NOT(a: boolean): boolean {
        return !a;
    }
    static NAND(a: boolean, b: boolean): boolean {
        return !(a && b);
    }
    static NOR(a: boolean, b: boolean): boolean {
        return !(a || b);
    }
    static XNOR(a: boolean, b: boolean): boolean {
        return a === b;
    }
}

export class BoolValue {
    static VALUE(a: boolean): number {
        return a ? 1 : 0;
    }
}

export class BoolMatriz {
    static producto(a: number, b: number): number {
        let value = 0;
        if (a * b === 1) {
            value = 1;
        }
        return value;
    }

    static suma(a: number, b: number): number {
        let value = 0;
        if (a + b >= 1) {
            value = 1;
        }
        return value;
    }
    static orMatrices(matrizA: number[][], matrizB: number[][]): number[][] {
        let nuevaMatriz: number[][] = [];
        for (let i = 0; i < matrizA.length; i++) {
            for (let j = 0; j < matrizB.length; j++) {
                nuevaMatriz[i][j] = this.suma(matrizA[i][j], matrizB[i][j]);
            }
        }
        return nuevaMatriz;
    }

    static andMatrices(matrizA: number[][], matrizB: number[][]): number[][] {
        let nuevaMatriz: number[][] = [];
        for (let i = 0; i < matrizA.length; i++) {
            for (let j = 0; j < matrizB.length; j++) {
                nuevaMatriz[i][j] = this.producto(matrizA[i][j], matrizB[i][j]);
            }
        }
        return nuevaMatriz;
    }

    static sameMatrices(matrizA: number[][], matrizB: number[][]): boolean {
        let same: boolean = true;

        for (let i = 0; i < matrizA.length; i++) {
            for (let j = 0; j < matrizA.length; j++) {
                if (matrizA[i][j] !== matrizB[i][j]) {
                    same = false;
                    break;
                }
            }
        }

        return same;
    }

    static matrizAlCuadrado(matriz: number[][]): number[][] {
        let matrizResultante: number[][] = [];
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz.length; j++) {
                let sum = 0;
                let temp = 0;
                for (let k = 0; k < matriz.length; k++) {

                    sum += this.producto(matriz[i][temp], matriz[k][j]);

                    if (sum === 1) {
                        break;
                    }
                }
                matrizResultante[i][j] = sum;
            }
        }
        return matrizResultante;
    }

    static isTransitiva(matriz: number[][]): boolean {
        let transitiva: boolean = false;
        let matrizB = this.orMatrices(this.matrizAlCuadrado(matriz), matriz);

        if (this.sameMatrices(matriz, matrizB)) {
            transitiva = true;
        }

        return transitiva;
    }
}

export class Results {
    static isReflexiva(matriz: number[][]): boolean {
        let esReflexiva: boolean = true;
        let i = 0;
        while (esReflexiva && i < matriz.length) {
            if (matriz[i][i] !== 1) {
                esReflexiva = false;
            }
            i++;
        }
        return esReflexiva;
    }
    static esSimetrica(matriz: number[][]): boolean {
        let esSimetrica: boolean = true;
        let i = 0;
        while (esSimetrica && i < matriz.length) {
            let j = 0;
            while (esSimetrica && j < matriz.length) {
                if (i !== j && matriz[i][j] !== matriz[j][i]) {
                    esSimetrica = false;
                }
                j++;
            }
            i++;
        }
        return esSimetrica;
    }

    static esAntisimetrica(matriz: number[][]): boolean {
        let esAntisimetrica: boolean = true;
        let i = 0;
        while (esAntisimetrica && i < matriz.length) {
            let j = 0;
            while (esAntisimetrica && j < matriz.length) {
                if (i !== j && matriz[i][j] === 1 && matriz[j][i] === 1) {
                    esAntisimetrica = false;
                }
                j++;
            }
            i++;
        }
        return esAntisimetrica;
    }

    static esTransitiva(matriz: number[][]): boolean {
        let esTransitiva: boolean = true;
        let i = 0;
        while (esTransitiva && i < matriz.length) {
            let j = 0;
            while (esTransitiva && j < matriz.length) {
                if (matriz[i][j] === 1) {
                    let k = 0;
                    while (esTransitiva && k < matriz.length) {
                        if (matriz[j][k] === 1 && matriz[i][k] !== 1) {
                            esTransitiva = false;
                        }
                        k++;
                    }
                }
                j++;
            }
            i++;
        }
        return esTransitiva;
    }
}


export const resultados = (matriz: number[][]) => {
    console.log("Reflexiva: " + Results.isReflexiva(matriz));
    console.log("Simetrica: " + Results.esSimetrica(matriz));
    console.log("Antisimetrica: " + Results.esAntisimetrica(matriz));
    console.log("Transitiva: " + Results.esTransitiva(matriz));
    console.log("Transitiva: " + BoolMatriz.isTransitiva(matriz));
}