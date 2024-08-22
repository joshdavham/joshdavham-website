export const posts = [
    {
        slug: 'zipf',
        title: "Science of Language Learning: Zipf's Law",
        content:
        `<p>
    I’ve decided to start a series of short blog posts where I’ll be exploring some of the concepts and ideas behind modern language learning that I find interesting and important. The series will be called the ‘Science of Language Learning’ and will touch on things like frequency lists, spaced repetition and word coverage, among other things.
</p>

<p>
    For the first post in this series I wanted to cover Zipf’s law. Zipf’s law, in the context of natural language, describes the relationship between how often words occur, and their ‘rank’ relative to other words in the text. It’s probably best to explain it with a graph.
</p>

<img src="/article_assets/en.png" alt="Zipf curve in English">

<p>
    The above graph plots the number of times each word occurs in the English novel “Pride and Prejudice". In this graph, each point is a unique word that occurred in the novel. Now if you squint your eyes and look at the first four points near the top left, you’ll notice that these four words occur disproportionately more often than the other words. These points represent the words ‘the’, ‘to, ‘of’ and ‘and’ which are the four most common words in the book. Other common words in the book are words like ‘her’, ‘she’, ‘be’, ‘in’, and ‘what’, but after those first couple of extremely common words, there’s a steep drop. The rest of the words like ‘concise’, ‘stubborn’, ‘harmony’ also occur in the book, but are far less frequent. Those words can be seen on the bottom right of the graph.
</p>

<p>
    What’s going on here is that there’s a small number of words that are very common in the text, but also a large number of words that are relatively uncommon. What’s so interesting about this phenomenon is that it’s not just unique to English or Pride and Prejudice. This same phenomenon occurs in every language for any sufficiently large body of text.
</p>

<p>
    Here’s the same analysis, but in French with the book “Madame Bovary”.
</p>

<img src="/article_assets/en_fr.png" alt="Zipf curves in English and French">

<p>
    As can be seen in the graph above, we get the same-shaped curve. Even though the languages and books were different, the behavior was the same.
</p>

<p>
    In French, the common words are also very similar. Among some of the most common words, we find ‘de’ (of), ‘je’ (I), ‘et’ (and), ‘elle’ (her) which are short, functional words like what we see in English. In general, the most common words in each language tend to be short and functional.
</p>

-

<p>
    Zipf’s law is what’s known as a power law distribution, which you may have heard of before. Power laws generally describe highly unequal phenomena, like wealth distribution (a small number of rich people have a disproportionate amount of the money) or city populations (there are a small number of huge cities with lots of people vs. a large number of small towns where there’s few people).
</p>

<p>
    One cool thing about power laws is that there’s a much nicer way to visualize them using a log-log plot.
</p>

<img src="/article_assets/log_en_fr.png" alt="Log-log plot of Frequency-rank for English and French">

<p>
    If you’re not familiar with what a log-log plot is, don’t worry about it, it’s just another way to visualize power law data, but in a nicer way.
</p>

<p>
    Here, we have the log-log plot for four different languages from four different books:
</p>

<img src="/article_assets/log_en_fr_zh_el.png" alt="Log-log plot of Frequency-rank for English, French, Greek and Chinese">

<p>
    Once again, we can see that each language exhibits the same behavior. 
</p>

<p>
    In fact, <a href="http://bactra.org/weblog/491.html">while you’re technically not supposed to do this</a>, you can actually model these curves quite accurately with straight lines using a linear regression model.
</p>

<img src="/article_assets/pred_log_en_fr_zh_el.png" alt="Linear regression curves on log-log plot of Frequency-rank for English, French, Greek and Chinese">

<p>
    What we can see above is that the Zipf phenomenon is actually pretty easy to model and make predictions with, which can be quite useful for research purposes.
</p>

-

<p>
    But how is any of this relevant to language learning?
</p>

<p>
    Zipf’s law actually has a ton of implications for language learning, but here I’ll only touch on the two implications that I find the most interesting.
</p>

<p>
    The first implication is that some words are much more useful than others. If you’re just starting out learning English, it’s probably better to learn words like ‘go’, ‘him’, and ‘eat’ before words like ‘generalize’, ‘vegetation’ or ‘bombastic’.
</p>

<p>
    This realization has led some language learners to create ‘frequency lists’ of each language’s most common words. Some believe that it’s a good idea to study vocabulary according to a frequency list because it allows you to focus on the words that are used most often while not wasting too much time on words that are only used rarely. And while not all language learners agree that you should use a frequency list, they are becoming more popular and have certainly helped a lot of people.
</p>

<p>
    The second interesting implication of Zipf’s law is that it also roughly describes the order in which learners naturally tend to acquire vocabulary.
</p>

<p>
    Because the most common words are repeated so often, they also tend to get acquired first by new learners while the more uncommon words tend to get acquired later. It’s interesting that, whether or not a learner decides to use a frequency list, they will still end up acquiring the most commonly used words first, anyways. 
</p>

<p>
    As a consequence, one rough measure for judging a language learner’s level in the language is to simply figure out how many rare words they know. A learner who lacks knowledge of a language’s most common words is clearly a beginner, but a learner who knows thousands of rare words is usually much more advanced.
</p>

-

<p>
    There are many more concepts that are closely related to Zipf’s law that have interesting implications to language learning, but I think I’ll stop myself here for today. I do plan on covering related topics such as Heap’s Law, word coverage and hapax legomena, but those will be for another post. In summary, Zipf’s law is a power law that describes the relationship between word frequency and rank in every human language and we can use this curve to help us better understand how to acquire vocabulary in a foreign language.
</p>`
    },

    {
        slug: 'english-threshold',
        title: 'The English Threshold',
        content:
        `<p>
    Most language learners will probably agree that one of the most demoralizing parts of the whole language learning process is attempting to speak your target language with a native speaker, only for that speaker to then switch to English on you.
</p>

<p>
    This situation is so common in fact, that I’ve even heard some language learners refer to it as “getting English’d”.
</p>

<p>
    To new learners, getting English’d sorta feels like receiving an insult. You’ve put hundreds of hours into learning their language and are genuinely trying your best, only to have a native speaker invalidate all that effort by switching to English.
</p>

<p>
    And while getting English’d may feel insulting at first, one should keep in mind that native speakers aren’t actually trying to be rude when they do this.
</p>


For example,

<ol>
    <li>From their perspective, they may see that you’re struggling with their language, and so in order to help you, they switch to English.</li>
    <li>Your language skills may actually be fine, but you might have tried speaking your target language in a more English-speaking context where speaking a different language doesn’t exactly make sense or is rude/exclusionary to others.</li>
    <li>Or it could simply be that the native speaker couldn’t understand you and so opted for English, for their own sake.</li>
</ol>

<p>
    “Great”, you might be thinking. “Native speakers aren’t trying to be rude, but how do I stop getting English’d?”
</p>

<p>
    With the exception of number 2., the only real way to prevent getting English’d in the future is to become better at your target language than the native speaker is at English. I’m calling this the “English Threshold” - the level of language ability past which native speakers will prefer to speak to you in their language rather than in English.
</p>

<p>
    In my personal opinion, the minimum goal of any serious language learner should be to surpass the English threshold. After all, what’s the point of learning a language if all the native speakers will just end up refusing to speak it with you?
</p>

<p>
    To reach the English threshold, however, we’re left with a bit of a chicken and egg problem. How are you supposed to get better at speaking your target language if native speakers keep refusing to speak it with you?
</p>

<p>
    The answer might sound a bit counter-intuitive, but your first job should be to get better at listening. When you develop your listening skills first, you eliminate the possibility of native speakers switching to English because you didn’t understand them. Also, from my experience, learners who put speaking on hold for the first couple of months (or years), and instead focused on listening, ended up with much better pronunciation and accents than those who spoke a lot early on. If you can speak the language with a good accent and good pronunciation, you’re a lot more likely to be understood by the native speaker, thus giving them one fewer reason to switch to English.
</p>

<p>
    You will eventually have to get out there and practice speaking though. Being a good listener will only get you so far. And, besides, in today’s English-speaking world, I don’t think any language learner is truly immune to getting English’d anyways.
</p>

-

<p>
    Now before concluding this post, I want to touch on one more interesting consequence of the English threshold, which is that some language groups have lower English thresholds than others.
</p>

<p>
    For instance, it’s pretty common knowledge that the Japanese struggle more with English than the Swedish. And so, another way to think of the two language groups is that Japanese has an overall lower English threshold than Swedish does. To surpass the English threshold in Japanese, you only need mediocre Japanese, but to surpass the English threshold in Swedish, you have to be really fluent.
</p>

<p>
    As a consequence, if we maintain that the minimum goal of any serious language learner should be to surpass the English threshold, this may actually imply that Japanese could be easier to learn than Swedish.
</p>

<p>
    Or instead, to take a much less extreme example, suppose we were to imagine an American learning French in order to move to Quebec vs learning Spanish to move to Mexico. For an English-speaking American, French and Spanish are about equally distant languages so they should be about equally challenging in theory. But if we take into account the very high levels of English proficiency among French speakers in Quebec vs the very low levels of English among Mexicans, it becomes fairly obvious that, in this situation, French would be the harder language to learn.    
</p>

<p>
    Relating the above to my personal experience as a Canadian learning French, I can say that there definitely is a much higher bar in this country. Because francophones here are so good at English, for them to prefer speaking French with us instead of English, we have to meet them at their level of ability and that level is high! I’ve personally heard at least a dozen stories of people who did all their schooling from grades 1-12 in French immersion schools, only to later visit Montreal and get English'd by the locals.
</p>

<p>
    Now that I’m learning Japanese, the pressure to be really good at the language seems to have mostly faded away. I still intend to become good at Japanese though, it’s just that now I don’t have to.
</p>

-

<p>
    Anyways, I think I'll end things here and say that I hope that the ideas in this post were interesting or provided food for thought. I’m still not exactly sure of what the other consequences of the English threshold are or should be, but I suspect there may be plenty more to discover.
</p>`
    },

    {
        slug: 'midwit',
        title: 'Explaining the Midwit meme',
        content:
        `<p>
    “An idiot admires complexity. A genius admires simplicity.”
    - Terry Davis
</p>

<p>
    I’ve been obsessed with the Midwit meme for a little over a year now. If the name doesn’t ring a bell, it’s this one:
    <br />
    <br />
    <img src="/article_assets/midwit.jpg" alt="Midwit meme template"/>
</p>

<p>
    The meme is is as follows: it’s an IQ “bell curve” where the idiot and the genius have come to the same, simple conclusion while the person in the middle - the “midwit” - arrives at some smart-sounding, but also wildly over-complicated conclusion.
</p>

<p>
    Here are a couple of my favorite examples:
    <br />
    <br />
    <br />
    <br />
    <img src="/article_assets/diet.png" alt="Midwit meme about overcomplicating losing weight.">
    <br />
    <br />
    <br />
    <br />
    <img src="/article_assets/productivity.jpeg" alt="Midwit meme about overcomplicating note taking.">
    <br />
    <br />
    <br />
    <br />
    <img src="/article_assets/cefr.png" alt="Midwit meme about the CEFR complicating language proficiency.">
    <br />
    <br />
    <br />
    <br />
    <img src="/article_assets/general.png" alt="Midwit meme mocking people who don't make speak generally about things.">
</p>

<p>
    The reason I think this meme fascinates me so much is that I feel like I see it occuring around every corner, especially in my areas of interest, namely language learning and software development.
</p>

<p>
    But what exactly causes this midwit phenomena? Is it just a simple joke with a couple of funny examples? Or is there something deeper going on?
</p>

<p>
    After thinking about it way too much, I’ve come to believe that there actually is a fundamental cause behind the midwit phenomena which I’ll get into here.
</p>

<p>
    At the left end of the curve, we have the idiot. And because he’s an idiot, he can’t handle much complexity. His only possible choice is to opt for the simple conclusion. Pretty self-explanatory.
</p>

<p>
    In the middle, we have the midwit. The midwit isn’t exactly very smart (or dumb), but he is smart enough to handle complexity. And that’s where things start to go wrong. He’s smart enough to handle complexity, but he’s not smart enough to simplify that complexity …which is why he’s left with his overly-complex mess.
</p>

<p>
    On the right end of the curve, we have the genius. Just like the midwit, the genius can also handle complexity. But what differentiates the genius from the midwit is his ability to wrangle that complexity and simplify things back down again. He fundamentally views complexity as a problem - not as a feature - and works hard to avoid complexity wherever it arises.
</p>

<p>
    To programmers reading this, a lot of the above should sound pretty familiar. We all know that it actually isn’t that hard to build a complex project. Even noobs can do it. But things start to get hard when you try to reduce that complexity back down again (or even worse: not introduce that complexity in the first place). To simplify a complex program, you gotta be extra smart.
</p>

-

<p>
    Anyways, I think I’ll conclude this little post by recognizing that I may have just accidentally outed myself as a midwit by overcomplicating a very simple meme. The irony is not lost on me though, so maybe there’s hope.
</p>`
    },

    {
        slug: 'french-hard',
        title: 'Why French is so hard to understand',
        content:
        `<p>One of the first things new French learners notice early on is just how hard the language is to understand. It’s not obvious to most French learners why this is; only that French seems to become significantly harder when it moves from words on a page to words coming out of another person’s mouth.</p>

<p>This problem isn’t completely unique to French, though. Pretty much all language learners report that the spoken language is harder to understand than the written language (even Chinese and Japanese learners often agree). The consensus among some language learners is that, it’s not that the language you were unfortunate enough to choose is particularly hard to understand, it’s that all languages are hard to understand. And while I partially agree with this, I actually do believe that French is uniquely hard to understand in ways that other languages are not.</p>

<h2>Nasal vowels</h2>

<p>
    To start off, in French we have what are called ‘nasal vowels’. These are vowels like a,e,i,o,u, but that are pronounced mainly by pushing air out of your nose instead of your mouth. You can hear each of the four main nasal vowels in the sentence <b>Un bon vin blanc</b> (meaning: a nice white wine).
</p>

<audio controls>
    <source src="/article_assets/Un bon vin blanc.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

<p>Nasal vowels are especially hard for English speakers like myself because, well, our language doesn’t exactly have any. One example of a nasally English word is "sing" where the ‘ng’ at the end is pronounced mainly through the nose. But even that analogy is a bit of a stretch.</p>

<p>French having sounds that don’t exist in English is one thing, but it also doesn’t help that these sounds (while in fact distinct) actually sound very similar when pronounced. To new learners ‘son’ and ‘sans’ may sound approximately the same while the sounds ‘in’ and ‘un’ are so similar that they are even merging into a single indistinguishable sound in some regions of France.</p>

<h2>Liaison</h2>

<p>Next, we have what’s referred to as ‘liaison’ in French. While the concept may sound fancy or complicated, ‘liaison’ just means ‘linking’ or ‘connection’. It’s the phenomena of how French words will sorta bleed into each other; how one word becomes connected to the next one.</p>

<p>To explain liaison, I’ll use the following example: <b>Vous êtes en état d’arrestation</b> (meaning: you are under arrest).</p>


If we were to pronounce each of the first three words by themselves, their respective pronunciations would have been:

<ul>
    <li>Vous = “voo”</li>
    <li>êtes = “ett”</li>
    <li>en ~ "awh" (again, hard to represent in English because we don’t have nasal vowels)</li>
</ul>


But, when linked together, they become

<ul>
    <li>Vous = “vooz”</li>
    <li>êtes = “etts”</li>
    <li>en ~ “on”</li>
</ul>

So, "<u>Vous-êtes-en-état</u> d'arrestation".

<p>The reason those words changed here is because each of the words that came right after started with a vowel. If the sentence were instead “Vous venez de Paris” (You’re from Paris?), because “venez” starts with a consonant, the “Vous” that came before it would be pronounced “voo” again, not "vooz". </p>

<p>Why the French language has this feature, I have no idea, but what’s for certain is that this feature of the language makes it much harder for learners to tell when one word ends and the next one begins.</p>

<h2>Elision</h2>

<p>Closely related to liaison is “elision” which is when one word is cut short and then merged into the next one. I asked ChatGPT to give me an example of a sentence that uses lots of elision and got the following: <b>L’homme qu’on a vu à l’hôtel n’a rien dit</b> (the man that we saw at the hotel didn’t say anything).</p>

<p>In this sentence, you can see where the elisions are by looking at the apostrophes ( ‘ ).</p>


We can actually further break this sentence down into what it would’ve been without the elisions to get the following:

<br />
<br />
Le homme que on a vu à le hôtel ne a rien dit.
<br />
<br />

Which shows that

<ul>
    <li>Le + homme = L’homme</li>
    <li>que + on = qu’on</li>
    <li>le + hôtel = l’hôtel</li>
    <li>ne + a = n’a</li>
</ul>

<p>And so just like liaison, elision <i>also</i> makes it hard to hear when one word ends and the next one begins.</p>

<h2>Lack of intonation</h2>

<p>The last aspect of French I’d like to talk about is its intonation. Compared to other languages, French is remarkably flat and monotone. In English we have stress, in Chinese, they have tones and in Japanese, there’s pitch accent.</p>

<p>If you’re not familiar with what stress is in English, it’s the syllable that you emphasize in each word. For example, "tomorrow” is pronounced "toMOrrow", not "tomoRROW" or "TOmorrow". There’s also the sentence “I present to you my present” where the first present is pronounced "preSENT" and the second one is "PREsent".</p>

<p>Chinese doesn’t have stress but instead has tones where the tone of each syllable will either go up, go down, stay flat or go down then back up again. And in Japanese, there’s pitch accent where each syllable is either pronounced with a low pitch or a high pitch and each word has its own unique pitch pattern.</p>

<p>But “what does French have?”, you might be wondering. Well, none of those. It doesn’t have stress, tones, pitch accent or even syllables that are held longer than others.</p>

<p>
    Now you may think that the lack of intonation in French would make it easier to learn, and in some ways it does, but it also makes the language a lot harder to understand. Imagine, for example, if I waved a magic wand and made stress disappear completely from English. Do you think that would make English easier to understand? What about if we got rid of tones in Chinese?
</p>

-

<p>
    If we now combine all of the above, we get a nasally language that systematically chops up and strings its words together and is, on the whole, kinda flat. It’s not particularly surprising then that people learning this language would complain that it’s hard to understand. This language is basically the phonetic equivalent of messy handwriting.
</p>

<p>
    But there is a bright side to this. A language with these qualities is also a language that is soft on the ears, flows poetically and sounds sorta …romantic?
</p>

<p>
    Ironically, what makes the French language so hard to understand might also be what makes it so beautiful.
</p>`
    }
];