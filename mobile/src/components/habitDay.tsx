import { TouchableOpacity, Dimensions } from "react-native";

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32*2) / 5

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

export function HabitDay(){
    return(
        <TouchableOpacity
        className=""
        activeOpacity={0.7}
        style={{height: DAY_SIZE ,width: DAY_SIZE,backgroundColor: "#18181b", borderRadius: 8, borderWidth:2, margin:1, borderColor: "#393942"  }}
        />
    )
}