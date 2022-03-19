import {v4 as uuidv4} from 'uuid';

function chillhop(){
    return [
        {
            name:"Beaver Creek" ,
            cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg" ,
            artist:"Aso, Middle School, Aviino" ,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=31498",
            color:["#FABA73","#2C9D95"] ,
            id: uuidv4(),
            active: true,
        },
        {
            name:"Nightfall" ,
            cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg" ,
            artist:"Aiguille" ,
            audio:"https://mp3.chillhop.com/serve.php/?mp3=31498" ,
            color:["#F77B7E","#7767A6"] ,
            id: uuidv4(),
            active: false,
        },
        {
            name:"Prom Night" ,
            cover:"https://chillhop.com/wp-content/uploads/2020/07/46e61c111732cc3d72966225a1121a00bc693266-1024x1024.jpg" ,
            artist:"j'san, Nymano" ,
            audio:"https://mp3.chillhop.com/serve.php/?mp3=8487" ,
            color: ["#EF552E","#A35A2D"],
            id: uuidv4(),
            active: false,
        },
        {
            name:"Keep Going" ,
            cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg" ,
            artist:"Swørn" ,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9177",
            color:["#BD4177","#48134C"] ,
            id: uuidv4(),
            active: false,
        },
        //  
        // {
        //     name: ,
        //     cover: ,
        //     artist: ,
        //     audio: ,
        //     color: ,
        //     id: uuidv4(),
        //     active: false,
        // },
        // {
        //     name: ,
        //     cover: ,
        //     artist: ,
        //     audio: ,
        //     color: ,
        //     id: uuidv4(),
        //     active: false,
        // },
    ]
}

export default  chillhop;