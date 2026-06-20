import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const modalContentSchema = (image: (path: string) => z.ZodType) =>
  z.object({
    intro: z.string().optional(),
    introMedia: z
      .object({
        title: z.string(),
        publicSrc: z.string(),
        alt: z.string(),
        tipus: z.enum(["animacio", "video"]).default("animacio"),
      })
      .optional(),
    sections: z.array(
      z.object({
        title: z.string(),
        paragraphs: z.array(z.string()),
      }),
    ),
    images: z
      .array(
        z.union([
          z.object({
            url: image(),
            alt: z.string(),
            caption: z.string().optional(),
          }),
          z.object({
            publicSrc: z.string(),
            alt: z.string(),
            caption: z.string().optional(),
            tipus: z.enum(["animacio", "video"]).default("animacio"),
          }),
        ]),
      )
      .optional(),
  });

const analisiFloraSchema = (image: (path: string) => z.ZodType) =>
  z.object({
    nomCodi: z.string(),
    resum: z.string().optional(),
    contextGeologic: z.string(),
    posicioRelleu: z.string(),
    orientacioMicroclima: z.string(),
    comunitatsVegetals: z.string(),
    estructuraVegetacio: z.string(),
    especiesArbories: z.array(z.string()),
    especiesArbustivesHerbacies: z.array(z.string()),
    floraRupicola: z.string().optional(),
    relacioFloraSubstrat: z.string(),
    relacioFloraRelleu: z.string(),
    observacionsEcologiques: z.string(),
    images: z
      .array(
        z.object({
          url: image(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .optional(),
  });

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      work: z.string(),
      live: z.string(),
      title: z.string(),
      description: z.string(),
      intro: z
        .array(
          z.object({
            paragraphs: z.array(z.string()).optional(),
          }),
        )
        .optional(),
      outro: z
        .array(
          z.object({
            paragraphs: z.array(z.string()).optional(),
          }),
        )
        .optional(),
      highlights: z
        .array(
          z.object({
            title: z.string().optional(),
            paragraphs: z.array(z.string()).optional(),
          }),
        )
        .optional(),
      projectData: z
        .array(
          z.object({
            client: z.string(),
            service: z.string(),
            sector: z.string(),
            year: z.string(),
          }),
        )
        .optional(),
      credits: z
        .array(
          z.object({
            name: z.string(),
            role: z.string(),
          }),
        )
        .optional(),
      images: z.array(
        z.object({
          url: image(),
          alt: z.string(),
        }),
      ),
      thumbnail: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

const store = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/store" }),
  schema: ({ image }) =>
    z.object({
      price: z.string(),
      title: z.string(),
      checkout: z.string(),
      license: z.string(),
      highlights: z.array(z.string()),
      specifications: z
        .array(
          z.object({
            name: z.string(),
            value: z.string(),
          }),
        )
        .optional(),
      description: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      images: z.array(
        z.object({
          url: image(),
          alt: z.string(),
        }),
      ),
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          }),
        )
        .optional(),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});

const itineraris = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/itineraris" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tipus: z.string().optional(),
      mapa: z.string().optional(),
      intro: z.array(
        z.object({
          paragraphs: z.array(z.string()).optional(),
        }),
      ),
      dades: z.object({
        ubicacio: z.string(),
        mapa: z.string(),
        socle: z.string(),
        historia: z.string(),
        paisatge: z.string().optional(),
      }),
      dadesModals: z.record(z.string(), modalContentSchema(image)).optional(),
      credits: z.array(
        z.object({
          name: z.string(),
          role: z.string(),
        }),
      ),
      images: z.array(
        z.object({
          url: image(),
          alt: z.string(),
        }),
      ),
      thumbnail: z.object({
        url: image(),
        alt: z.string(),
      }),
      ordre: z.number().optional(),
      draft: z.boolean().optional(),
      enConstruccio: z.boolean().optional(),
    }),
});

const parades = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/parades" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      itinerari: z.string(),
      ordre: z.number(),
      coordenades: z.string(),
      media: z.discriminatedUnion("tipus", [
        z.object({
          tipus: z.literal("foto"),
          foto: z.object({
            url: image(),
            alt: z.string(),
          }),
        }),
        z.object({
          tipus: z.literal("video"),
          videoUrl: z.string(),
        }),
      ]),
      fotos: z
        .array(
          z.object({
            url: image(),
            alt: z.string(),
          }),
        )
        .length(8),
      mapaUrl: z.string().url(),
      materials: z.array(
        z.object({
          nom: z.string(),
          enllaç: z.string(),
        }),
      ),
      analisiFlora: analisiFloraSchema(image).optional(),
      paisatgeUrl: z.string().optional(),
    }),
});

const roques = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/roques" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      parada: z.string(),
      ordre: z.number(),
      composicioQuimica: z.string(),
      composicioMineralogica: z.string(),
      textura: z.string(),
      imatges: z.object({
        optica: z.object({
          url: image(),
          alt: z.string(),
        }),
        fileres: z.array(
          z.object({
            electronica: z
              .object({
                url: image(),
                alt: z.string(),
              })
              .optional(),
            espectre: z
              .object({
                url: image(),
                alt: z.string(),
              })
              .optional(),
          }),
        ),
      }),
      composicions: z.array(
        z.object({
          nom: z.string(),
          valor: z.string(),
        }),
      ),
    }),
});

export const collections = {
  work,
  store,
  posts,
  itineraris,
  parades,
  roques,
};
