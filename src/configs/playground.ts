export type IPlaygroundExperiment = {
  /** URL slug under /playground and the static file name under /public/playground */
  slug: string;
  title: string;
  description: string;
  /** Short tags rendered as pills on the gallery card */
  tags: Array<string>;
  /** Emoji/text badge shown in the card thumbnail area */
  badge: string;
};

/**
 * Interactive experiments listed on the /playground gallery.
 * Each entry maps 1:1 to a static toy at /public/playground/<slug>.html,
 * embedded full-screen by the /playground/[slug] route.
 * To add a new experiment: drop the HTML file in /public/playground and append here.
 */
export const playgroundExperiments: Array<IPlaygroundExperiment> = [
  {
    slug: "flow-field",
    title: "Flow Field Studio",
    description:
      "A live particle flow-field you can dial in — tweak turbulence, palette, and glow, and watch thousands of particles respond in real time.",
    tags: ["Canvas", "Generative", "Simplex noise"],
    badge: "🌊",
  },
  {
    slug: "gravity-music-box",
    title: "Gravity Music Box",
    description:
      "Drop and throw balls into a field of pegs — every bounce rings a note locked to the scale, so a random tumble always sounds musical.",
    tags: ["Web Audio", "Physics", "Generative"],
    badge: "🔔",
  },
  {
    slug: "vowel-choir",
    title: "Vowel Choir",
    description:
      "Four voices you conduct by dragging — pitch snaps to the scale while left–right morphs the vowel through real formant synthesis (ooo → ahh → eee).",
    tags: ["Web Audio", "Formant synthesis", "Generative"],
    badge: "🎤",
  },
  {
    slug: "orbital-sequencer",
    title: "Orbital Sequencer",
    description:
      "Drop planets around a sun; distance sets each one's pitch and speed, and every pass across a spoke rings a note — inner and outer orbits re-phase into evolving rhythms.",
    tags: ["Web Audio", "Sequencer", "Generative"],
    badge: "🪐",
  },
  {
    slug: "dawn-chorus",
    title: "Dawn Chorus",
    description:
      "Grow a woodland of cute birds that sing their own synthesized songs. Feed worms to raise chicks and fill fertility bars, watch the chorus swell at sunrise — and beware the hawk that swoops in to snatch one.",
    tags: ["Web Audio", "Ecosystem", "Generative"],
    badge: "🐦",
  },
];
