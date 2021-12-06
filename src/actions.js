export const Action = Object.freeze({
    LoadAllData: "LoadAllData",
    LoadPost: "LoadPost",
    // LoadDelete: "LoadDelete",
    // LoadTracks: "LoadTracks",
});


export function loadAllData(data){
    return { type: Action.LoadAllData, payload: data };

}

export function loadPost(post){
    return { type: Action.LoadPost, payload: post };
}


export function fetchAllData(){
    return dispatch =>{

        fetch("https://project2.bunguiunorales.me:8443/posts")
        .then(response => response.json())
        .then(data => dispatch(loadAllData(data)));

    }
}

// export function fetchDelete(postID){
//     return dispatch =>{
//         fetch(`https://project2.bunguiunorales.me:8443/${postID}`)
//         .then
//     }
// }



export function fetchPost(postID){

    return dispatch =>{

        fetch(`https://project2.bunguiunorales.me:8443/posts/${postID}`)
        .then(res => res.json())
        .then(post => dispatch(loadPost(post)) ) ;

    }

}

