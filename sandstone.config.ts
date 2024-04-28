import type { SandstoneConfig } from "sandstone";

export default {
  name: "rng",
  description: ["A Datapack by ", { text: "Mizab", color: "gold" }, " created with ", { text: "Sandstone", color: "gold" }],
  formatVersion: 26,
  namespace: "lcg_rng",
  packUid: "6LEZtrPb",
  saveOptions: { path: "./.sandstone/output/datapack" },
  onConflict: {
    default: "warn",
  },
} as SandstoneConfig;
