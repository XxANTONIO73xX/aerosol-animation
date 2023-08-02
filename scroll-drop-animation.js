const drop = document.getElementById("drop");
const drop2 = document.getElementById("dropSecond");

window.onscroll = function(e){
    height = this.scrollY + 100;
    drop.style.height = height + 'px';
    
    realHeigth = drop2.style.height;

    if(this.scrollY < 50){
        height2 = this.scrollY + 150;
        console.log(height2)
        drop2.style.height = height + 'px';
    }
}