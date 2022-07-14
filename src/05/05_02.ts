import {GovernmentBuildingType, HouseType} from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (building: Array<GovernmentBuildingType>) => {
    return building.map(b => b.address.street.title);
};

export const getStreetsTitlesOfHouses = (house: Array<HouseType>) => {
    return house.map(h => h.address.street.title);
};

export const createMessageForPeople = (houses: Array<HouseType>) => {
    return houses.map(s => `Hello people from ${s.address.street.title}`);
};