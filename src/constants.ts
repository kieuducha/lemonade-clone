export const SUPPLIES_LIMIT = {
    LEMON: 100,
    SUGAR: 100,
    ICE: 1000,
    CUP: 1000,
};

export const PITCHER_PER_ICE = [10, 11, 12, 14, 16, 20, 25, 33];

// ── Portrait canvas dimensions (iPhone 14 / 15 standard) ──────────────────
export const CANVAS_W = 430;
export const CANVAS_H = 932;

// ── Layout zone heights ────────────────────────────────────────────────────
export const TOP_BAR_H   = 55;   // Supply status + Budget row
export const WEATHER_H   = 60;   // Weather / date bar
export const MAP_H       = 320;  // Tilemap display area
export const TAB_CTRL_Y  = TOP_BAR_H + WEATHER_H + MAP_H; // 435 – control panel starts here

