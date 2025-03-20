async function getData(res) {
    var data = await fetch(`https://dummyjson.com/users`).then(res=> {return res.json()});
    return 
}