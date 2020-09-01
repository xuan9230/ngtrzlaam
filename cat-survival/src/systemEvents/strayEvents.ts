import { Event } from "../baseTypes";
// import { CatStatus, CatAttribute } from "../API";

const strayEvents: Omit<Event, "createdAt" | "updatedAt">[] = [];

export default strayEvents;
