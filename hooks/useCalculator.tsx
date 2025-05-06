import { useEffect, useRef, useState } from "react";


enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'X',
    divide = '÷',
}

export const useCalculator = () => {
    
    const [formula, setFormula] = useState<string>('0');
    const [number, setNumber] = useState<string>('0');
    const [prevNumber, setPrevNumber] = useState<string>('0');

    const lastOperation = useRef<Operator>(undefined);

    useEffect(() => {
        // TODO: Calcular subresultado
        setFormula(number)
    }, [number])

    const buildNumber = (numberString: string) => {
        if (numberString === '.' && formula.includes('.')) {
            return;
        }

        if (numberString.startsWith('0') || numberString.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }
        }

        if (formula === '0' && numberString !== '.') {
            setNumber(numberString);
        } else {
            setNumber(formula + numberString);
        }
    }

    return {
        // Props
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
    }
  
}