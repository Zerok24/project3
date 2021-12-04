export const Action = Object.freeze({
    LoadAllData: "LoadAllData",
    LoadPost: "LoadPost",
    // LoadAlbums: "LoadAlbums",
    // LoadTracks: "LoadTracks",
});


export function loadAllData(data){
    // console.log("here!");
    return { type: Action.LoadAllData, payload: data };

}

export function LoadPost(post){
    return { type: Action.LoadPost, payload: post };
}


export function fetchAllData(){
    return dispatch =>{

        fetch("https://project2.bunguiunorales.me:8443/posts")
        .then(response => response.json())
        .then(data => dispatch(loadAllData(data)));

    }
}



export function fetchPost(postID){

    return dispatch =>{

        fetch(`https://project2.bunguiunorales.me:8443/posts/${postID}`)
        .then(res => res.json())
        .then(post => dispatch(LoadPost(post)) ) ;

    }

}

