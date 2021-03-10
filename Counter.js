import { React } from "react";
import {View, Text} from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { tambahCounter,kurangCounter } from "./redux/action";

const Counter = () => {
    const dispatch = useDispatch();
    const counter =useSelector(data=>data.counter);
    return {
        <View style ={{flex:1,alignItems:'center',justifyContent:'center',flexDirectiont:'row'}}>;
            <TouchableOpacity style={{backgroundColor:'#DDDDDDD',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}} onPress={()=>dispatch(kurangCounter)}> 
            <Text style={{fontSize:30}}>-</Text>
            </TouchableOpacity>
                <Text style={{fontSize:50,marginLeft:20,marginRight:20}}> {counter} </Text>
            <TouchableOpacity style={{backgroundColor:'#DDDDDDD',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}} onPress={()=>dispatch(tambahCounter)(counter)}> 
            <Text style={{fontSize:30}}>+</Text>
            </TouchableOpacity>    
        </View>
    }
}

export default Counter