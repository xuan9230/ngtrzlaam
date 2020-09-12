import inHouseEvents from "./inHouseEvents";
import strayEvents from "./strayEvents";
import { CatStatus } from "../API";
import { Event } from "../baseTypes";

const systemEvents: {
  [key in CatStatus]: Event[];
} = {
  [CatStatus.inHouse]: inHouseEvents,
  [CatStatus.stray]: strayEvents,
  [CatStatus.finished]: [],
};

export default systemEvents;
