import CalculatorButton from '@/components/CalculatorButton'
import { ThemeText } from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {

    const { 
        formula, 
        prevNumber, 
        buildNumber, 
        clean, 
        toggleSign, 
        deleteLast,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateSubResult,
        calculateResult
    } = useCalculator();

    return (
        <View style={globalStyles.calculatorContainer}>

            { /* Resultados */}

            <View style={{ paddingHorizontal: 20, marginBottom: 0 }}>
                <ThemeText>{ formula }</ThemeText>
                <ThemeText variant='h2'>
                    {formula === prevNumber ? (
                        <ThemeText variant='h2'> </ThemeText>
                    ) : (
                        <ThemeText variant='h2'>{ prevNumber }</ThemeText>
                    )}
                </ThemeText>
            </View>

            { /* Botones */}
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='C'
                    blackText
                    color={Colors.lightGray}
                    onPress={(label) => clean()} />
                <CalculatorButton
                    label='+/-'
                    blackText
                    color={Colors.lightGray}
                    onPress={(label) => toggleSign()} />
                <CalculatorButton
                    label='del'
                    blackText
                    color={Colors.lightGray}
                    onPress={(label) => deleteLast()} />
                < CalculatorButton
                    label='÷'
                    color={Colors.orange}
                    onPress={(label) => divideOperation()} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton
                    label='7'
                    onPress={(label) => buildNumber(label)} />
                <CalculatorButton
                    label='8'
                    onPress={(label) => buildNumber(label)} />
                <CalculatorButton
                    label='9'
                    onPress={(label) => buildNumber(label)} />
                < CalculatorButton
                    label='X'
                    color={Colors.orange}
                    onPress={(label) => multiplyOperation()} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton
                    label='4'
                    onPress={(label) => buildNumber(label)} />
                <CalculatorButton
                    label='5'
                    onPress={(label) => buildNumber(label)} />
                <CalculatorButton
                    label='6'
                    onPress={(label) => buildNumber(label)} />
                < CalculatorButton
                    label='-'
                    color={Colors.orange}
                    onPress={(label) => subtractOperation()} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton
                    label='1'
                    onPress={(label) => buildNumber(label)} />
                <CalculatorButton
                    label='2'
                    onPress={(label) => buildNumber(label)} />
                <CalculatorButton
                    label='3'
                    onPress={(label) => buildNumber(label)} />
                < CalculatorButton
                    label='+'
                    color={Colors.orange}
                    onPress={(label) => addOperation()} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton
                    label='0'
                    dobuleSized
                    onPress={(label) => buildNumber(label)} />
                <CalculatorButton
                    label='.'
                    onPress={(label) => buildNumber(label)} />
                < CalculatorButton
                    label='='
                    color={Colors.orange}
                    onPress={(label) => calculateResult()} />
            </View>
        </View>
    )
}

export default CalculatorApp