let movies=[
    {
        name:"Ms. Marvel",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat itaque impedit repellat tenetur ratione!",
        image:"images/slider 1.PNG"
    },
    {
        name:"Dr. Strange In The Multiverse Of Madness",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat itaque impedit repellat tenetur ratione!",
        image:"images/slider 2.PNG"
    },
    {
        name:"Shangchi And The Legend Of The Ten Rings",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat itaque impedit repellat tenetur ratione!",
        image:"images/slider 3.PNG"
    },
    {
        name:"Raya And The Last Dragon",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat itaque impedit repellat tenetur ratione!",
        image:"images/slider 4.PNG"
    },
    {
        name:"Luca",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat itaque impedit repellat tenetur ratione!",
        image:"images/slider 5.PNG"
    },
];
 
const carousel=document.querySelector('.caraousel');
let sliders=[];

let slideIndex=0;
 
const createSlide=()=>{
    if(slideIndex>=movies.length){
        slideIndex=0;
    }
    


    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide); 

    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    slide.className='slider';
    content.className='slide-content';
    h1.className='movie-title';
    p.className='movie-des';

    sliders.push(slide);
    if(sliders.length){
        sliders[0].style.marginLeft=`calc(-${100 * (sliders.length -2)}% - ${30 * (sliders.length -2)}px)`;
    }
    
};

for (let i=0;i<3;i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

//video-card hovering

const videoCards=[...document.querySelectorAll('.video-card')];
videoCards.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    });
});

