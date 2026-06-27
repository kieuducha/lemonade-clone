import { Scene, GameObjects } from "phaser";
import { PreparationScene } from "./preparation-scene";

// Define the MainMenu class that extends Phaser's Scene class
export class MainMenu extends Scene {
    // Declare properties for background image, logo image, title text, and buttons
    background: GameObjects.Image;
    logo: GameObjects.Image;
    startButton: GameObjects.Text;

    // Constructor method to initialize the scene with the key 'MainMenu'
    constructor() {
        super("MainMenu");
    }

    // Create method to set up the scene's content
    create() {
        const preparationScene = new PreparationScene("preparation");
        this.scene.add("preparation", preparationScene);

        this.cameras.main.setBackgroundColor("#18ae31");

        // Logo centered horizontally, upper third of portrait screen
        this.logo = this.add.image(215, 300, "logo");
        this.logo.setScale(0.4);

        // Start button in lower section of portrait screen
        this.startButton = this.add
            .text(215, 680, "Start Game", {
                fontFamily: "Arial Black",
                fontSize: 36,
                color: "#ffffff",
                stroke: "#000000",
                strokeThickness: 8,
                padding: { x: 10, y: 5 },
            })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        this.startButton.on("pointerdown", () => {
            this.scene.start("preparation");
            this.startButton.disableInteractive();
        });
    }
}
