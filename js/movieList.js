 /* Play functionailty for the movie banner that plays the teaser trailer for the movie */
 player = document.getElementById('video');
 btnPlayPause = document.getElementById('btnPlayPause');
 
 player.addEventListener('play', function(){
     changeButtonType(btnPlayPause, 'Pause');
 }, false);
 
 player.addEventListener('pause', function(){
     changeButtonType(btnPlayPause, 'Play');
 }, false);
 
 function playPauseVideo(){
     if (player.paused || player.ended) {
         changeButtonType (btnPlayPause, 'Pause');
         player.play();
     } else{
         changeButtonType(btnPlayPause, 'Play');
         player.pause();
     }
 }

 /* Function allows you to pause said video on the "play" */
function changeButtonType(btn,value){
    btn.title - value;
    btn.innerHTML - value;
}

/* Functionailty for the media scrollers */
const nav = document.getElementById('nav');
window.addEventListener('scroll' , () => {
    if(window.scrollY>=100){
        nav.classList.add('nav_black');
    } else{
        nav.classList.remove('nav_black');
    }
})

/* The movies that are displayed in the homepage, are shown here in the array to access and show the movies */
[comingSoon],//This is all the information about the Movies and TV Shows sorted within an array collected from the imdb api (eg. the id, title, genre, date available, description, image and trailer.)
            {   id: "Coming Soon", //Movie row name
                title: "Love in the villa", //Title
                genre: "Comedy, Romance", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "A young woman takes a trip to romantic Verona, Italy, after a breakup, only to find that the villa she reserved was double-booked, and she'll have to share her vacation with a cynical British man.", //Description of the movie
                image: "https://www.imdb.com/title/tt15463032/mediaviewer/rm3033009665/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=_kRab62q54M",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "After ever happy", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.", //Description of the movie
                image: "https://www.imdb.com/title/tt13070038/mediaviewer/rm1802494977/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=TlAukkPK-dc",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Cobra Kai", //Title
                genre: "Action, Drama", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.", //Description of the movie
                image: "https://www.imdb.com/title/tt7221388/mediaviewer/rm2559052801/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=sUR9PYwlNaA",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Bridgerton", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When it is available to watch
                description: "Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.", //Description of the movie
                image: "https://www.imdb.com/title/tt8740790/mediaviewer/rm4165081601/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Bs9r1UbmFAI",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Fate the winx saga", //Title
                genre: "Action, Drama, Romance, Fantasy", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "A live-action adaptation of Nickelodeon's Winx Club (2004). It follows Bloom as she adjusts to life in the Otherworld, where she must learn to control her dangerous magical powers.", //Description of the movie
                image: "https://www.imdb.com/title/tt8179402/mediaviewer/rm68015617/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=YlNEvyjEWLQ",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Elektra", //Title
                genre: "Romance, Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2005, //When it is available to watch
                description: "Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.", //Description of the movie
                image: "https://www.imdb.com/title/tt0357277/mediaviewer/rm839355392/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=XGnADb5e0mc",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Mr & Mrs Smith", //Title
                genre: "Romance, Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2005, //When it is available to watch
                description: "A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other.", //Description of the movie
                image: "https://www.imdb.com/title/tt0356910/mediaviewer/rm2549451776/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=CZ0B22z22pI",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Good girls", //Title
                genre: "Romance, Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When it is available to watch
                description: "Three suburban mothers suddenly find themselves in desperate circumstances and decide to stop playing it safe and risk everything to take back their power.", //Description of the movie
                image: "https://www.imdb.com/title/tt6474378/mediaviewer/rm255903745/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=kbjIaPzODs0",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Good girls", //Title
                genre: "Romance, Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When it is available to watch
                description: "Three suburban mothers suddenly find themselves in desperate circumstances and decide to stop playing it safe and risk everything to take back their power.", //Description of the movie
                image: "https://www.imdb.com/title/tt6474378/mediaviewer/rm255903745/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=kbjIaPzODs0",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "He's all that", //Title
                genre: "Romance, Drama, Comedy", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When it is available to watch
                description: "A teenage girl sets out to give a nebbish classmate the ultimate high school makeover. An updated remake of the 1999 film, 'She's All That'.", //Description of the movie
                image: "https://www.imdb.com/title/tt4590256/mediaviewer/rm3629383425/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=XqTPaRz8Nx8",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Riverdale", //Title
                genre: "Romance, Drama, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2017, //When it is available to watch
                description: "While navigating the troubled waters of romance, school and family, Archie and his gang become entangled in dark Riverdale mysteries.", //Description of the movie
                image: "https://www.imdb.com/title/tt5420376/mediaviewer/rm3364035073/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=HxtLlByaYTc",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Blood & Water", //Title
                genre: "Romance, Drama, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When it is available to watch
                description: "A local teen uncovers her family's secret past and navigates the complicated world of a South African high school.", //Description of the movie
                image: "https://www.imdb.com/title/tt9839146/mediaviewer/rm2013050369/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=2m0Cm2kMOBU",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "The Sandman", //Title
                genre: "Drama, Suspense, Action, Fantasy", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "Upon escaping after decades of imprisonment by a mortal wizard, Dream, the personification of dreams, sets about to reclaim his lost equipment.", //Description of the movie
                image: "https://www.imdb.com/title/tt1751634/mediaviewer/rm1255999489/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=83ClbRPRDXU",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Dynasty", //Title
                genre: "Drama, Romance, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2017, //When it is available to watch
                description: "Follows two of America's wealthiest families as they feud for control over their fortune and their children.", //Description of the movie
                image: "https://www.imdb.com/title/tt6128300/mediaviewer/rm3760394753/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Uq0soWMpkv8",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Blood & Water", //Title
                genre: "Romance, Drama, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When it is available to watch
                description: "A local teen uncovers her family's secret past and navigates the complicated world of a South African high school.", //Description of the movie
                image: "https://www.imdb.com/title/tt9839146/mediaviewer/rm2013050369/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=2m0Cm2kMOBU",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "The Sandman", //Title
                genre: "Drama, Suspense, Action, Fantasy", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "Upon escaping after decades of imprisonment by a mortal wizard, Dream, the personification of dreams, sets about to reclaim his lost equipment.", //Description of the movie
                image: "https://www.imdb.com/title/tt1751634/mediaviewer/rm1255999489/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=83ClbRPRDXU",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Dynasty", //Title
                genre: "Drama, Romance, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2017, //When it is available to watch
                description: "Follows two of America's wealthiest families as they feud for control over their fortune and their children.", //Description of the movie
                image: "https://www.imdb.com/title/tt6128300/mediaviewer/rm3760394753/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Uq0soWMpkv8",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Fifty Shades Freed", //Title
                genre: "Drama, Romance, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2018, //When it is available to watch
                description: "Anastasia and Christian get married, but Jack Hyde continues to threaten their relationship.", //Description of the movie
                image: "https://www.imdb.com/title/tt4477536/mediaviewer/rm1012160512/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=av4zbG8dAhk",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Me Time", //Title
                genre: "Comedy, Adventure", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "Follows a dad who finds time for himself for the first time in years while his wife and kids are away. He reconnects with a friend for a wild weekend.", //Description of the movie
                image: "https://www.imdb.com/title/tt14309446/mediaviewer/rm2206861313/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Mmq_NVwLN_g"  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Halftime", //Title
                genre: "Documentary", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "Global superstar Jennifer Lopez reflects on her multifaceted career and the pressure of life in the spotlight in this intimate documentary.", //Description of the movie
                image: "https://www.imdb.com/title/tt19637852/mediaviewer/rm3760725761/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=-voLo_TIWf4"  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "The Gray Man", //Title
                genre: "Suspense, Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "When the CIA's most skilled operative-whose true identity is known to none-accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head, setting off a global manhunt by international assassins.", //Description of the movie
                image: "https://www.imdb.com/title/tt1649418/mediaviewer/rm2121338881/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=BmllggGO4pM"  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Interceptor", //Title
                genre: "Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "One Army captain must use her years of tactical training and military expertise when a simultaneous coordinated attack threatens the remote missile interceptor station she is in command of.", //Description of the movie
                image: "https://www.imdb.com/title/tt14174940/mediaviewer/rm3821146625/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=OQSoII4Bj1o"  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Outer Banks", //Title
                genre: "Adventure, Drama, Action, Romance", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When it is available to watch
                description: "A group of teenagers from the wrong side of the tracks stumble upon a treasure map that unearths a long-buried secret.", //Description of the movie
                image: "https://www.imdb.com/title/tt10293938/mediaviewer/rm1244920065/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=uk_hFfUFXh4"  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Peaky Blinders", //Title
                genre: "Drama, Action, Romance", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.", //Description of the movie
                image: "https://www.imdb.com/title/tt2442560/mediaviewer/rm1060899073/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=oVzVdvGIC7U"  //Trailer URL's
            }
[Movies],//This is all the information about the Movies and TV Shows sorted within an array (eg. the id, title, genre, date available, description, image and trailer.)
            {   id: "Movies", //Movie row name
                title: "Turning Red", //Title
                genre: "Annimation", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "A 13-year-old girl named Meilin turns into a giant red panda whenever she gets too excited.", //Description of the movie
                image: "https://www.imdb.com/title/tt8097030/mediaviewer/rm1685446657/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=XdKzUbAiswE",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "John Wick", //Title
                genre: "Action, Suspense, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2019, //When the movie is available to watch
                description: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.", //Description of the movie
                image: "https://www.imdb.com/title/tt6146586/mediaviewer/rm2374853376/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=M7XM597XO94",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Minions", //Title
                genre: "Annimation", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.", //Description of the movie
                image: "https://www.imdb.com/title/tt5113044/mediaviewer/rm2384730369/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=6DxjJzmYsXo",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Kissing Booth", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2018, //When the movie is available to watch
                description: "A high school student is forced to confront her secret crush at a kissing booth.", //Description of the movie
                image: "https://www.imdb.com/title/tt3799232/mediaviewer/rm1883393024/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=7bfS6seiLhk",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "365 Days", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2018, //When the movie is available to watch
                description: "Laura and Massimo are back and stronger than ever. But Massimo's family ties and a mysterious man bidding for Laura's heart complicate the lovers' lives.", //Description of the movie
                image: "https://www.imdb.com/title/tt12996154/mediaviewer/rm185409025/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=pyM3z73oMAk",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Through my window", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "Raquel's longtime crush on her next-door neighbor turns into something more when he starts developing feelings for her, despite his family's objections.", //Description of the movie
                image: "https://www.imdb.com/title/tt14463484/mediaviewer/rm2225206273/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=_zxhK3Z-R0c",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Madea Homecoming", //Title
                genre: "Comedy, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "Madea's back hallelujer. And she's not putting up with any nonsense as family drama erupts at her great-grandson's college graduation celebration.", //Description of the movie
                image: "https://www.imdb.com/title/tt14813966/mediaviewer/rm1211293953/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=afJXk-RgzoQ",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Senior Year", //Title
                genre: "Comedy, Drama, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "The film stars Rebel Wilson (who also produced) as a 37-year-old woman who awakens from a 20-year coma and decides to go back to high school to earn her diploma", //Description of the movie
                image: "https://www.imdb.com/title/tt5315212/mediaviewer/rm1148391425/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=HCtDkpe89aY",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "The old guard", //Title
                genre: "Action, Adventure, Fantasy", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When the movie is available to watch
                description: "A covert team of immortal mercenaries is suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.", //Description of the movie
                image: "https://www.imdb.com/title/tt7556122/mediaviewer/rm1029679361/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=aK-X2d0lJ_s",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "A perfect pairing", //Title
                genre: "Romance, Adventure, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "A Perfect Pairing is a 2022 American romantic comedy film. The film follows the story of Lola, an LA-based wine executive.", //Description of the movie
                image: "https://www.imdb.com/title/tt15215512/mediaviewer/rm2253069569/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=WR21TH-6LfY",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Red Notice", //Title
                genre: "Romance, Adventure, Action", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When the movie is available to watch
                description: "An Interpol agent successfully tracks down the world's most wanted art thief, with help from a rival thief. But nothing is as it seems, as a series of double-crosses ensue.", //Description of the movie
                image: "https://www.imdb.com/title/tt7991608/mediaviewer/rm2565534977/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "American Underdog", //Title
                genre: "Biopic", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When the movie is available to watch
                description: "The story of NFL MVP and Hall of Fame quarterback Kurt Warner, who went from stocking shelves at a supermarket to becoming an American Football star.", //Description of the movie
                image: "https://www.imdb.com/title/tt11729298/mediaviewer/rm770894081/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=_6rn-6lKBJ8",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Persuasion", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "Eight years after Anne Elliot was persuaded not to marry a dashing man of humble origins, they meet again. Will she seize her second chance at true love?", //Description of the movie
                image: "https://www.imdb.com/title/tt13456318/mediaviewer/rm3416397569/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Fz7HmgPJQak",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "The Unforgivable", //Title
                genre: "Crime, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When the movie is available to watch
                description: "A woman is released from prison after serving a sentence for a violent crime and re-enters a society that refuses to forgive her past.", //Description of the movie
                image: "https://www.imdb.com/title/tt11233960/mediaviewer/rm1014166785/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=JNUjx7LZoiU",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "The Notebook", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2012, //When the movie is available to watch
                description: "A poor yet passionate young man (Ryan Gosling) falls in love with a rich young woman (Rachel McAdams), giving her a sense of freedom, but they are soon separated because of their social differences.", //Description of the movie
                image: "https://www.imdb.com/title/tt0332280/mediaviewer/rm1153669376/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=yDJIcYE32NU",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Call me by your name", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2017, //When the movie is available to watch
                description: "In 1980s Italy, romance blossoms between a seventeen-year-old student and the older man hired as his father's research assistant.", //Description of the movie
                image: "https://www.imdb.com/title/tt5726616/mediaviewer/rm1422667008/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Z9AYPxH5NTM",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Waves", //Title
                genre: "Romance, Drama, Sport", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2019, //When the movie is available to watch
                description: "Traces the journey of a suburban family - led by a well-intentioned but domineering father - as they navigate love, forgiveness, and coming together in the aftermath of a loss.", //Description of the movie
                image: "https://www.imdb.com/title/tt8652728/mediaviewer/rm4250438145/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=V5z3cr8AB5g",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Endless Love", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2014, //When the movie is available to watch
                description: "The story of a privileged girl and a charismatic boy whose instant desire sparks a love affair made only more reckless by parents trying to keep them apart.", //Description of the movie
                image: "https://www.imdb.com/title/tt2318092/mediaviewer/rm3977501696/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=NTAzn4W48gc",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "The lucky one", //Title
                genre: "Romance, Drama, Mystery", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2012, //When the movie is available to watch
                description: "A Marine travels to Louisiana after serving three tours in Iraq and searches for the unknown woman he believes was his good luck charm during the war.", //Description of the movie
                image: "https://www.imdb.com/title/tt1327194/mediaviewer/rm4285707008/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=9w8lE83oYeM",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Love and Other drugs", //Title
                genre: "Romance, Drama, Comedy", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2010, //When the movie is available to watch
                description: "In 1990s Pittsburgh, a medicine peddler starts a relationship with a young woman suffering from Parkinson's disease.", //Description of the movie
                image: "https://www.imdb.com/title/tt0758752/mediaviewer/rm1047036160/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=h6w7Dh-QxzY",  //Trailer URL's
            }

[TVShows],//This is all the information about the Movies and TV Shows sorted within an array (eg. the id, title, genre, date available, description, image and trailer.)
            {   id: "TV Shows", //Movie row name
                title: "You", //Title
                genre: "Crime, Drama, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2018, //When the movie is available to watch
                description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.", //Description of the movie
                image: "https://www.imdb.com/title/tt7335184/mediaviewer/rm3510108929/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=uAx8EGrUozE",  //Trailer URL's
            },           
            {   id: "TV Shows", //Movie row name
                title: "Never have I ever", //Title
                genre: "Comedy, Drama, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When the movie is available to watch
                description: "The complicated life of a modern-day first generation Indian American teenage girl, inspired by Mindy Kaling's own childhood.", //Description of the movie
                image: "https://www.imdb.com/title/tt10062292/mediaviewer/rm893454337/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=HyOCCCbxwMQ",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Stranger Things", //Title
                genre: "Drama, Fantasy, Horror", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2016, //When the movie is available to watch
                description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back", //Description of the movie
                image: "https://www.imdb.com/title/tt4574334/mediaviewer/rm3336115457/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=b9EkMc79ZSU",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "The Queens Gambit", //Title
                genre: "Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When the movie is available to watch
                description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.", //Description of the movie
                image: "https://www.imdb.com/title/tt10048342/mediaviewer/rm1650697985/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=oZn3qSgmLqI",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "The Flash", //Title
                genre: "Drama, Action, Adventure", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2014, //When the movie is available to watch
                description: "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, and fighting crime in Central City.", //Description of the movie
                image: "https://www.imdb.com/title/tt3107288/mediaviewer/rm105957889/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Yj0l7iGKh8g",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "The vampire diaries", //Title
                genre: "Drama, Fantasy, Horror", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2009, //When the movie is available to watch
                description: "The lives, loves, dangers and disasters in the town, Mystic Falls, Virginia. Creatures of unspeakable horror lurk beneath this town as a teenage girl is suddenly torn between two vampire brothers.", //Description of the movie
                image: "https://www.imdb.com/title/tt1405406/mediaviewer/rm291273984/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=BmVmhjjkN4E",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "The originals", //Title
                genre: "Drama, Fantasy, Horror", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2013, //When the movie is available to watch
                description: "A family of power-hungry thousand-year-old vampires look to take back the city that they built and dominate all those who have done them wrong.", //Description of the movie
                image: "https://www.imdb.com/title/tt2632424/mediaviewer/rm3180033792/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=GXrDYboUnnw",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Teen Wolf", //Title
                genre: "Drama, Fantasy, Horror", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2011, //When the movie is available to watch
                description: "An average high school student and his best friend get caught up in some trouble causing him to receive a werewolf bite. As a result they find themselves in the middle of all sorts of dramas in Beacon Hills.", //Description of the movie
                image: "https://www.imdb.com/title/tt1567432/mediaviewer/rm3833557760/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=1rCYDbefnmA",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Teen Wolf", //Title
                genre: "Drama, Fantasy, Horror", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "In a world of privilege and glamour, two young women's friendship transcends their strikingly different classes as they prepare to complete their education and enter royal vampire society.", //Description of the movie
                image: "https://www.imdb.com/title/tt14689620/mediaviewer/rm3179023617/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Gw_xrllOGu0",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Only murders in the building", //Title
                genre: "Drama, Crime, Comedy", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When the movie is available to watch
                description: "Three strangers who share an obsession with true crime suddenly find themselves caught up in one.", //Description of the movie
                image: "https://www.imdb.com/title/tt12851524/mediaviewer/rm3076984833/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=JRgyBaTulbs",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Sex life", //Title
                genre: "Drama, Romance, Comedy", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When the movie is available to watch
                description: "A suburban mother of two takes a fantasy-charged trip down memory lane that sets her very married present on a collision course with her wild-child past.", //Description of the movie
                image: "https://www.imdb.com/title/tt10839422/mediaviewer/rm2574763777/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=jCS-Y6Sp7CI",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Ginny and Georgia", //Title
                genre: "Drama, Romance, Comedy", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When the movie is available to watch
                description: "Ginny Miller, an angsty fifteen-year-old, often feels more mature than her thirty-year-old mother, the irresistible and dynamic Georgia Miller.", //Description of the movie
                image: "https://www.imdb.com/title/tt10813940/mediaviewer/rm1467340545/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=e34_mMhe4WQ",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Emily in paris", //Title
                genre: "Drama, Romance, Comedy", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When the movie is available to watch
                description: "A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things.", //Description of the movie
                image: "https://www.imdb.com/title/tt8962124/mediaviewer/rm4170836225/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=lptctjAT-Mk",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "13 Reasons why", //Title
                genre: "Drama, Mystery, Thriller", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2017, //When the movie is available to watch
                description: "Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.", //Description of the movie
                image: "https://www.imdb.com/title/tt1837492/mediaviewer/rm2820554240/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=QkT-HIMSrRk",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Jane the virgin", //Title
                genre: "Comedy", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2014, //When the movie is available to watch
                description: "A young, devout Catholic woman discovers that she was accidentally artificially inseminated.", //Description of the movie
                image: "https://www.imdb.com/title/tt3566726/mediaviewer/rm2076558593/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=JOKUcwrPFmg",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Gilmore Girls", //Title
                genre: "Comedy, Romance, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2000, //When the movie is available to watch
                description: "A dramedy centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.", //Description of the movie
                image: "https://www.imdb.com/title/tt0238784/mediaviewer/rm632117760/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=YwY86TlfDI0",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Too hot to handle", //Title
                genre: "Game show, Reality TV, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When the movie is available to watch
                description: "On the shores of paradise, gorgeous singles meet and mingle. But there's a twist. To win a $100,000 grand prize, they'll have to give up sex.", //Description of the movie
                image: "https://www.imdb.com/title/tt12004280/mediaviewer/rm2852970497/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=2JgPJpgnut4",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Arrow", //Title
                genre: "Action, Adventure, Crime", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2012, //When the movie is available to watch
                description: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.", //Description of the movie
                image: "https://www.imdb.com/title/tt2193021/mediaviewer/rm4037055745/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=XQS7JkQmlx8",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "Supergirl", //Title
                genre: "Action, Adventure, Crime", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2015, //When the movie is available to watch
                description: "The adventures of Superman's cousin in her own superhero career.", //Description of the movie
                image: "https://www.imdb.com/title/tt4016454/mediaviewer/rm1142014721/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=mlgL6FbqsVI",  //Trailer URL's
            },
            {   id: "TV Shows", //Movie row name
                title: "She Hulk", //Title
                genre: "Action, Adventure, Comedy", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered Hulk.", //Description of the movie
                image: "https://www.imdb.com/title/tt10857160/mediaviewer/rm2579826689/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=u7JsKhI2An0",  //Trailer URL's
            }
[Popular],//This is all the information about the Movies and TV Shows sorted within an array (eg. the id, title, genre, date available, description, image and trailer.)
            {   id: "Popular", //Movie row name
                title: "The karate kid", //Title
                genre: "Action, Drama, Family", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 1984, //When the movie is available to watch
                description: "A martial arts master agrees to teach karate to a bullied teenager.", //Description of the movie
                image: "https://www.imdb.com/title/tt0087538/mediaviewer/rm3598319872/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=xlnm0NtPoVs",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "After", //Title
                genre: "Drama, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2019, //When the movie is available to watch
                description: "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship. Based on the novel by Anna Todd.", //Description of the movie
                image: "https://www.imdb.com/title/tt4126476/mediaviewer/rm3002365184/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=rPTf0Gw5-Bg",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Atlantis", //Title
                genre: "Annimation", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2001, //When the movie is available to watch
                description: "A young linguist named Milo Thatch joins an intrepid group of explorers to find the mysterious lost continent of Atlantis", //Description of the movie
                image: "https://www.imdb.com/title/tt0230011/mediaviewer/rm4262793984/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=sZIimDPZQwg",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Dirty Dancing", //Title
                genre: "Drama, Music, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 1987, //When the movie is available to watch
                description: "Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor, Johnny Castle.", //Description of the movie
                image: "https://www.imdb.com/title/tt0092890/mediaviewer/rm4168602624/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=eIcmQNy9FsM",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "How to train your dragon", //Title
                genre: "Annimation", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2010, //When the movie is available to watch
                description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.", //Description of the movie
                image: "https://www.imdb.com/title/tt0892769/mediaviewer/rm2210040832/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=oKiYuIsPxYk",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Grease", //Title
                genre: "Comedy, Musical, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 1978, //When the movie is available to watch
                description: "Good girl Sandy Olsson and greaser Danny Zuko fell in love over the summer. When they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance?", //Description of the movie
                image: "https://www.imdb.com/title/tt0077631/mediaviewer/rm371555328/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=qDKo8DNpwOw",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Enough", //Title
                genre: "Crime, Drama, Thriller", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2002, //When the movie is available to watch
                description: "After running away fails, a terrified woman empowers herself in order to battle her abusive husband.", //Description of the movie
                image: "https://www.imdb.com/title/tt0278435/mediaviewer/rm2388594176/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=L1WWhWsvOZg",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "How to lose a guy in 10 days", //Title
                genre: "Comedy, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2003, //When the movie is available to watch
                description: "Benjamin Barry is an advertising executive and ladies' man who, to win a big campaign, bets that he can make a woman fall in love with him in 10 days.", //Description of the movie
                image: "https://www.imdb.com/title/tt0251127/mediaviewer/rm1893636352/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=2ZMGk_Ml1fc",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Saturday Night Fever", //Title
                genre: "Drama, Musical", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 1977, //When the movie is available to watch
                description: "Anxious about his future after high school, a 19-year-old Italian-American from Brooklyn tries to escape the harsh reality of his bleak family life by dominating the dance floor at the local disco.", //Description of the movie
                image: "https://www.imdb.com/title/tt0076666/mediaviewer/rm4215872768/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=RZTP586-Y9E",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Captain America", //Title
                genre: "Action, Adventure, Sci-Fi", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2011, //When the movie is available to watch
                description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization.", //Description of the movie
                image: "https://www.imdb.com/title/tt0458339/mediaviewer/rm2438905344/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=JerVrbLldXw",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Venom", //Title
                genre: "Action, Adventure, Sci-Fi", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2018, //When the movie is available to watch
                description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.", //Description of the movie
                image: "https://www.imdb.com/title/tt1270797/mediaviewer/rm629808385/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=u9Mv98Gr5pY",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Transformers", //Title
                genre: "Action, Adventure, Sci-Fi", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2007, //When the movie is available to watch
                description: "An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.", //Description of the movie
                image: "https://www.imdb.com/title/tt0418279/mediaviewer/rm1443106304/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=dxQxgAfNzyE",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Jumper", //Title
                genre: "Action, Adventure, Sci-Fi, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2007, //When the movie is available to watch
                description: "A teenager with teleportation abilities suddenly finds himself in the middle of an ancient war between those like him and their sworn annihilators.", //Description of the movie
                image: "https://www.imdb.com/title/tt0489099/mediaviewer/rm3268382720/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=DtacNQkFHvo",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "The last airbender", //Title
                genre: "Action, Adventure, Family", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2010, //When the movie is available to watch
                description: "Follows the adventures of Aang, a young successor to a long line of Avatars, who must master all four elements and stop the Fire Nation from enslaving the Water Tribes and the Earth Kingdom.", //Description of the movie
                image: "https://www.imdb.com/title/tt0938283/mediaviewer/rm549880576/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=WdoiHMCVqMQ",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Pacific Rim", //Title
                genre: "Action, Adventure, Sci-Fi", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2018, //When the movie is available to watch
                description: "Jake Pentecost, son of Stacker Pentecost, reunites with Mako Mori to lead a new generation of Jaeger pilots, including rival Lambert and 15-year-old hacker Amara, against a new Kaiju threat.", //Description of the movie
                image: "https://www.imdb.com/title/tt2557478/mediaviewer/rm498354944/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=_EhiLLOhVis",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Avatar", //Title
                genre: "Action, Adventure, Sci-Fi, Romance, Fantasy", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2009, //When the movie is available to watch
                description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.", //Description of the movie
                image: "https://www.imdb.com/title/tt0499549/mediaviewer/rm371527425/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=5PSNL1qE6VY",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "The Hunger Games", //Title
                genre: "Action, Adventure, Sci-Fi, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2012, //When the movie is available to watch
                description: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death", //Description of the movie
                image: "https://www.imdb.com/title/tt1392170/mediaviewer/rm2868031744/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=mfmrPu43DF8",  //Trailer URL's
            },
            {   id: "Popular", //Movie row name
                title: "Divergent", //Title
                genre: "Action, Adventure, Sci-Fi, Romance", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2014, //When the movie is available to watch
                description: "In a world divided by factions based on virtues, Tris learns she's Divergent and won't fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it's too late.", //Description of the movie
                image: "https://www.imdb.com/title/tt1840309/mediaviewer/rm2855260672/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Aw7Eln_xuWc",  //Trailer URL's
            },