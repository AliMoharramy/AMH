import { inconsolataBold, merriweather } from "@/app/ui/fonts";

export default function About() {
  return (
    <div
      className={`${inconsolataBold.className} w-11/12 mx-auto my-8 items-center flex flex-col text-center`}
    >
      <h5 className="text-2xl mb-2">Minimalist painting: The origins</h5>
      <p>
        Having revolutionised art history, and more particularly the history of
        painting which he considered finished, the famous Italian-American
        painter Frank Stella, pioneer of minimalist painting declared: “What you
        see is what you see“. The definition of minimalist painting lies in this
        famous quote: linked directly to abstract, this pictorial style
        qualifies as an art where paintings are reduced to a smallest expression
        in order to be no more than a pure presence.
        <br />
        In minimalist painting, artists have established a factor: all has been
        said and done in painting. So, to carry on painting, the important thing
        is no longer the artist’s expression nor the need to make sense of a
        story and a tradition, but to produce works of art that occupy space,
        that is the only parameter that gives their existence any legitimacy.
        Minimalist painting derives directly from abstract painting. In the 20th
        century, a pictorial style emerged that no longer aimed to reproduce
        reality. However, questions relating to form were not completely
        excluded from artists’ conversations and their artwork, particularly in
        the case of the geometric abstract. It was only with the advent of
        minimalist painting that pictorial art was completely freed from all its
        norms. Some painters abandoned the notion of composition, hitherto
        essential to pictorial creation, and created specific objects that meant
        nothing, but aroused aesthetic emotions in the contemporary viewer.
      </p>
      <h5 className="text-2xl mt-6 mb-2">Contemporary art at Artistics</h5>
      <p>
        The Artistics online art gallery is committed to helping you make new
        discoveries. We represent contemporary artists from different but
        complementary worlds who bring with them various new and aesthetic
        backgrounds, so that you can find an artwork that will amaze you. The
        Artistics gallery has brought together 50 selected artists in either:
        painting, sculpture or photography, all chosen for their great technical
        mastery and originality. From Japanese painting to abstract painting or
        landscape painting, contemporary art is found at Artistics!
      </p>
      <h5 className="text-2xl mt-6 mb-2">Our artists</h5>
      <p>
        Boldness and uniqueness are values that we share with our artists.
        Amongst these is Ahn Hyun-Ju, who fits directly into the minimalist
        painting movement. This Korean artist who lives in Düsseldorf creates
        paintings in acrylic on aluminium. This painting medium offers
        additional relief to pictorial works, placing them halfway between
        painting and sculpture. The artist produces hybrid works, not restricted
        to square or rectangular supports. The impression of relief is
        accentuated by the repetition of abstract shapes and parallel lines that
        play with the space within the painting. This game is also found in the
        canvases of the French painter Ferle. She breaks free from the modernist
        painting codes to produce canvases without frames, whose boldly
        connected colours play games with the light and space.
      </p>
    </div>
  );
}
