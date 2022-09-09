let is_ok = true

let customFetch = (time, task) => {
    return new Promise ((res, rej) =>{
        if (is_ok) {
            setTimeout(() => {
                res(task)
            }, time);
        } else {
            rej("error");
        }
    })
}

export default customFetch;