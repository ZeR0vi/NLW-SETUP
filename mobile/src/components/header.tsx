import { View, TouchableOpacity, Text, StyleSheet } from "react-native";



import Logo from '../assets/logo.svg';

import colors from 'tailwindcss/colors'

import { Feather } from '@expo/vector-icons'
import { Inter_600SemiBold } from "@expo-google-fonts/inter";

export function Header(){
    return(
        <View style={{ width: '100%', alignItems: "center", flexDirection: 'row', justifyContent: 'space-between'  }} >
            <Logo/>
            
            <TouchableOpacity style={{flexDirection: "row", height: 44,borderWidth: 1, borderColor: '#8B5CF6' , borderRadius: 8, alignItems: 'center', paddingLeft:16, paddingRight:16 }}>
            <Feather
            name="plus"
            color={colors.violet[500]}
            size={20}
            />

            <Text style={{color: "white", marginLeft: 12, fontSize:16, lineHeight:24, marginRight: 12 }}  >
                Novo
            </Text>

        </TouchableOpacity> 
        </View>
    )
}