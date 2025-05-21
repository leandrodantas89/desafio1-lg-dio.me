let HeroName = "Iron Man"
let HeroXp = 10001
let HeroLevel

if(HeroXp<=1000){
    HeroLevel = "Ferro"
}else if (HeroXp>=1001 && HeroXp<=2000){
    HeroLevel = "Bronze"
}
else if (HeroXp>=2001 && HeroXp<=5000){
    HeroLevel = "Prata"
}
else if (HeroXp>=5001 && HeroXp<=7000){
    HeroLevel = "Ouro"
}else if (HeroXp>=7001 && HeroXp<=8000){
    HeroLevel = "Platina"
}else if (HeroXp>=8001 && HeroXp<=9000){
    HeroLevel = "Ascendente"
}else if (HeroXp>=9001 && HeroXp<=10000){
    HeroLevel = "Imortal"
}else if (HeroXp>=10001){
    HeroLevel = "Radiante"
}
console.log("O Herói de nome "+HeroName+" está no nível de "+HeroLevel)