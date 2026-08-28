import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-niko",
  slug: "niko",
  title: "Niko",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 13.833333969116211,
    "lines": [
      {
        "id": "ch0172_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "ふふ、よく揚がっていますね。",
          "ko": "후후, 잘 익었네요.",
          "en": "Fufu. Cooked to perfection."
        }
      },
      {
        "id": "ch0172_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "ふっくらしていて……\n仕上がりが楽しみです。",
          "ko": "잘 부풀어 오른 것이,\n좋은 유부가 될 것 같아요.",
          "en": "The perfect puff. For the perfect slice of fried tofu!"
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 8.333333969116211,
    "lines": [
      {
        "id": "ch0172_memoriallobby_2",
        "text": {
          "zh-cn": "",
          "ja": "あ、まだダメですよ。",
          "ko": "아, 아직은 안 돼요.",
          "en": "Ah, it's not ready yet."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 17,
    "lines": [
      {
        "id": "ch0172_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "この後、もう1回\n揚げるんですから。",
          "ko": "이 뒤에 한 번 더\n튀겨야 하거든요.",
          "en": "I'll need to fry it again a little more later."
        }
      },
      {
        "id": "ch0172_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "最初は低い温度で。\n次に高い温度で揚げると、\n水分が抜けて美味しい\n油揚げになるんです。",
          "ko": "처음에는 낮은 온도에서,\n그리고 높은 온도에서\n한 번 더 튀겨야만\n수분이 모두 빠져서,\n맛있는 유부가 된답니다.",
          "en": "It needs to be fried at a lower temperature, and then again at a higher one.\nThat'll ensure all the moisture is removed, creating the perfect deep-fried tofu!"
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 19.000001907348633,
    "lines": [
      {
        "id": "ch0172_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "油揚げって実は、\nすごく時間と手間のかかる\n料理なんですよ。",
          "ko": "네. 유부는 정말 시간과\n손이 많이 드는 요리예요.",
          "en": "Yes. Deep-fried tofu slices take a lot of time and effort."
        }
      },
      {
        "id": "ch0172_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "それこそ昔は、\n1年の豊作と安寧を願う\nお供え物だったんだとか。",
          "ko": "그래서 옛날에는 한 해의\n풍작과 안녕을 빌기 위한 공물로\n유부를 만들었다고 해요.",
          "en": "That's why they were offered when praying for good health and a rich harvest."
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 23.000001907348633,
    "lines": [
      {
        "id": "ch0172_memoriallobby_5_1",
        "text": {
          "zh-cn": "",
          "ja": "私の願いは、\n周りのみんなが幸せで、\n平穏無事に過ごせること。",
          "ko": "제가 바라는 것은\n오직 주변 사람들의\n행복과 안녕뿐이지만.",
          "en": "All I wish for is the happiness and well-being of those around me."
        }
      },
      {
        "id": "ch0172_memoriallobby_5_2",
        "text": {
          "zh-cn": "",
          "ja": "油揚げに込めた私の気持ちが\n伝わってくれたら……\n嬉しいですね。",
          "ko": "이 유부에 눌러 담은\n제 마음이 전해진다면……\n기쁘겠네요.",
          "en": "And if that feeling, packed into this dish, reaches them... I'd be very happy."
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
