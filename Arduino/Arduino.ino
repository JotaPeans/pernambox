#include <Keyboard.h>

#define leftKeyPin 9
#define downKeyPin 8
#define upKeyPin 10
#define rightKeyPin 11
#define enterKeyPin 12

#define enterKey KEY_KP_ENTER

int delayT = 500;

int leftKeyRead, downKeyRead, upKeyRead, rightKeyRead, enterKeyRead;

void setup() {
  pinMode(leftKeyPin, INPUT_PULLUP);
  pinMode(downKeyPin, INPUT_PULLUP);
  pinMode(upKeyPin, INPUT_PULLUP);
  pinMode(rightKeyPin, INPUT_PULLUP);
  pinMode(enterKeyPin, INPUT_PULLUP);

  Keyboard.begin();
}

void loop() {
  leftKeyRead = digitalRead(leftKeyPin); 
  downKeyRead = digitalRead(downKeyPin); 
  upKeyRead = digitalRead(upKeyPin); 
  rightKeyRead = digitalRead(rightKeyPin); 
  enterKeyRead = digitalRead(enterKeyPin); 

  if(leftKeyRead == 0) {
    Keyboard.press('a');
    Keyboard.releaseAll();
    delay(delayT);
  }
  else if(downKeyRead == 0) {
    Keyboard.press('s');
    Keyboard.releaseAll();
    delay(delayT);
  }
  else if(upKeyRead == 0) {
    Keyboard.press('w');
    Keyboard.releaseAll();
    delay(delayT);
  }
  else if(rightKeyRead == 0) {
    Keyboard.press('d');
    Keyboard.releaseAll();
    delay(delay);
  }
  else if(enterKeyRead == 0) {
    Keyboard.press(enterKey);
    Keyboard.releaseAll();
    delay(delay);
  }

  Keyboard.releaseAll();
}
