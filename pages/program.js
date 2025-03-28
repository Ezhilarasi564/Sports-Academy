const programData = {
    atheletic :{
        title : "ATHELETIC",
        description : "Athletics encompasses a diverse range of sports, from track and field to team sports like basketball and soccer. It celebrates human physical prowess, endurance, and skill. Athletes train rigorously, pushing boundaries of strength and speed. Through competition, they inspire and captivate, showcasing the heights of human potential and the thrill of victory.",
        imgURL : "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    archery :{
        title : "ARCHERY",
        description : `
        Archery, an ancient art and sport, demands precision and focus. Archers draw bows, aiming arrows at distant targets with calculated grace. It combines physical skill, mental discipline, and Zen-like concentration. From historical battles to modern Olympics, archery remains a timeless pursuit, embodying the harmony of mind, body, and spirit.`,
        imgURL : "https://images.unsplash.com/photo-1614063896578-42b252be2010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    basketball :{
        title : "BASKETBALL",
        description : "Basketball, a globally beloved sport, thrives on teamwork, agility, and strategy. Players dribble, shoot, and defend on a hardwood court, chasing victory with every bounce. From iconic slam dunks to buzzer-beating shots, it ignites passion and camaraderie. Basketball transcends borders, uniting fans worldwide in the love of the game.",
        imgURL : "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    cricket :{
        title : "CRICKET",
        description : `
        Cricket, a sport steeped in tradition and strategy, captivates fans worldwide with its bat-and-ball gameplay. Players face off on a grass pitch, aiming to score runs and take wickets. From iconic test matches to electrifying T20 showdowns, cricket unites nations and cultures, celebrating skill, resilience, and the spirit of competition.`,
        imgURL : "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    chess :{
        title : "CHESS",
        description : "Chess, the game of kings, is a timeless test of strategy and intellect. Players maneuver pieces across a checkered board, plotting each move with foresight and calculation. It transcends language barriers, captivating minds with its depth and complexity. From casual matches to grandmaster duels, chess is a journey of endless discovery and mastery.",
        imgURL : "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    carrom :{
        title : "CARROM",
        description : "Carrom, a tabletop game of skill and precision, originates from South Asia. Players flick small wooden disks across a smooth surface, aiming to pocket them into corner pockets. It combines strategy with flicking prowess, requiring finesse and strategy. Carrom is a social pastime, fostering friendly competition and family bonding across generations.",
        imgURL : "https://images.unsplash.com/photo-1652558973183-a3f046921163?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    darts :{
        title : "DARTS",
        description : `
        Darts, a game of accuracy and skill, is played by throwing small pointed missiles at a circular target board. Players aim to hit specific numbered segments to accumulate points. It's a test of precision and concentration, often enjoyed in pubs and social gatherings. Darts is both competitive sport and leisure activity, blending camaraderie with competition.`,
        imgURL : "https://images.unsplash.com/photo-1580894328141-6f3421a182a8?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    football :{
        title : "FOOTBALL",
        description : "Football, the world's most popular sport, unites nations and cultures with its electrifying energy and passion. Played on grass fields or synthetic turf, teams compete to score goals by kicking a ball into the opponent's net. From grassroots level to elite leagues, football celebrates teamwork, skill, and the thrill of victory. It's a universal language that transcends borders, captivating billions of fans worldwide.",
        imgURL : "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    volleyball :{
        title : "VOLLEYBALL",
        description : "Volleyball, a dynamic sport played on a rectangular court, is characterized by fast-paced rallies and strategic plays. Teams aim to send a ball over a net, avoiding it touching the ground on their side. From beachfront showdowns to indoor championships, volleyball showcases athleticism, teamwork, and exhilarating spikes. It fosters camaraderie and competitive spirit, captivating players and fans alike.",
        imgURL : "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    badminton :{
        title : "BADMINTON",
        description : "Badminton, a fast-paced racket sport, combines agility, precision, and strategy. Players use lightweight racquets to hit a shuttlecock over a net, aiming to score points by landing it in the opponent's court. Whether played competitively or recreationally, badminton tests reflexes and stamina while fostering friendly competition and camaraderie.",
        imgURL : "https://images.unsplash.com/photo-1626326880051-9320471299c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    tennis :{
        title : "TENNIS",
        description : "Tennis, a globally cherished sport, thrives on power, finesse, and mental fortitude. Players wield racquets to strike a ball over a net, engaging in intense rallies across a rectangular court. From Grand Slam tournaments to local club matches, tennis captivates fans with its athleticism, strategy, and moments of brilliance.",
        imgURL : "https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    tableTennis :{
        title : "TABLE TENNIS",
        description : "Table tennis, also known as ping-pong, is a fast-paced indoor sport played on a table divided by a net. Players use small paddles to hit a lightweight ball back and forth, aiming to score points by outmaneuvering their opponent. It requires quick reflexes, precision, and strategic thinking, offering thrilling rallies and intense competition on a compact scale.",
        imgURL : "https://images.unsplash.com/photo-1611251135345-18c56206b863?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
}


const programs = document.querySelectorAll(".program-item");

let currentActiveElement = null;

programs.forEach((program)=>{
    program.addEventListener("click",(e)=>{
        if(currentActiveElement){
            currentActiveElement.classList.remove("isActive");
        }
        e.currentTarget.classList.add('isActive');
        currentActiveElement = e.currentTarget

        showProgramDetail(e.currentTarget.id)
    })
});


async function  showProgramDetail(id){
    const currentProgram = await programData[id];
    document.querySelector(".current-program").innerHTML=`<h1>${currentProgram.title}</h1><img src="${currentProgram.imgURL}"/><p>${currentProgram.description}</p>`
}

