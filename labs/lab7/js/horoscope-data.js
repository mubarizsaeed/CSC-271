var zodiac_sign = "Leo";
var birth_month = "August";
var birth_day = 15;
var lucky_number = 7;
var horoscope_text = "You will have an amazing day filled with good luck!";
var believe_in_astrology = true;

document.getElementById("sign").textContent = zodiac_sign;
document.getElementsByClassName("birthday")[0].textContent = "Birthday: " + birth_month + " " + birth_day + "st";
document.getElementsByClassName("luckyNum")[0].textContent = "Lucky Number: " + lucky_number;

var paragraphs = document.getElementsByTagName("p");
paragraphs[0].textContent = horoscope_text;
paragraphs[1].innerHTML = "Do I believe in astrology? <b>" + believe_in_astrology + "</b>";

var leo_mood = 4;
var pisces_mood = 5;
var aries_mood = 4;
var average_mood = (leo_mood + pisces_mood + aries_mood) / 3;

document.getElementById("mood").textContent = "Today's mood rating for Leo: " + leo_mood + 
    " out of 5. The average mood rating of Leo, Pisces, and Aries is: " + average_mood.toFixed(2) + " out of 5.";

var zodiac_signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

var my_sign = zodiac_signs[7];
var lucas_sign = zodiac_signs[2];
var afria_sign = zodiac_signs[3];

var horoscope_descriptions = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];

var my_horoscope = horoscope_descriptions[6];
var lucas_horoscope = horoscope_descriptions[2];
var afria_horoscope = horoscope_descriptions[3];

document.getElementById("friends").innerHTML = 
    "My zodiac sign is: " + my_sign + ". Lucas's zodiac sign is: " + lucas_sign + ". Afria's zodiac sign is: " + afria_sign + 
    "<br><br>" +
    my_sign + " Horoscope: " + my_horoscope + "<br>" +
    lucas_sign + " Horoscope: " + lucas_horoscope + "<br>" +
    afria_sign + " Horoscope: " + afria_horoscope;

horoscope_descriptions[6] = "Custom message: Stars are perfectly aligned for success!";