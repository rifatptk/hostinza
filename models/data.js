const ROLE ={
    ADMIN : 'admin',
    BASIC :'basic'
}


export const data ={
    ROLE: ROLE,
    users:[
        {id:1,name: "kyle", role : ROLE.ADMIN},
        {id:2,name: "bimp", role : ROLE.BASIC},
        {id:3,name: "Joe", role : ROLE.BASIC}
    ],
    users:[
        {id:1,name: "kyle's project", userId : 1},
        {id:2,name: "bimp project", userId : 1},
        {id:3,name: "Joes project", userId : 1}
    ],

}