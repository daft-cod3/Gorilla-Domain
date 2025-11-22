'use client';

import { useEffect, useRef } from 'react';

export default function DrivingGame() {
  const gameContainer = useRef(null);

  useEffect(() => {
    if (!gameContainer.current) return;

    (async () => {
      const Phaser = (await import('phaser')).default;

      class CarScene extends Phaser.Scene {
        constructor() {
          super({ key: 'CarScene' });
        }

        create() {
          // Create town background
          const graphics = this.make.graphics({ x: 0, y: 0, add: false });
          graphics.fillStyle(0x2d5016, 1);
          graphics.fillRect(0, 0, 1024, 768);
          graphics.fillStyle(0x555555, 1);
          graphics.fillRect(100, 100, 824, 568);
          graphics.generateTexture('townMap', 1024, 768);
          graphics.destroy();

          this.add.image(512, 384, 'townMap');

          // Draw roads
          const roadGraphics = this.make.graphics({ x: 0, y: 0, add: false });
          roadGraphics.fillStyle(0x333333, 1);
          roadGraphics.fillRect(400, 0, 224, 768);
          roadGraphics.fillRect(0, 300, 1024, 168);
          roadGraphics.strokeStyle(0xffff00, 2);
          roadGraphics.strokeRect(400, 0, 224, 768);
          roadGraphics.generateTexture('roadMap', 1024, 768);
          roadGraphics.destroy();

          this.add.image(512, 384, 'roadMap');

          // Create car sprite
          const carGraphics = this.make.graphics({ x: 0, y: 0, add: false });
          carGraphics.fillStyle(0xff0000, 1);
          carGraphics.fillRect(0, 0, 40, 60);
          carGraphics.fillStyle(0x0000ff, 1);
          carGraphics.fillRect(5, 5, 30, 20);
          carGraphics.generateTexture('car', 40, 60);
          carGraphics.destroy();

          const car = this.physics.add.sprite(512, 400, 'car');
          car.setBounce(0.2);
          car.setMaxVelocity(300, 300);

          // Car state
          const carState = {
            speed: 0,
            maxSpeed: 200,
            acceleration: 200,
            deceleration: 150,
            gear: 0, // 0=Neutral, 1-5=Gears, -1=Reverse
            rpm: 0,
            maxRpm: 8000,
            clutchEngaged: false,
            steering: 0,
            maxSteeringAngle: 45,
          };

          // Input handling
          const keys = this.input.keyboard.createCursorKeys();
          const keyA = this.input.keyboard.addKey('A');
          const keyD = this.input.keyboard.addKey('D');
          const keyW = this.input.keyboard.addKey('W');
          const keyS = this.input.keyboard.addKey('S');
          const keyC = this.input.keyboard.addKey('C');
          const gearKeys = {
            '1': this.input.keyboard.addKey('1'),
            '2': this.input.keyboard.addKey('2'),
            '3': this.input.keyboard.addKey('3'),
            '4': this.input.keyboard.addKey('4'),
            '5': this.input.keyboard.addKey('5'),
            'R': this.input.keyboard.addKey('R'),
            'N': this.input.keyboard.addKey('N'),
          };

          // UI Text
          const speedText = this.add.text(16, 16, '', {
            fontSize: '16px',
            fill: '#ffffff',
            backgroundColor: '#000000',
            padding: { x: 8, y: 8 },
          });

          const gearText = this.add.text(16, 50, '', {
            fontSize: '16px',
            fill: '#ffffff',
            backgroundColor: '#000000',
            padding: { x: 8, y: 8 },
          });

          const rpmText = this.add.text(16, 84, '', {
            fontSize: '16px',
            fill: '#ffffff',
            backgroundColor: '#000000',
            padding: { x: 8, y: 8 },
          });

          const clutchText = this.add.text(16, 118, '', {
            fontSize: '14px',
            fill: '#ffff00',
            backgroundColor: '#000000',
            padding: { x: 8, y: 8 },
          });

          this.add.text(16, 700, 'Arrow/A-D: Steer | W: Gas | S: Brake | C: Clutch | 1-5/R/N: Gear', {
            fontSize: '12px',
            fill: '#ffffff',
            backgroundColor: '#000000',
            padding: { x: 8, y: 8 },
          });

          this.time.addTimer({
            delay: 16,
            callback: () => {
              // Gear selection
              if (gearKeys['1'].isDown) carState.gear = 1;
              if (gearKeys['2'].isDown) carState.gear = 2;
              if (gearKeys['3'].isDown) carState.gear = 3;
              if (gearKeys['4'].isDown) carState.gear = 4;
              if (gearKeys['5'].isDown) carState.gear = 5;
              if (gearKeys['R'].isDown) carState.gear = -1;
              if (gearKeys['N'].isDown) carState.gear = 0;

              // Clutch
              carState.clutchEngaged = keyC.isDown;

              // Steering
              carState.steering = 0;
              if (keys.left.isDown || keyA.isDown) carState.steering = -1;
              if (keys.right.isDown || keyD.isDown) carState.steering = 1;

              // Apply steering to car rotation
              car.rotation += Phaser.Math.DegToRad(carState.steering * 4);

              // Acceleration and Braking
              let acceleration = 0;
              if (keyW.isDown && carState.gear !== 0 && !carState.clutchEngaged) {
                acceleration = carState.acceleration;
              }
              if (keyS.isDown) {
                acceleration = -carState.deceleration * 1.5;
              }

              // Apply acceleration
              if (acceleration !== 0) {
                carState.speed += acceleration * 0.016;
              } else {
                carState.speed *= 0.95;
              }

              // Gear constraints
              const gearMultipliers = { '-1': 0.5, '1': 0.3, '2': 0.5, '3': 0.7, '4': 0.9, '5': 1.0 };
              const maxSpeedForGear = carState.maxSpeed * (gearMultipliers[carState.gear] || 0);
              carState.speed = Phaser.Math.Clamp(carState.speed, -50, maxSpeedForGear);

              // Calculate RPM
              carState.rpm = Math.abs(carState.speed) * 40;
              carState.rpm = Phaser.Math.Clamp(carState.rpm, 0, carState.maxRpm);

              // Movement in car's direction
              const radians = car.rotation;
              car.setVelocity(
                Math.sin(radians) * carState.speed,
                -Math.cos(radians) * carState.speed
              );

              // Boundary checking
              car.x = Phaser.Math.Clamp(car.x, 50, 974);
              car.y = Phaser.Math.Clamp(car.y, 50, 718);

              // Update UI
              speedText.setText(`Speed: ${Math.abs(carState.speed).toFixed(0)} km/h`);
              const gearDisplay = carState.gear === 0 ? 'N' : carState.gear === -1 ? 'R' : carState.gear;
              gearText.setText(`Gear: ${gearDisplay}`);
              rpmText.setText(`RPM: ${carState.rpm.toFixed(0)}`);
              clutchText.setText(carState.clutchEngaged ? 'CLUTCH: ENGAGED' : 'Clutch: Disengaged');
            },
            repeat: -1,
          });
        }
      }

      const config = {
        type: Phaser.AUTO,
        width: 1024,
        height: 768,
        parent: gameContainer.current,
        physics: {
          default: 'arcade',
          arcade: { debug: false, gravity: { y: 0 } },
        },
        scene: CarScene,
      };

      const game = new Phaser.Game(config);

      return () => {
        game.destroy(true);
      };
    })();
  }, []);

  return <div ref={gameContainer} style={{ width: '100%', height: '100vh' }} />;
}
