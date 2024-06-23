import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window'); 
const styles = StyleSheet.create({
    headerMain:{
        height:height*0.064,
        flexDirection:'row',
        backgroundColor:'#F7D102',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerOne: {
        height: height * 0.064,
        width: '83%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerOneView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 8,
        borderLeftWidth: 2,
        borderLeftColor: '#F3F3FD',
        paddingLeft: 8,
        width: '83%',
    },
    image: {
        width: 30,
        height: 30,
    },
    headerTwo: {
        width: '20%',
        height: height * 0.064,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto',
    },
});

export default styles;
