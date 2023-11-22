#include <Keyboard.h>

#define left 13
#define up 12
#define down 11
#define right 10
#define select 9

int leftKeyButton;
int upKeyButton;
int downKeyButton;
int rightKeyButton;
int selectKeyButton;

char enterKey = KEY_KP_ENTER;

void setup() {
  Serial.begin(9600);
  Keyboard.begin();
  
  pinMode(left, INPUT_PULLUP);
  pinMode(up, INPUT_PULLUP);
  pinMode(down, INPUT_PULLUP);
  pinMode(right, INPUT_PULLUP);
  pinMode(select, INPUT_PULLUP);
}

void loop() {
  leftKeyButton = digitalRead(left);
  upKeyButton = digitalRead(up);
  downKeyButton = digitalRead(down);
  rightKeyButton = digitalRead(right);
  selectKeyButton = digitalRead(select);

  if(leftKeyButton == 0 ) {
    // Serial.println("esquerda");
    Keyboard.press('a');
  }
  if(upKeyButton == 0 ) {
    // Serial.println("cima");
    Keyboard.press('w');
  }
  if(downKeyButton == 0 ) {
    // Serial.println("baixo");
    Keyboard.press('s');
  }
  if(rightKeyButton == 0 ) {
    // Serial.println("direita");
    Keyboard.press('d');
  }
  if(selectKeyButton == 0 ) {
    // Serial.println("select");
    Keyboard.press(enterKey);
  }

  Keyboard.releaseAll();

  delay(200);
}
