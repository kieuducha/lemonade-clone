// work time: 8:00 am - 20:00 pm (12 hours)
// idea: work time control. (can have break time)

import _Date from "../models/_date";
import WeatherForecast, { Atmosphere } from "../types/weather-forecast";

// TODO: selling scene 에선 isPreparationScene 이 false 로 들어옴, 그에 맞는 UI 를 보여주도록 수정
export default class WeatherNewsContainer extends Phaser.GameObjects.Container {
    date: Phaser.GameObjects.Text;
    todayTemperature: Phaser.GameObjects.Text;
    news: Phaser.GameObjects.Text;
    background: Phaser.GameObjects.Rectangle;
    morningAtmosphereImage: Phaser.GameObjects.Image;
    afternoonAtmosphereImage: Phaser.GameObjects.Image;
    eveningAtmosphereImage: Phaser.GameObjects.Image;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        _date: _Date,
        weatherForecast: WeatherForecast,
        news: string,
        isPreparationScene?: boolean
    ) {
        super(scene, x, y);

        const pad = 10;

        // Date label – top left
        this.date = scene.add.text(pad, 8, _date.getDateString(), { fontSize: "14px", color: "#ffffff" });

        // Temperature – below date
        this.todayTemperature = scene.add.text(pad, 30, this.getTodayTemperature(weatherForecast), {
            fontSize: "12px",
            color: "#eeeeee",
        });

        // Weather icons – right side, vertically centered
        this.morningAtmosphereImage = scene.add.image(260, 30, this.getAtmosphereImage(weatherForecast.morning));
        this.afternoonAtmosphereImage = scene.add.image(300, 30, this.getAtmosphereImage(weatherForecast.afternoon));
        this.eveningAtmosphereImage = scene.add.image(340, 30, this.getAtmosphereImage(weatherForecast.evening));

        // News is hidden in portrait (not enough space); keep the property for compatibility
        this.news = scene.add.text(0, 0, "", { fontSize: "10px" }).setVisible(false);

        // Background – full width strip
        this.background = scene.add.rectangle(0, 0, 430, 60, 0x008229, 1);
        this.background.setOrigin(0, 0);

        this.add([
            this.background,
            this.date,
            this.todayTemperature,
            this.morningAtmosphereImage,
            this.afternoonAtmosphereImage,
            this.eveningAtmosphereImage,
            this.news,
        ]);
        scene.add.existing(this);
    }

    getTodayTemperature(weatherForecast: WeatherForecast): string {
        return `${this.getLowestTemperature(weatherForecast)}${
            weatherForecast.isCelsius ? "C" : "F"
        } - ${this.getHighestTemperature(weatherForecast)}${weatherForecast.isCelsius ? "C" : "F"}`;
    }

    getLowestTemperature(weatherForecast: WeatherForecast): number {
        return Math.min(...Object.values(weatherForecast.temperatureByTime));
    }

    getHighestTemperature(weatherForecast: WeatherForecast): number {
        return Math.max(...Object.values(weatherForecast.temperatureByTime));
    }

    getAtmosphereImage(atmosphere: Atmosphere): string {
        switch (atmosphere) {
            case "sunny":
                return "sunny-24";
            case "cloudy":
                return "cloudy-24";
            case "rainy":
                return "rainy-24";
            case "little-cloudy":
                return "little-cloudy-24";
            default:
                return "sunny-24";
        }
    }
}
