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
    sections: z
      .array(
        z.object({
          title: z.string(),
          paragraphs: z.array(z.string()),
        }),
      )
      .optional(),
    videos: z
      .array(
        z.object({
          title: z.string(),
          publicSrc: z.string(),
          alt: z.string().optional(),
          period: z.string().optional(),
          description: z.string().optional(),
          paragraphs: z.array(z.string()).optional(),
        }),
      )
      .optional(),
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

const itineraris = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/itineraris" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleParts: z
        .object({
          lead: z.string().optional(),
          from: z.string(),
          to: z.string(),
        })
        .optional(),
      description: z.string(),
      tipus: z.string().optional(),
      mapa: z.string().optional(),
      mapaUrl: z.string().url().optional(),
      intro: z.array(
        z.object({
          paragraphs: z.array(z.string()).optional(),
        }),
      ),
      introLabel: z.string().optional(),
      dadesLabels: z.record(z.string(), z.string()).optional(),
      dades: z.object({
        ubicacio: z.string().optional(),
        mapa: z.string(),
        socle: z.string().optional(),
        historia: z.string(),
        paleogeologia: z.string().optional(),
        paisatge: z.string().optional(),
      }),
      dadesModals: z.record(z.string(), modalContentSchema(image)).optional(),
      dadesModalAliases: z.record(z.string(), z.string()).optional(),
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
      video: z
        .object({
          publicSrc: z.string(),
          alt: z.string(),
        })
        .optional(),
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
          videoUrl: z.string().optional(),
          publicSrc: z.string().optional(),
          alt: z.string().optional(),
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
  itineraris,
  parades,
  roques,
};
