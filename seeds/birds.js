
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        { 
          id: 9000, name: "tūī", species: "prosthemadera novaeseelandiae", 
          icon: "https://farm3.staticflickr.com/2539/5843624776_c7339895e7_z.jpg",
          img_url: "http://nzbirdsonline.org.nz/sites/all/files/1200543Tui%20x2800.JPG",
          description: JSON.stringify([
              "Tūī are boisterous, medium-sized, common and widespread bird of forest and suburbia – unless you live in Canterbury. They look black from a distance, but in good light tūī have a blue, green and bronze iridescent sheen, and distinctive white throat tufts (poi). They are usually very vocal, with a complicated mix of tuneful notes interspersed with coughs, grunts and wheezes. In flight, their bodies slant with the head higher than the tail, and their noisy whirring flight is interspersed with short glides.",
              "It is one of the largest species in the diverse Australasian honeyeater family, and one of two living species of that family found in New Zealand, the other being the New Zealand bellbird (known as korimako and makomako). The tūī has a wide distribution in the archipelago, ranging from the subtropical Kermadec Islands to the sub-Antarctic Auckland Islands, as well as the main islands.",
              "Nectar is the normal diet but fruit and insects are frequently eaten, and pollen and seeds more occasionally. Particularly popular is the New Zealand flax (harakeke), whose nectar sometimes ferments, resulting in the tūī flying in a fashion that suggests that they might be drunk. They are the main pollinators of harakeke, kowhai, kaka beak and some other plants. Note that the flowers of the three plants mentioned are similar in shape to the tūī's beak—a vivid example of mutualistic coevolution.",
              "Tūī have complex variety of songs and calls, much like parrots. They also resemble parrots in their ability to clearly imitate human speech, and were trained by Māori to replicate complex speech. Tūī are also known for their noisy, unusual call, different for each individual, that combine bellbird-like notes with clicks, cackles, timber-like creaks and groans, and wheezing sounds. Songbirds have two voice boxes and this is what enables them to perform such a myriad of vocalisations.",
              "Some of the wide range of tūī sounds are beyond the human register. Watching a tūī sing, one can observe gaps in the sound when the beak is agape and throat tufts throbbing. However, ongoing research has so far failed to detect ultrasound within tūī vocalisations.[citation needed] Tūī will also sing at night, especially around the full moon period."
          ]) 
      },
      { 
          id: 9001, name: "kāhu", "alias": "swamp harrier", species: "circus approximans",
          icon: "https://c2.staticflickr.com/4/3528/3270629169_a0a1940a97.jpg",
          img_url: "https://www.wingspan.co.nz/images/australasian-nz-harrier-1000x373.jpg",
          description: JSON.stringify([
              "The swamp harrier is a large, tawny-brown bird of prey that occurs throughout New Zealand. It is an opportunistic hunter that searches for food by slowly quartering the ground with its large wings held in a distinctive shallow V-shape. Adapted to hunt in open habitats, its numbers have benefitted from widespread forest clearance and the development of agriculture. Although carrion is a major component of the harrier’s diet, it also actively hunts live prey such as small birds, mammals and insects. Capable dispersers, kāhu from New Zealand visit islands as far north as the Kermadec Islands and as far south as Campbell Island. Known for their dramatic ‘sky-dancing’ courtship display the swamp harrier is the largest of the 16 species of harriers found worldwide.",
              "First winter harriers have brown eyes, dark brown plumage with an obvious white nape patch. As the birds get older the eyes and the plumage gets paler. Very old birds can appear almost grey white. Females are larger than the males.",
              "Kāhu have been historically used for falconry in New Zealand; quarry is usually pukeko and young rabbits. Wild kāhu however have been known to kill young kārearea and have also been heavily blamed and persecuted for killing chickens, pheasants and ducklings.",
              "The hawk appears in Māori mythology in the story of Maui, where we are told that the colour of its plumage is the result of it having been scorched by the fire of Mahuika when that being tried to destroy Maui.",
              "Everywhere in the world raptors are in decline. It is good to know that Kāhu, the harrier, is one raptor who is holding his own."
          ])
      },
      { 
          id: 9002, name: "hihi", "alias": "Stitchbird", species: "notiomystis cincta",
          icon: "https://1.bp.blogspot.com/-XCCtiTyVABc/UUeT0qu7LoI/AAAAAAAAIRg/Nfo31P_qp4w/s1600/Hihi.jpg",
          img_url: "https://docnz.files.wordpress.com/2013/11/hihi-stitchbird.jpg",
          description: JSON.stringify([
              "They can hover like great bees or humming birds in front of blossoms. With the sunlight falling full on the splendid gold of the outspread wings, or the deep blacks and pure whites of head and neck, the male then appears not a bird but a huge brilliant tropical butterfly — a magnificent creature indeed.",
              "The hihi was both rare and poorly known until the 1990s, as few people had an opportunity to visit the single remnant population on Little Barrier Island. However, thanks to successful conservation management and research, the stitchbird is now one of the better studied New Zealand bird species. Hihi are often curious, approaching people for close examination whilst emitting warning calls; yet the calls’ high pitch, and the bird’s rapid movements and colouration can make them hard to detect.",
              "In 2005, 60 hihis were released into Zealandia (wildlife sanctuary) near Wellington and in October that year, three hihi chicks hatched there, the first time for more than 120 years that a stitchbird chick had been born on mainland New Zealand. The hatchings were described as a significant conservation milestone by sanctuary staff, and in early 2019 Zealandia banded their 1000th hihi chick although the adult population is believed to remain at about 100 birds.",
              "Until 2006 the hihi was considered to be a honeyeater (Family Meliphagidae), which includes tui and bellbird and other Australasian and Pacific species. However, genetic studies showed that the hihi belongs to a family of its own (Notiomystidae), closest to the New Zealand wattlebirds (Callaeidae, comprising huia, kokako and saddlebacks). The hihi has a complex and unusual breeding system that includes pair and group nesting as well as promiscuity. They use a variety of mating positions and strategies that, when considered together, are unique in the bird world.",
              "The hihi is a small bird, and very like a honeyeater. Males have a dark velvety cap and short white ear-tufts, which can be raised somewhat away from the head. A yellow band across the chest separates the black head from the rest of the body, which is grey. Females and juveniles are duller than males, lacking the black head and yellow chest band. The bill is rather thin and somewhat curved, and the tongue is long with a brush at the end for collecting nectar. Thin whiskers project out and slightly forward from the base of the bill.",
              "Hihi have a large repertoire of vocalizations. Perhaps the most distinctive is their strident call which has been noted to have a fanciful resemblance to the word “stitch” and hence their English name – stichbird. In addition the males also make powerful high pitched single, double (“tee–cee”) and triple note calls (“tee–cee–VEE”) and both sexes have a low warbling song which can last for several minutes."
          ]) 
      },
      { 
          id: 9003, name: "roa", "alias": "great spotted kiwi", species: "apteryx haastii",
          icon: "https://4.bp.blogspot.com/-lp7pLy-5OU8/TwPcdKNcDRI/AAAAAAAAExs/2R6_bokU9Yc/s1600/great+spotted+kiwi.jpg",
          img_url: "http://nzbirdsonline.org.nz/sites/all/files/120051Great-Spotted-Kiwi_Willowbank_4231-SBernert.jpg",
          description: JSON.stringify([
              "The second largest of the five kiwi species, they are widespread in forest, scrub, upland tussock grasslands and subalpine zones of the north-western South Island. Like other kiwi, they are flightless, with tiny vestigial wings and no tail.", 
              "Being nocturnal, roa are therefore more often heard than seen. Males give a repeated high-pitched ascending whistle, females give a slower and lower pitched ascending whistle. Plumage is brownish-grey finely mottled or banded horizontally with white, a long pale bill, short dark legs and toes, often with dark or dark streaked claws.",
              "DNA sequence comparisons have yielded the surprising conclusion that kiwi are much more closely related to the extinct Malagasy elephant birds than to the moa with which they shared New Zealand.",
              "The rugged topography and harsh climate of the high altitude, alpine, part of its habitat render it inhospitable to a number of introduced mammalian predators, which include dogs, ferrets, cats and stoats. Because of this, populations of this species have been less seriously affected by the predations of these invasive species compared to other kiwi. Because adult roa are large and powerful, they are also able to fend off most predators, such as stoats, ferrets, possums and cats (not dogs though).",
              "The roa is nocturnal in behaviour. If the roa live in an area lacking predators, they will come out in the day. At night, they come out to feed. Like other species of kiwi, they have a good sense of smell, which is unusual in birds. Males are fiercely territorial. At most, four to five roa live in a square kilometre. One pair's territory can be 25 hectares in size. It is not known how they defend such a large territory in proportion to their size. They will call, chase, or fight intruders out. Vocalisations of the roa include growls, hisses, and bill snapping. Roa males have a call that resembles a warbling whistle, while the female call is harsh raspy, and also warbling",
              "The kiwi's egg is one of the largest in proportion to body size (up to 20% of the female's weight) of any species of bird in the world. Other unique adaptations of kiwi, such as their hairlike feathers, short and stout legs, and using their nostrils at the end of their long beak to detect prey before they ever see it, have helped the bird to become internationally well-known.",
              "The Kiwi is the national symbol of New Zealand. This bird is greatly treasured by the Maori. Sightings of some birds brought good or sometimes bad omen. Others were messengers of death."
          ]) 
      }
      ]);
    });
};