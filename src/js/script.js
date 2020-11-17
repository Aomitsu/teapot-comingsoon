function Sound(source, volume, loop)
{
    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function()
    {
        document.body.removeChild(this.son);
    }
    this.start = function()
    {
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    }
    this.remove = function()
    {
        document.body.removeChild(this.son);
        this.finish = true;
    }
    this.init = function(volume, loop)
    {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}

let teapot_text = document.getElementsByClassName('subtitle')[0];
let number = 0;
let teapot_sound = new Sound("src/teapot_song.mp3", 100, false);

teapot_text.addEventListener("click", () => {
    if(number === 4 ){
        teapot_text.innerHTML = "You are a teapot"
    }
    if(number === 9 ){
        teapot_text.innerHTML = "I'm a teapot"
        number = -1
        teapot_sound.start()
    }
    number += 1;
});
