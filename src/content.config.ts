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
        caption: z.string().optional(),
        tipus: z.enum(["animacio", "video"]).default("animacio"),
      })
      .optional(),
    sections: z
      .array(
        z.object({
          title: z.string(),
          paragraphs: z.array(z.string()).optional(),
          subsections: z
            .array(
              z.object({
                title: z.string(),
                paragraphs: z.array(z.string()),
              }),
            )
            .optional(),
          media: z
            .object({
              title: z.string().optional(),
              publicSrc: z.string(),
              alt: z.string(),
              caption: z.string().optional(),
              tipus: z.enum(["animacio", "video"]).default("animacio"),
            })
            .optional(),
          mediaItems: z
            .array(
              z.object({
                title: z.string().optional(),
                publicSrc: z.string(),
                alt: z.string(),
                caption: z.string().optional(),
                tipus: z.enum(["animacio", "video"]).default("animacio"),
              }),
            )
            .optional(),
          mediaCaption: z.string().optional(),
          /** Índex del paràgraf (0-based) després del qual inserir `media` */
          mediaAfterParagraph: z.number().int().nonnegative().optional(),
          /** Índex de la subsecció (0-based) després de la qual inserir `mediaItems` */
          mediaAfterSubsection: z.number().int().nonnegative().optional(),
          mediaBeforeSubsection: z
            .object({
              subsectionIndex: z.number().int().nonnegative(),
              items: z.array(
                z.object({
                  title: z.string().optional(),
                  publicSrc: z.string(),
                  alt: z.string(),
                  caption: z.string().optional(),
                  tipus: z.enum(["animacio", "video"]).default("animacio"),
                }),
              ),
              caption: z.string().optional(),
            })
            .optional(),
          table: z
            .object({
              caption: z.string().optional(),
              headers: z.array(z.string()),
              rows: z.array(
                z.object({
                  cells: z.array(z.string()),
                }),
              ),
            })
            .optional(),
          paragraphsAfter: z.array(z.string()).optional(),
        }),
      )
      .optional(),
    videos: z
      .array(
        z.object({
          id: z.string().optional(),
          title: z.string(),
          publicSrc: z.string().optional(),
          captionsSrc: z.string().optional(),
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
          table: z
            .object({
              headers: z.array(z.string()).optional(),
              rows: z.array(
                z.object({
                  parada: z.string(),
                  material: z.string(),
                  edat: z.string(),
                  slug: z.string().optional(),
                }),
              ),
            })
            .optional(),
        }),
      ),
      introLabel: z.string().optional(),
      paradesLabel: z.string().optional(),
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
      dadesIndex: z
        .record(
          z.string(),
          z.array(
            z.object({
              label: z.string(),
              modalKey: z.string(),
              /** Si és false, es mostra només `label` sense prefix numèric */
              numbered: z.boolean().optional(),
            }),
          ),
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
      video: z
        .object({
          publicSrc: z.string(),
          alt: z.string(),
          /** Vídeo amb pista d'àudio — mostra botó per activar el so */
          ambSo: z.boolean().optional(),
          /** Obrir el vídeo en modal en lloc de mostrar-lo a la capçalera */
          enModal: z.boolean().optional(),
          /** Etiqueta de l'enllaç que obre el modal */
          modalLabel: z.string().optional(),
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
          ambSo: z.boolean().optional(),
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
      videoAeri: z
        .object({
          publicSrc: z.string(),
          alt: z.string(),
          ambSo: z.boolean().optional(),
          modalLabel: z.string().optional(),
        })
        .optional(),
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
