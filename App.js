import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Exercise #1
// const App = () => {
//   return (
//       <View>
//         <Text style={{ fontSize: 24 }}>RP Values</Text>
//         <Text style={{ color: 'green' }}>Excellence</Text>
//         <Text style={{ backgroundColor: 'yellow'}}>Customer-Centric</Text>
//         <Text stlye={{ fontStyle: 'italic' }}>Integrity</Text>
//         <Text style={{ textAlign: 'center' }}>Teamwork</Text>
//         <Text style={{ color: 'white', backgroundColor: 'black' }}>Enterprising</Text>
//       </View>
//   )
// }

// Exercise #2
// const App = () => {
//     return (
//         <View>
//             <View style={ styles.greenBox }>
//             <Text style={[ styles.boxText, styles.title ]}>Who Are We</Text>
//             </View>
//             <View style={ styles.greenBox }>
//             <Text style={[ styles.boxText, styles.title ]}>Our People</Text>
//             </View>
//             <View style={ styles.greenBox }>
//             <Text style={[ styles.boxText, styles.title ]}>Our Campus</Text>
//             </View>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     greenBox: {
//         width: 100,
//         height: 100,
//         marginTop: 30,
//         backgroundColor: 'green',
//         borderWidth: 1,
//         borderColor: 'black'
//     },
//
//     boxText: {
//         textAlign: 'center',
//         color: 'white'
//     },
//
//     title: {
//         fontWeight: 'bold'
//     }
// });

// Exercise #3A, #3B, #3C, #3D & #3E
// const App = () => {
//     return (
//         <View style={ styles.Parent }>
//                 <Text style={[ styles.Child, styles.childOne ]}>Child One</Text>
//                 <Text style={[ styles.Child, styles.childTwo ]}>Child Two</Text>
//                 <Text style={[ styles.Child, styles.childThree ]}>Child Three</Text>
//         </View>
//     )
// }
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1, // Exercise #3B
//         flexDirection: 'column', // Exercise #3B
//         // flexDirection: 'row',
//         backgroundColor: '#F5FCFF',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         marginTop: 50,
//         // justifyContent: "flex-start", // Exercise #3E
//         // justifyContent: "flex-end", // Exercise #3E
//         // justifyContent: 'space-evenly', // Exercise #3E
//         justifyContent: 'space-between', // Exercise #3E
//     },
//
//     Child: {
//         // flex: 1, // Exercise #3B
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24
//     },
//
//     childOne: {
//         backgroundColor: 'powderblue',
//         // maxWidth: 90, // Exercise #3C
//         // flex: 1 // Exercise #3D
//     },
//
//     childTwo: {
//         backgroundColor: 'skyblue',
//         // flex: 2 // Exercise #3D
//     },
//
//     childThree: {
//         backgroundColor: 'steelblue',
//         // maxHeight: 120, // Exercise #3C
//         // flex: 3 // Exercise #3D
//     }
// });

// Exercise 4
const App = () => {
    return (
        <View style={styles.Parent}>
            <View style={[styles.Child, { backgroundColor: 'lightblue'}]}><Text>Square 1</Text></View>
            <View style={[styles.Child, { backgroundColor: 'lightyellow'}]}><Text>Square 2</Text></View>
            <View style={[styles.Child, { backgroundColor: 'lightpink'}]}><Text>Square 3</Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    Parent: {
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    Child: {
        width: 80,
        height: 80
    }
});

export default App;
