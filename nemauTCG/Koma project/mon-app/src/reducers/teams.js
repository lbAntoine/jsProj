import Team from '../models/team';

export const teams = (state = [
    new Team("Wildcats", null),
    new Team("Yankees", null),
    new Team("Super", null),
    new Team("Stealers", null)
], action) => {
    return state
}