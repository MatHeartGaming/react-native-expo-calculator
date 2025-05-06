import CalculatorButton from '@/components/CalculatorButton'
import { ThemeText } from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {

    const { formula, buildNumber } = useCalculator();

    return (
        <View style={globalStyles.calculatorContainer}>

            { /* Resultados */}

            <View style={{ paddingHorizontal: 20, marginBottom: 0 }}>
                <ThemeText>{ formula }</ThemeText>
                <ThemeText variant='h2'>2500</ThemeText>
            </View>

            { /* Botones */}
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='C'
                    blackText
                    color={Colors.lightGray}
                    onPress={(label) => buildNumber(label)} />
                <CalculatorButton
                    label='+/-'
                    blackText
                    color={Colors.lightGray}
                    onPress={(label) => buildNumber(label)} />
                <CalculatorButton
                    label='del'
                    blackText
                    color={Colors.lightGray}
                    onPress={(label) => buildNumber(label)} />
                < CalculatorButton
                    label='÷'
                    color={Colors.orange}
                    onPress={(label) => buildNumber(label)} />
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
                    onPress={(label) => buildNumber(label)} />
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
                    onPress={(label) => buildNumber(label)} />
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
                    onPress={(label) => buildNumber(label)} />
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
                    onPress={(label) => buildNumber(label)} />
            </View>
        </View>
    )
}

export default CalculatorApp