let body = document.body;
let container = document.getElementById("container");

function NavBar() {
  let NavBar = document.createElement("div");
  NavBar.style.backgroundColor = "#121212";
  NavBar.style.margin = "0";
  NavBar.style.width = "100vw";
  NavBar.style.height = "87px";
  NavBar.style.opacity = "1";
  NavBar.style.position = "fixed";
  NavBar.style.zIndex = "10000";
  NavBar.style.display = "flex";
  NavBar.style.borderBottom = "0.1px solid #2c2c2c";

  NavBar.style.alignContent = "center";

  let Riotlogo = document.createElement("img");
  NavBar.appendChild(Riotlogo);
  Riotlogo.src =
    "Opera Snapshot_2023-07-20_150510_universe.leagueoflegends.com.png";
  Riotlogo.style.height = "100%";
  Riotlogo.style.display = "flex";
  Riotlogo.style.boxSizing = "border-box";
  Riotlogo.style.padding = "28px 0";
  Riotlogo.style.margin = "0 25px 0 45px";

  let Universe = document.createElement("div");
  NavBar.appendChild(Universe);
  Universe.style.display = "flex";
  Universe.style.alignItems = "center";
  Universe.style.justifyContent = "center";
  Universe.style.margin = "0 12px";

  let LoLogo = document.createElement("img");
  Universe.appendChild(LoLogo);
  LoLogo.src =
    "Opera Snapshot_2023-07-20_150406_universe.leagueoflegends.com.png";
  LoLogo.style.height = "100%";
  LoLogo.style.display = "flex";
  LoLogo.style.boxSizing = "border-box";
  LoLogo.style.padding = "28px 0";
  LoLogo.style.margin = "0 8px";

  let UniverseText = document.createElement("P");
  Universe.appendChild(UniverseText);
  UniverseText.textContent = "UNIVERSE";
  UniverseText.style.color = "white";
  UniverseText.style.margin = "0 8px";

  let options = [
    "CHAMPIONS",
    "REGIONS",
    "COMICS",
    "ALT UNIVERSE",
    "MAP",
    "EXPLORE",
    "SEARCH",
  ];

  let optionBox = document.createElement("div");
  optionBox.style.display = "flex";
  optionBox.style.alignItems = "center";
  optionBox.style.justifyContent = "start";
  optionBox.style.width = "1115px";

  for (let i = 0; i < options.length; i++) {
    let optionButton = document.createElement("button");
    optionButton.innerHTML = options[i];
    optionButton.style.color = "white";
    optionButton.style.backgroundColor = "#121212";
    optionButton.style.borderBottom = "0.5 solid blue";
    optionButton.style.margin = "3px";
    optionButton.style.padding = "0px 15px";
    optionButton.style.width = "max-content";
    optionButton.style.height = "100%";
    optionButton.style.border = "none";
    optionButton.style.display = "flex";
    optionButton.style.alignItems = "center";
    optionButton.style.justifyContent = "center";
    optionBox.appendChild(optionButton);
  }
  NavBar.appendChild(optionBox);

  let rightCorner = document.createElement("div");
  rightCorner.style.display = "flex";
  rightCorner.style.alignItems = "center";
  rightCorner.style.justifyContent = "center";
  rightCorner.style.margin = "0 25px";
  NavBar.appendChild(rightCorner);

  let languageButton = document.createElement("img");
  languageButton.src =
    "Opera Snapshot_2023-07-21_012300_universe.leagueoflegends.com.png";
  languageButton.style.height = "100%";
  languageButton.style.display = "flex";
  languageButton.style.boxSizing = "border-box";
  languageButton.style.padding = "28px 0";
  rightCorner.appendChild(languageButton);

  let SignInButton = document.createElement("button");
  SignInButton.innerHTML = "SIGN IN";
  SignInButton.style.color = "white";
  SignInButton.style.backgroundColor = "#80808033";
  SignInButton.style.margin = "8px";
  SignInButton.style.width = "120px";
  SignInButton.style.height = "35px";
  SignInButton.style.borderRadius = "10px";
  SignInButton.style.display = "flex";
  SignInButton.style.alignItems = "center";
  SignInButton.style.justifyContent = "center";
  SignInButton.style.border = "none";
  rightCorner.appendChild(SignInButton);

  let PlayNowButton = document.createElement("button");
  PlayNowButton.innerHTML = "PLAY NOW";
  PlayNowButton.style.backgroundColor = "rgb(44, 140, 194)";
  PlayNowButton.style.borderRadius = "10px";
  PlayNowButton.style.border = "none";
  PlayNowButton.style.margin = "8px";
  PlayNowButton.style.width = "140px";
  PlayNowButton.style.height = "35px";
  PlayNowButton.style.display = "flex";
  PlayNowButton.style.alignItems = "center";
  PlayNowButton.style.justifyContent = "center";
  rightCorner.appendChild(PlayNowButton);

  return NavBar;
}

function FilterBar() {
  let FilterBar = document.createElement("div");
  FilterBar.style.backgroundColor = "#121212";
  FilterBar.style.margin = "80px 0 0 0";
  FilterBar.style.padding = "0";
  FilterBar.style.width = "100vw";
  FilterBar.style.height = "110px";
  FilterBar.style.opacity = "1";
  FilterBar.style.position = "absolute";
  FilterBar.style.zIndex = "10000";
  FilterBar.style.display = "flex";
  FilterBar.style.boxShadow = "0 16px 16px -20px black";

  let searchBar = document.createElement("div");
  searchBar.style.height = "100%";
  searchBar.style.width = "100%";
  searchBar.style.display = "flex";
  FilterBar.appendChild(searchBar);

  let logo = document.createElement("img");
  logo.src = "content_type_icon_champion__3nwJQ.png";
  logo.style.height = "100%";
  logo.style.display = "flex";
  logo.style.boxSizing = "border-box";
  logo.style.padding = "38px 35px 38px 170px";
  searchBar.appendChild(logo);

  let searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "FIND A CHAMPION";
  searchInput.style.fontSize = "22px";
  searchInput.style.justifyContent = "center";
  searchInput.style.backgroundColor = "#121212";
  searchInput.style.border = "none";
  searchBar.appendChild(searchInput);

  let Sorting = document.createElement("div");
  Sorting.style.width = "100%";
  Sorting.style.height = "100%";
  Sorting.style.margin = "0 0 0 350px";
  Sorting.style.display = "flex";
  FilterBar.appendChild(Sorting);

  let sortlogo = document.createElement("img");
  sortlogo.src =
    "Opera Snapshot_2023-07-21_015408_universe.leagueoflegends.com.png";
  sortlogo.style.height = "100%";
  sortlogo.style.display = "flex";
  sortlogo.style.boxSizing = "border-box";
  sortlogo.style.padding = "43px 20px 43px 100px";
  Sorting.appendChild(sortlogo);

  let sortingButton = document.createElement("button");
  sortingButton.innerHTML = "SORTING BY : A - Z";
  sortingButton.style.color = "white";
  sortingButton.style.height = "100%";
  sortingButton.style.width = "366px";
  sortingButton.style.margin = "0";
  sortingButton.style.padding = "0";
  sortingButton.style.backgroundColor = "#121212";
  sortingButton.style.border = "none";
  sortingButton.style.textAlign = "left";
  Sorting.appendChild(sortingButton);

  return FilterBar;
}

let ImageList = [
  "Opera Snapshot_2023-07-21_023902_universe.leagueoflegends.com.png",
  "Opera Snapshot_2023-07-21_023945_universe.leagueoflegends.com.png",
  "Opera Snapshot_2023-07-21_024025_universe.leagueoflegends.com.png",
  "Opera Snapshot_2023-07-21_024119_universe.leagueoflegends.com.png",
  "Opera Snapshot_2023-07-21_024141_universe.leagueoflegends.com.png",
];
let NameList = ["AATROX", "AHRI", "AKALI", "AKSHAN", "ALISTAR"];
let RegionList = ["RUNETERRA", "IONIA", "IONIA", "SHURIMA", "RUNETERRA"];

function ChampionPage() {
  let ChampionPage = document.createElement("div");

  let Header = document.createElement("div");
  ChampionPage.appendChild(Header);
  Header.style.height = "10px";
  Header.style.padding = "300px 0 120px 0";
  Header.style.display = "block";
  Header.style.alignItems = "center";
  Header.style.justifyContent = "center";
  Header.innerHTML = `<img src="content_type_icon_champion__3nwJQ.png" style=" width: 22px; height: 36px; margin: 0 0 0 44.75vw;">
  <div">
  <h1 style="text-align: center; margin-bottom: 4px; font-size: 30px; color: white;">CHAMPIONS</h1>
  </div>`;

  //   let Icon = document.createElement("img");
  //   Header.appendChild(Icon);
  //   Icon.src = "content_type_icon_champion__3nwJQ.png";
  //   Icon.style.width = "22px";
  //   Icon.style.height = "36px";

  //   let H1 = document.createElement("h1");
  //   Header.appendChild(H1);
  //   H1.textContent = "CHAMPION";
  //   H1.style.fontSize = "40px";
  //   H1.style.margin = "0";

  let Champions = document.createElement("div");
  Champions.style.width = "1400px";
  Champions.style.height = "100vh";
  //   Champions.style.border = "1px solid white";
  Champions.style.display = "block";
  ChampionPage.appendChild(Champions);

  let ChampionList = document.createElement("div");
  ChampionList.style.width = "100%";
  ChampionList.style.height = "auto";
  //   ChampionList.style.border = "1px solid red";
  ChampionList.style.display = "flex";
  Champions.appendChild(ChampionList);

  for (let i = 0; i < 5; i++) {
    let ChampionCards = document.createElement("div");
    ChampionCards.style.height = "400px";
    ChampionCards.style.width = "20%";
    ChampionCards.style.maxWidth = "100%";
    ChampionCards.style.boxShadow = "15px 15px -15px black";
    ChampionCards.style.display = "block";
    ChampionCards.style.margin = "0 15px 0 0";
    ChampionList.appendChild(ChampionCards);

    // let Image = document.createElement("img");
    // Image.src = ImageList[i];
    // Image.style.height = "100%";
    // Image.style.width = "100%";
    // Image.style.margin = "0px";
    // ChampionCards.appendChild(Image);

    let Context = document.createElement("div");
    Context.style.display = "block";
    Context.style.width = "100%";
    Context.style.height = "50px";
    Context.style.textAlign = "center";
    Context.innerHTML = `<img src="${ImageList[i]}" style="width: 100%; height: 400px; object-fit: cover; box-shadow: 15 15px -8px 0 rgba(0, 0, 0, 0.2), 0 -2px 20px 0 rgba(0, 0, 0, 0.19);">
    <div style="margin: 0px;padding: 6px; textAlign: center;border-top: 0.4 solid white;background-color: #121212;">
    <h1 style="margin: 0 0 4px 0; font-size: 30px; color: white;">${NameList[i]}</h1>
    <p style="margin: 5px 0 9px 0; textAlign: center;font-size: 15px; color: white;>">${RegionList[i]}</p>
    </div>`;

    ChampionCards.appendChild(Context);

    // let Name = document.createElement("H1");
    // Name.innerHTML = NameList[i]+"<br>";
    // Name.style.backgroundColor = "#121212";
    // Name.style.textAlign = "center";
    // Name.style.margin = "0px";
    // Context.appendChild(Name);

    // let Region = document.createElement("H2");
    // Name.innerHTML = RegionList[i];
    // Name.style.backgroundColor = "#121212";
    // Name.style.textAlign = "center";
    // Name.style.margin = "0px";
    // Context.appendChild(Region);
  }
  return ChampionPage;
}

let newFilterBar = FilterBar();
body.appendChild(newFilterBar);
let newNavBar = NavBar();
body.appendChild(newNavBar);
let newChampionPage = ChampionPage();
body.appendChild(newChampionPage);
