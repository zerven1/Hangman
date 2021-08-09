var kategorie=[
'Kategoria: Filmy',
'Kategoria: Seriale',
'Kategoria: Zwierzęta',
'Kategoria: Rośliny',
'Kategoria: Przysłowia',
'Kategoria: Sport',
'Kategoria: Popularni piłkarze',
'Kategoria: Aktorzy',
'Kategoria: Książki',
'Kategoria: Ubrania',
]
var odp0=[
    'FOREST GUMP',
    'ZIELONA MILA', 
    'AVENGERS',
    'OBECNOŚĆ',
    'KEVIN SAM W DOMU',
    'ROCKY',
    'PIŁA',
    'PIĄTEK TRZYNASTEGO',
    'SZEREGOWIEC RYAN',
    'ANNABELLE'
]
var odp1=[
    'GRA O TRON',
    'GAMBIT KRÓLOWEJ',
    'CZARNOBYL',
    'BREAKING BAD',
    'RICK I MORTY',
    'SHERLOCK',
    'NARCOS',
    'WIKINGOWIE',
    'HOUSE OF CARDS',
    'STRANGER THINGS'
]
var odp2=[
    'PIES',
    'KOT',
    'MYSZ',
    'ŻMIJA ZYGZAKOWATA',
    'RYŚ',
    'KUNA',
    'KURA',
    'KACZKA',
    'ŚWINIA',
    'DZIK'
]
var odp3=[
    'STORCZYK',
    'CYKLAMEN',
    'POISENCJA',
    'BEGONIA ELATIOR',
    'AZALIA',
    'HORTENSJA',
    'ZŁOCIEŃ',
    'RÓŻA',
    'PALMA',
    'PAPROĆ'
]
var odp4=[
    'BEZ PRACY NIE MA KOŁACZY',
    'DAROWANEMU KONIOWI W ZĘBY SIĘ NIE ZAGLĄDA',
    'FORTUNA KOŁEM SIĘ TOCZY',
    'NIE CHWAL DNIA PRZED ZACHODEM SŁOŃCA',
    'LEPSZY WRÓBEL W GARŚCI NIŻ GOŁĄB NA DACHU',
    'APETYT ROŚNIE W MIARĘ JEDZENIA',
    'CO MA WISIEĆ NIE UTONIE',
    'DZIECI I RYBY GŁOSU NIE MAJĄ',
    'CO NAGLE TO PO DIABLE',
    'JAK KUBA BOGU TAK BÓG KUBIE'
]
var odp5=[
    'PIŁKA NOŻNA',
    'PIŁKA RĘCZNA',
    'SIATKÓWKA',
    'KOSZYKÓWKA',
    'LEKKOATLETYKA',
    'KULTURYSTYKA',
    'HOKEJ',
    'SKOKI NARCIARSKIE',
    'TENIS ZIEMNY',
    'TENIS STOŁOWY'
]
var odp6=[
    'CRISTIANO RONALDO',
    'LIONEL MESSI',
    'WAYNE ROONEY',
    'NEYMAR',
    'KYLIAN MBAPPE',
    'PAUL POGBA',
    'BRUNO FERNANDES',
    'LUIS SUAREZ',
    'ROBERT LEWANDOWSKI',
    'WOJCIECH SZCZĘSNY'
]
var odp7=[
    'ROBERT DE NIRO',
    'HARRISON FORD',
    'NICOLAS CAGE',
    'MORGAN FREEMAN',
    'SAMUEL L JACKSON',
    'JOHNNY DEPP',
    'BRAD PITT',
    'ANGELINA JOLIE',
    'TOM CRUISE',
    'LEONARDO DI CAPRIO'
]
var odp8=[
    'HARRY POTTER',
    'WŁADCA PIERŚCIENI',
    'HOBBIT',
    'ALCHEMIK',
    'ZMIERZCH',
    'PAN TADEUSZ',
    'LALKA',
    'ALICJA W KRAINIE CZARÓW',
    'PINOKIO',
    'PRZEMINĘŁO Z WIATREM'
]
var odp9=[
    'KOSZULKA',
    'SUKIENKA',
    'BLUZKA',
    'SPÓDNICA',
    'ŻAKIET',
    'JEANSY',
    'SWETER',
    'KURTKA',
    'DRESY',
    'SKARPETKI'
]

var lit=[
    'A',
    'Ą',
    'B',
    'C',
    'Ć',
    'D',
    'E',
    'Ę',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'Ł',
    'M',
    'N',
    'Ń',
    'O',
    'Ó',
    'P',
    'Q',
    'R',
    'S',
    'Ś',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'Ź',
    'Ż'
]
var szyfr='';
var wybor;
var rando;
var kategoria;
var poziom=0;
var wygrana=false;
function start()
{
    const image= new Image();
    image.src="/src/wisielec/obr1.png";
    document.getElementById("game").innerHTML="<div><img src ='wisielec/obr"+poziom+".png' width='400' height='250'></div>"
    document.getElementById("rezultat").innerHTML=kategoria;
    document.getElementById("results").innerHTML=szyfr;
}
function category()
{
    szyfr='';
    wybor=Math.floor(Math.random() * 10);
    kategoria=kategorie[wybor];
    if(wybor==0)
    {
        rando=odp0[Math.floor(Math.random() * 10)];
    }
    if(wybor==1)
    {
        rando=odp1[Math.floor(Math.random() * 10)];
    }
    if(wybor==2)
    {
        rando=odp2[Math.floor(Math.random() * 10)];
    }
    if(wybor==3)
    {
        rando=odp3[Math.floor(Math.random() * 10)];
    }
    if(wybor==4)
    {
        rando=odp4[Math.floor(Math.random() * 10)];
    }
    if(wybor==5)
    {
        rando=odp5[Math.floor(Math.random() * 10)];
    }
    if(wybor==6)
    {
        rando=odp6[Math.floor(Math.random() * 10)];
    }
    if(wybor==7)
    {
        rando=odp7[Math.floor(Math.random() * 10)];
    }
    if(wybor==8)
    {
        rando=odp8[Math.floor(Math.random() * 10)];
    }
    if(wybor==9)
    {
        rando=odp9[Math.floor(Math.random() * 10)];
    }
}
function szyfruj()
{   document.getElementById("results").innerHTML="Tutaj pojawi się hasło do rozszyfrowania";
    category();
    for(let i=0; i<rando.length; i++)
    {
        if(rando.charAt(i)==" ")
        {
            szyfr=szyfr+" ";
        }
        else
        {
            szyfr=szyfr+"-";
        }
    }
    for(let i=0; i<=34; i++)
    {
        document.getElementById(lit[i]).onclick=function(){sprawdz(i)};
    }
    poziom=0;
}
function reload()
{
    szyfruj();
    document.getElementById("game").innerHTML="<div id='game'>Witaj w Grze wisielec!  <p>Na górze wyświetla się zaszyfrowane hasło </p><p>Po lewej znajdują się wszystkie litery alfabetu polskiego</p><p>Po kliknięciu przycisku start wyświetli ci się kategoria </p> <p>W tym okienku będziesz widzieć postęp twojego wisielca</p> <p>Miłej zabawy </p>   <button onclick='start()' src=szubienica.js id='button'>Rozpocznij grę</button>";
    document.getElementById("rezultat").innerHTML="";
    for(let i=0; i<=34;i++)
    {
    document.getElementById(lit[i]).className="lit";
    document.getElementById(lit[i]).onclick=function(){sprawdz(i)};
    }
    document.getElementById("results").innerHTML="Tutaj pojawi się hasło do rozszyfrowania";
}

String.prototype.zmienZnak=function(miejsce,znak)
{
    if(miejsce > this.length-1)return this.toString();
    else return this.substr(0,miejsce)+znak+this.substr(miejsce+1);
}
function sprawdz(nr)
{
    var spr=false;
    for(let i=0; i<rando.length; i++)
    {
        if(rando.charAt(i)==lit[nr])
        {
            szyfr = szyfr.zmienZnak(i,lit[nr]);
            
            document.getElementById("results").innerHTML=szyfr;
            spr=true;
            document.getElementById(lit[nr]).className="islit";
            document.getElementById(lit[nr]).onclick="";
        }
    } 
    if(spr==false)
        {
            document.getElementById(lit[nr]).className="isnotlit";
            document.getElementById(lit[nr]).onclick="";
            if(poziom<9)
                {
                    poziom++;
                    start();
                }
            else
            {       poziom++;
                    start();
                    document.getElementById("rezultat").innerHTML="<p>Niestety przegrałeś</p><button onclick='reload()'>Spróbuj ponownie</button>";
                    document.getElementById("results").innerHTML=rando;
                    for(let i=0; i<=34;i++)
                    {
                    document.getElementById(lit[i]).onclick="";
                    }
                    
            }
        }
    isWin();
    if(wygrana==true)
    {
        document.getElementById("rezultat").innerHTML="<p>Gratulacje,Udało Ci się wygrać</p><button onclick='reload()'>Zagraj ponownie!</button>";
        document.getElementById("game").innerHTML="<div><img src ='wisielec/fajerwerki.gif' width='400' height='250'></div>";
    }

}
function isWin()
{
    for(let i=0; i<szyfr.length; i++)
    {
        if(szyfr==rando)
        {
            wygrana=true;
        }
        else
        {
            wygrana=false;
        }
    }
}
window.onload=szyfruj;
