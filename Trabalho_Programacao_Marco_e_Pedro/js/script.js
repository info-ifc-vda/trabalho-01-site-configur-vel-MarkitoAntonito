const imglw = document.getElementById("logo-word")

const imgl = document.getElementById("logo");

const album = document.getElementById("album");

const imgac = document.getElementById("album-cover");

const imgc = document.getElementById("image-carousel");

const lista = document.getElementById("track-listing");

const arrowaccordion1 = document.getElementById("arrow-accordion1");

const arrowaccordion2 = document.getElementById("arrow-accordion2");

const arrowaccordion3 = document.getElementById("arrow-accordion3");

const duracao = document.getElementById("duration-text");

const membros = document.getElementById("members-list");

const musica1 = document.getElementById("musica-1");
const musica2 = document.getElementById("musica-2");
const musica3 = document.getElementById("musica-3");
const musica4 = document.getElementById("musica-4");
const musica5 = document.getElementById("musica-5");
const musica6 = document.getElementById("musica-6");
const musica7 = document.getElementById("musica-7");
const musica8 = document.getElementById("musica-8");
const musica9 = document.getElementById("musica-9");
const musica10 = document.getElementById("musica-10");
const musica11 = document.getElementById("musica-11");
const musica12 = document.getElementById("musica-12");
const musica13 = document.getElementById("musica-13");

const membro1 = document.getElementById("membro-1");
const membro2 = document.getElementById("membro-2");
const membro3 = document.getElementById("membro-3");
const membro4 = document.getElementById("membro-4");
const membro5 = document.getElementById("membro-5");

const sobre = document.getElementById("about-album");

const navbar = document.getElementById("navbar");

const informative = document.getElementById("informative");

const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const header3 = document.getElementById("header3");

const curiosities = document.getElementById("curiosities");


function mudarBanda() {
   if (imglw.src.includes("radiohead")) {
      imglw.src = "images/sp-logo-word.png";
   } else {
      imglw.src = "images/radiohead-word-logo.png";
   }

   if (imgl.src.includes("radiohead")) {
      imgl.src = "images/sp-logo.png";
   } else {
      imgl.src = "images/radiohead-logo.png"
   }

   if (album.textContent == "OK COMPUTER") {
      album.textContent = "SIAMESE DREAM";
   } else {
      album.textContent = "OK COMPUTER";
   }

   if (imgac.src.includes("okcomputer")) {
      imgac.src = "images/siamesedream-ac.jpg";
   } else {
      imgac.src = "images/okcomputer-ac.jpg";
   }  

   if (imgc.src.includes("ok")) {
      imgc.src = "images/gallery/siamese-dream-gallery-1.jpg";
   } else {
      imgc.src = "images/gallery/ok-computer-gallery-1.jpg";
   }

   if (imglw.src.includes("radiohead")) {
      sobre.textContent = "OK Computer é o terceiro álbum de estúdio da banda britânica Radiohead, sendo lançado em maio de 1997. Diferente de seu álbum predecessor, The Bends, OK Computer traz letras abstratas e temas como distopia, consumismo desenfreado, anticapitalismo, alienação, tecnologia emergente, insanidade e morte. O seu som menos tradicional e mais denso, em camadas, foi um ponto de partida para a mudança radical da banda com seus próximos lançamentos, Kid A e Amnesiac. 'Paranoid Android', 'Karma Police', 'Lucky' e 'No Surprises' foram lançados como singles. É criticamente elogiado até os dias de hoje, recebendo notas altíssimas nas revistas e organizações da época. Foi lançada uma versão remasterizada e com faixas adicionais em 2017, nomeada 'OKNOTOK 1997 2017'.";
   } else {
      sobre.textContent = "Siamese Dream é o segundo álbum de estúdio da banda The Smashing Pumpkins, lançado em 27 de julho de 1993 nos Estados Unidos. O primeiro álbum da banda 'Gish', lançado em 1991, fez um inesperado sucesso, o que tornou Siamese Dream um dos álbuns mais esperados da época, como descreveria Billy Corgan, frontman da banda: 'senti essa grande pressão de fazer nosso próximo álbum colocar o mundo em chamas'. A enorme pressão por sucesso agravou problemas já existentes na banda: o baterista Jimmy Chamberlin era viciado em heroína, o guitarrista James Iha e a baixista D’arcy Wretzky acabavam de terminar seu relacionamento amoroso e Billy Corgan, além de enfrentar ganha de peso e tendências suicidas passava por grave bloqueio criativo. Apesar de tudo o resultado foi um álbum visceral, um recorte da parte mais profunda de Corgan, e um dos melhores álbuns da história da música.";
   }

   if (imglw.src.includes("radiohead")) {
      musica1.textContent = "Airbag";
   } else {
      musica1.textContent = "Cherub Rock";
   }
   if (imglw.src.includes("radiohead")) {
      musica2.textContent = "Paranoid Android";
   } else {
      musica2.textContent = "Quiet";
   }
   if (imglw.src.includes("radiohead")) {
      musica3.textContent = "Subterranean Homesick Alien";
   } else {
      musica3.textContent = "Today";
   }
   if (imglw.src.includes("radiohead")) {
      musica4.textContent = "Exit Music (For a Film";
   } else {
      musica4.textContent = "Hummer";
   }
   if (imglw.src.includes("radiohead")) {
      musica5.textContent = "Let Down";
   } else {
      musica5.textContent = "Rocket";
   }
   if (imglw.src.includes("radiohead")) {
      musica6.textContent = "Karma Police";
   } else {
      musica6.textContent = "Disarm";
   }
   if (imglw.src.includes("radiohead")) {
      musica7.textContent = "Fitter Happier";
   } else {
      musica7.textContent = "Soma";
   }
   if (imglw.src.includes("radiohead")) {
      musica8.textContent = "Electioneering";
   } else {
      musica8.textContent = "Geek U.S.A.";
   }
   if (imglw.src.includes("radiohead")) {
      musica9.textContent = "Climbing Up Your Walls";
   } else {
      musica9.textContent = "Mayonaise";
   }
   if (imglw.src.includes("radiohead")) {
      musica10.textContent = "No Surprises";
   } else {
      musica10.textContent = "Spaceboy";
   }
   if (imglw.src.includes("radiohead")) {
      musica11.textContent = "Lucky";
   } else {
      musica11.textContent = "Silverfuck";
   }
   if (imglw.src.includes("radiohead")) {
      musica12.textContent = "The Tourist";
   } else {
      musica12.textContent = "Sweet Sweet";
   }
   if (imglw.src.includes("radiohead")) {
      musica13.style.display = "none";
   } else {
      musica13.style.display = "list-item";
   }         

   if (imglw.src.includes("radiohead")) {
      duracao.textContent = "53:21";
   } else {
      duracao.textContent = "62:17";
   }

   if (imglw.src.includes("radiohead")) {
      membro1.textContent = "Thom Yorke";
   } else {
      membro1.textContent = "Billy Corgan";
   }
   if (imglw.src.includes("radiohead")) {
      membro2.textContent = "Jonny Greenwood";
   } else {
      membro2.textContent = "James Iha";
   }
   if (imglw.src.includes("radiohead")) {
      membro3.textContent = "Colin Greenwood";
   } else {
      membro3.textContent = "D'arcy Wretzky";
   }
   if (imglw.src.includes("radiohead")) {
      membro4.textContent = "Ed O'Brien";
   } else {
      membro4.textContent = "Jimmy Chamberlin";
   }
   if (imglw.src.includes("radiohead")) {
      membro5.style.display = "list-item";
   } else {
      membro5.style.display = "none";
   }   

   if (imglw.src.includes("radiohead")) {
      navbar.style.backgroundColor = "rgba(81, 161, 214)";
   } else {
      navbar.style.backgroundColor = "rgba(232, 153, 86)";
   }

   if (imglw.src.includes("radiohead")) {
      informative.style.backgroundColor = "rgba(202, 230, 238)";
   } else {
      informative.style.backgroundColor = "rgba(254,242,220)";
   }

   if (imglw.src.includes("radiohead")) {
      header1.style.backgroundColor = "rgba(152, 194, 206)";
   } else {
      header1.style.backgroundColor = "rgba(212,83,82)";
   }

   if (imglw.src.includes("radiohead")) {
      header2.style.backgroundColor = "rgba(152, 194, 206)";
   } else {
      header2.style.backgroundColor = "rgba(212,83,82)";
   }

   if (imglw.src.includes("radiohead")) {
      header3.style.backgroundColor = "rgba(152, 194, 206)";
   } else {
      header3.style.backgroundColor = "rgba(212,83,82)";
   }

   if (imglw.src.includes("radiohead")) {
      curiosities.style.backgroundColor = "rgba(202, 230, 238)";
   } else {
      curiosities.style.backgroundColor = "rgba(254,242,220)";
   }
}

function irProximaImagem() {

   const currentSrc = imgc.getAttribute('src');


   if (imglw.src.includes("radiohead")) {
      if (currentSrc === "images/gallery/ok-computer-gallery-1.jpg") {
         imgc.src = "images/gallery/ok-computer-gallery-2.jpg"
      } else if (currentSrc === "images/gallery/ok-computer-gallery-2.jpg") {
         imgc.src = "images/gallery/ok-computer-gallery-3.jpg"
      } else if (currentSrc === "images/gallery/ok-computer-gallery-3.jpg") {
         imgc.src = "images/gallery/ok-computer-gallery-4.jpg"
      } else if (currentSrc === "images/gallery/ok-computer-gallery-4.jpg") {
         imgc.src = "images/gallery/ok-computer-gallery-5.jpg"
      } else if (currentSrc === "images/gallery/ok-computer-gallery-5.jpg") {
         imgc.src = "images/gallery/ok-computer-gallery-1.jpg"
      }
   }

   if (imglw.src.includes("sp")) {
      if (currentSrc === "images/gallery/siamese-dream-gallery-1.jpg") {
         imgc.src = "images/gallery/siamese-dream-gallery-2.jpg"
      } else if (currentSrc === "images/gallery/siamese-dream-gallery-2.jpg") {
         imgc.src = "images/gallery/siamese-dream-gallery-3.jpg"
      } else if (currentSrc === "images/gallery/siamese-dream-gallery-3.jpg") {
         imgc.src = "images/gallery/siamese-dream-gallery-4.jpg"
      } else if (currentSrc === "images/gallery/siamese-dream-gallery-4.jpg") {
         imgc.src = "images/gallery/siamese-dream-gallery-5.jpg"
      } else if (currentSrc === "images/gallery/siamese-dream-gallery-5.jpg") {
         imgc.src = "images/gallery/siamese-dream-gallery-1.jpg"
      }
   }

}

function irAnteriorImagem() {

   const currentSrc = imgc.getAttribute('src');


   if (imglw.src.includes("radiohead")) {
      if (currentSrc === "images/gallery/ok-computer-gallery-1.jpg") {
         imgc.src = "images/gallery/ok-computer-gallery-5.jpg"
      } else if (currentSrc === "images/gallery/ok-computer-gallery-5.jpg") {
         imgc.src = "images/gallery/ok-computer-gallery-4.jpg"
      } else if (currentSrc === "images/gallery/ok-computer-gallery-4.jpg") {
         imgc.src = "images/gallery/ok-computer-gallery-3.jpg"
      } else if (currentSrc === "images/gallery/ok-computer-gallery-3.jpg") {
         imgc.src = "images/gallery/ok-computer-gallery-2.jpg"
      } else if (currentSrc === "images/gallery/ok-computer-gallery-2.jpg") {
         imgc.src = "images/gallery/ok-computer-gallery-1.jpg"
      }
   }

   if (imglw.src.includes("sp")) {
      if (currentSrc === "images/gallery/siamese-dream-gallery-1.jpg") {
         imgc.src = "images/gallery/siamese-dream-gallery-5.jpg"
      } else if (currentSrc === "images/gallery/siamese-dream-gallery-5.jpg") {
         imgc.src = "images/gallery/siamese-dream-gallery-4.jpg"
      } else if (currentSrc === "images/gallery/siamese-dream-gallery-4.jpg") {
         imgc.src = "images/gallery/siamese-dream-gallery-3.jpg"
      } else if (currentSrc === "images/gallery/siamese-dream-gallery-3.jpg") {
         imgc.src = "images/gallery/siamese-dream-gallery-2.jpg"
      } else if (currentSrc === "images/gallery/siamese-dream-gallery-2.jpg") {
         imgc.src = "images/gallery/siamese-dream-gallery-1.jpg"
      }
   }   

}

function mudarEstadoListaDeMusicas() {
   if (lista.style.display === "none" || lista.style.display === "") {
      lista.style.display = "block";
      arrowaccordion1.classList.add("arrow-flip")
   } else {
      lista.style.display = "none"
      arrowaccordion1.classList.remove("arrow-flip")
   }
}

function mudarEstadoDuração() {
   if (duracao.style.display === "none" || duracao.style.display === "") {
      duracao.style.display = "block";
      arrowaccordion2.classList.add("arrow-flip")
   } else {
      duracao.style.display = "none"
      arrowaccordion2.classList.remove("arrow-flip")
   }
}

function mudarEstadoMembros() {
   if (membros.style.display === "none" || membros.style.display === "") {
      membros.style.display = "block";
      arrowaccordion3.classList.add("arrow-flip")
   } else {
      membros.style.display = "none"
      arrowaccordion3.classList.remove("arrow-flip")
   }   
}