document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btn').addEventListener('click',function(){
        var files = document.getElementById("problem").target
        console.log(files.files)
    })
})
