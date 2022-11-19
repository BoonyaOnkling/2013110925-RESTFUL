const user ={
    name : "Boonyanutch",
    nickname : "Pare",
    hobby : "Sleep",
    address : "ladplaw",
    province :{
        province : "Bangkok",
        postcode : 10240
    }
} 

const {nickname,hobby,province:{postcode}} = user;
    
const showData = () => {
    let info1 = 'My name is '
    let info2 = 'MY Hobby is '
    let info3 = 'and My postcode is '
    return `${info1} ${nickname} ${info2} ${hobby} ${info3} ${postcode}`

}
console.log(showData())
