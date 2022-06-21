const setofwods = [
    "This is suraj barnwal who is a nice guy.",
    "This is bharat ahujha who is currently working on the java. ",
    "This is kajal who is learning artificial intelligence."
]
const msg = document.getElementById('msg')
const typewords = document.getElementById('mywords')
const btn = document.getElementById('btn')
let startTime, EndTIme;
const playgame = () => {
    let randomnumber = Math.floor(Math.random() * setofwods.length)
    msg.innerText = setofwods[randomnumber]
    let date = new Date()
    startTime = date.getTime()
    btn.innerText = "Done"
}
const endPlay = () => {
    let date = new Date()
    endTime = date.getTime()
    let totalTime = ((endTime - startTime) / 1000)
    console.log(totalTime)

    let totalstr = typewords.value
    let wordcount = wordcounter(totalstr)
    let speed = Math.round((wordcount / totalTime) * 60)
    let finalmsg = "Your typed total at  " + speed + "  words per minutes. ."
    finalmsg = finalmsg + comparewords(msg.innerText, totalstr)
    msg.innerText = finalmsg
}
const comparewords = (str1, str2) => {
    let words1 = str1.split(" ")
    let words2 = str2.split(" ")
    let cnt = 0
    words1.forEach(function(item, index) {
        if (item == words2[index])
            cnt++
    });
    let errorwords = (words1.length - cnt)
    return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorwords + ".")
}
const wordcounter = (str) => {
    let response = str.split(" ").length
    console.log(response)
    return response
}

btn.addEventListener('click', function() {
    if (this.innerText == "Start") {
        typewords.disabled == false
        playgame();
    } else if (this.innerText == "Done") {
        typewords.disabled = true
        btn.innerText = "Start"
        endPlay()
    }
})