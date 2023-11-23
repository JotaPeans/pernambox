#include <Keyboard.h>

#define leftKeyPin 9
#define downKeyPin 8
#define upKeyPin 10
#define rightKeyPin 11
#define enterKeyPin 12

#define enterKey KEY_KP_ENTER

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

  if(leftKeyRead == 0) Keyboard.press('a');
  else if(downKeyRead == 0) Keyboard.press('s');
  else if(upKeyRead == 0) Keyboard.press('w');
  else if(rightKeyRead == 0) Keyboard.press('d');
  else if(enterKeyRead == 0) Keyboard.press(enterKey);

  Keyboard.releaseAll();
  delay(135);
}