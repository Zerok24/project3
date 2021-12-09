export const Action = Object.freeze({
    LoadAllData: "LoadAllData",
    LoadPost: "LoadPost",
    IsProgressing: 'IsProgressing',
    StopProgressing: 'StopProgressing',
});


export function loadAllData(data){
    return { type: Action.LoadAllData, payload: data };

}

export function loadPost(post){
    return { type: Action.LoadPost, payload: post };
}

function showProgress()
{
    return {type: Action.IsProgressing, payload: true};
}

function hideProgress()
{
    return {type: Action.StopProgressing, payload: false};
}


export function fetchAllData(){
    return dispatch =>{
        dispatch(showProgress());
        fetch("https://project2.bunguiunorales.me:8443/posts")
        .then(response => response.json())
        .then(data => {
            dispatch(loadAllData(data));
            dispatch(hideProgress());
        });

    }
}


export function fetchPost(postID){

    return dispatch =>{
        dispatch(showProgress());
        fetch(`https://project2.bunguiunorales.me:8443/posts/${postID}`)
        .then(res => res.json())
        .then(post =>{ 
            dispatch(loadPost(post));
            dispatch(hideProgress());
        }) ;

    }

}

