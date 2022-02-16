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

export const sortMovieListByReleaseDate = (list) => {
    return list.sort((a, b) => {
        if(new Date(a.release_date) > new Date(b.release_date)){
            return -1
        }
        if(new Date(a.release_date) < new Date(b.release_date)){
            return 1
        }

        return 0
    })
}