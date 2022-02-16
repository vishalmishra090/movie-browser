export const getDirectorsNameList = (crew=[]) => {
    return crew.reduce((arrAcc, member) => {
        if(member.job === "Director"){
            arrAcc.push(member.name)
        }
        return arrAcc
    },[])
}

export const getActorsNameList = (cast=[]) => {
    return cast.reduce((arrAcc, member) => {
        arrAcc.push(member.name)
        return arrAcc
    },[])
}