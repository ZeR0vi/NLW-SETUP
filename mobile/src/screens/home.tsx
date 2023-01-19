import { Inter_700Bold } from "@expo-google-fonts/inter"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { HabitDay, DAY_SIZE } from "../components/habitDay"
import { Header } from "../components/header"

import { generateDatesFromYearBeginning } from "../utils/generate-between-days"

const weekDays = ['D', 'S', 'T', 'Q' ,'Q', 'S', 'S' ]
const datesFromYearStart = generateDatesFromYearBeginning()

const minumSummaryDatesSizes = 18 * 5
const amountOffDaysToFill = minumSummaryDatesSizes - datesFromYearStart.length
 
export function Home(){
    return(
        <View style={{ flex:1, paddingHorizontal: 32, paddingTop: 64,  backgroundColor: '#09090A'}} >
            <Header/>

            <View
            
            style={{flexDirection: 'row', marginTop:24, marginBottom:8}}
            >
                {
                    weekDays.map((weekDay, i) => (
                        <Text 
                        
                        style={{width: DAY_SIZE,color: "#a1a1aa", fontSize:20, lineHeight:28, fontFamily: 'Inter_700Bold', textAlign: 'center', marginLeft:4, marginRight:4}}
                        key={`${weekDay} - ${i}`}>
                            {weekDay}
                        </Text>
                    )

                    )
                }
            </View>




                <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                >

                <View
                
                style={{flexDirection: 'row', flexWrap: 'wrap'}}
                >
           {
            datesFromYearStart.map(date =>  (
                <HabitDay
                key={date.toISOString()}
                />
            ))
           }
            </View>

            <View
                
                style={{flexDirection: 'row', flexWrap: 'wrap'}}
                >

           {
            amountOffDaysToFill > 0 && Array.from({  length: amountOffDaysToFill }).map((_, i) => (
                <View className="opacity-40"
                style={{opacity:0.4,height: DAY_SIZE ,width: DAY_SIZE,backgroundColor: "#18181b", borderRadius: 8, borderWidth:2, margin:1, borderColor: "#393942"  }}

                />
            ))
           }


           </View>
           </ScrollView>

        </View>
    )
}