import { IMicrofont } from "@poc/interfaces";
import { Route } from "./routes";
import { NAVIGATOR_CONSTANTS } from "./constants";
import { screens } from "./screens";

export const PaymentStack:IMicrofont = {
  stack: {
    component: Route,
    name: NAVIGATOR_CONSTANTS.STACK_NAME,
    title: NAVIGATOR_CONSTANTS.STACK_TITLE,
  },
  initialRoute: NAVIGATOR_CONSTANTS.LIST_SCREEN_NAME,
  screens
}