function getEmbedLink(ytbLink){
    let ytbCode = ytbLink.split('=')[1];
    return `https://www.youtube.com/embed/${ytbCode}`;
}

let input = document.getElementById("input");
let embed = document.getElementById("embed");

let playButton = document.getElementById("playbtn");
playButton.addEventListener("click", (event) => {
    let ytbLink = input.value;
    embed.src = getEmbedLink(ytbLink);
    console.log(getEmbedLink(ytbLink));
});
