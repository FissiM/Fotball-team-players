const realMadrid = [
  {
    name: "Karim Benzema",
    number: 9,
    position: "striker",
    squad: "Real Madrid",
    abilities: {
      strike: 95,
      pass: 80,
      defend: 50,
    },
    profile: {
      image:
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg4OTI2NjgzNDU2MjE4NjI0/karim-benzema-penalty-osasuna.jpg",
      width: "350px",
      height: "400px",
      alt: "that",
    },
  },
  {
    name: "Luka Modric",
    number: 10,
    position: "Midfielder",
    squad: "Real Madrid",
    abilities: {
      strike: 70,
      pass: 90,
      defend: 50,
    },
    profile: {
      image:
        "https://cdn.givemesport.com/wp-content/uploads/2022/01/22_01_17_992eebfa7bb3b7de83484a39a3f0609d_960-1-1200x1200-c-default.jpg",
      width: "350px",
      height: "400px",
    },
  },
  {
    name: "Toni Kroos",
    number: 8,
    position: "Midfielder",
    squad: "Real Madrid",
    abilities: {
      strike: 60,
      pass: 97,
      defend: 66,
    },
    profile: {
      image:
        "https://the18.com/sites/default/files/styles/featured_mobile__621x709_/public/feature-images/20220621-The18-Image-Toni-Kroos-Real-Madrid-GettyImages-1383637571.jpg?itok=-Od-rQrC",
      width: "350px",
      height: "400px",
    },
  },
];
const manchesterCity = [
  {
    name: "Kevin DeBryne",
    number: 17,
    position: "Midfielder",
    squad: "Manchester City",
    abilities: {
      strike: 88,
      pass: 90,
      defend: 47,
    },
    profile: {
      image: "https://s.hs-data.com/bilder/spieler/gross/142263.jpg",
      width: "350px",
      height: "400px",
    },
  },
  {
    name: "Erling Haland",
    number: 9,
    position: "striker",
    squad: "Manchester City",
    abilities: {
      strike: 95,
      pass: 80,
      defend: 50,
    },
    profile: {
      image:
        "https://img.bundesliga.com/tachyon/sites/2/2020/02/GettyImages-1197908524-scaled.jpg?crop=134px,73px,1832px,1467px",
      width: "350px",
      height: "400px",
    },
  },
  {
    name: "Gabriel Jesus",
    number: 5,
    position: "Striker",
    squad: "Manchester City",
    abilities: {
      strike: 77,
      pass: 40,
      defend: 30,
    },
    profile: {
      image:
        "https://i2-prod.dailystar.co.uk/incoming/article26828289.ece/ALTERNATES/s1200c/2_GettyImages-1239070992.jpg",
      width: "350px",
      height: "400px",
    },
  },
];
const bayernMunchen = [
  {
    name: "Tomas Muler",
    number: 25,
    position: "Striker",
    squad: "Bayern Munchen",
    abilities: {
      strike: 80,
      pass: 50,
      defend: 50,
    },
    profile: {
      image:
        "https://cdn.vox-cdn.com/thumbor/5N5iAAAuT7I1lfpgps_Zo_1hlcg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23380839/1390555159.jpg",
      width: "350px",
      height: "400px",
    },
  },
  {
    name: "Robert Lewandowski",
    number: 9,
    position: "Striker",
    squad: "Bayern Munchen",
    abilities: {
      strike: 95,
      pass: 80,
      defend: 50,
    },
    profile: {
      image:
        "https://assets-fr.imgfoot.com/media/cache/1200x1200/robert-lewandowski-2122-1.jpg",
      width: "350px",
      height: "400px",
    },
  },
  {
    name: "Manuel Neuer",
    number: 1,
    position: "Goalkeeper",
    squad: "Bayern Munchen",
    abilities: {
      strike: 5,
      pass: 99,
      defend: 99,
    },
    profile: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Manuel_Neuer_850_0723.jpg/800px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_Manuel_Neuer_850_0723.jpg",
      width: "350px",
      height: "400px",
    },
  },
];

const playersDiv = document.querySelector(".players");
const players = [...manchesterCity, ...realMadrid, ...bayernMunchen];
const playersContainer = document.createElement("div");
playersContainer.setAttribute("class", "players");
document.body.appendChild(playersContainer);
console.log(players);

const playersCard = (
  playerName,
  playerNumber,
  playerSquad,
  playerPosition,
  source,
  width,
  height,
  alt,
  strikeAbility,
  passAbility,
  defendAbility
) => {
  return `
        <div class="player">
            <h2>${playerName}, ${playerNumber}</h2>
            <p>${playerSquad} - ${playerPosition}</p>
            <img src=${source} width=${width} height=${height}" alt=${alt}>
            <div class="container">
                <i>Strike</i>
                <div style=width:${strikeAbility}% class="strike hr"></div>
                <i>Pass</i>
                <div style=width:${passAbility}% class="pass hr"></div>
                <i>Defend</i>
                <div style =width:${defendAbility}% class="defend hr"></div>
            </div>
        </div>
        `;
};

players.forEach((player) => {
  const { name, number, position, squad, abilities, profile } = player;
  const { image, width, height, alt } = profile;
  const { strike, pass, defend } = abilities;

  playersContainer.innerHTML += playersCard(
    name,
    number,
    squad,
    position,
    image,
    width,
    height,
    player.name,
    strike,
    pass,
    defend,
    alt
  );
});
