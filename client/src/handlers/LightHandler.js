import { AppState } from "../AppState.js";
import { SocketHandler } from "../utils/SocketHandler.js";

class LightHandler extends SocketHandler {

  constructor() {
    super(true)
    this
      .on('LightStatus', this.setLightStatus)
  }

  setLightStatus(lightStatus){
    console.log('Recieved LightStatus', lightStatus)
    AppState.isOn = lightStatus
  }

}

export const lightHandler = new LightHandler()
