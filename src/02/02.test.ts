import {CityType, GovernmentBuildingType} from './02_02';
import {createMessageForPeople, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from '../05/05_02';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses:
            [
                {
                    id: 1,
                    buildedAt: 2012, repaired: false, address: {number: 100, street: {title: 'White street'}}
                },
                {
                    id: 2,
                    buildedAt: 2008, repaired: false,
                    address: {number: 100, street: {title: 'Happy street'}}
                },
                {
                    id: 3,
                    buildedAt: 2020, repaired: false,
                    address: {number: 101, street: {title: 'Happy street'}}
                },
            ],
        governmentBuildings:
            [
                {
                    type: 'HOSPITAL', budget: 200000, staffCount: 200,
                    address:
                        {
                            street:
                                {title: 'Central Str'}
                        }
                },
                {
                    type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                    address:
                        {
                            street:
                                {title: 'South Str'}
                        }
                }
            ],
        citizensNumber: 1000000
    };
});

// 01. создайте тип CityType
// 02. заполните объект city, чтобы тесты ниже прошли
test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('Happy street');

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe('Happy street');
});

// 01. дополните тип GovernmentBuildingType
// 02. заполните объект city, чтобы тесты ниже прошли
test('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL');
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str');

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION');
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe('South Str');
});

//from lecture 4 about filter()
// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House on Happy street should be destroyed', () => {
    const demolishHousesOnTheStreet = (city: CityType, street: string) => {
        city.houses = city.houses.filter(h => h.address.street.title !== street);
    };
    demolishHousesOnTheStreet(city, 'Happy street');
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

});

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    const getBuildingsWithStaffCountGreaterThen = (buildings:Array<GovernmentBuildingType>, staff: number) => {
        return buildings.filter(b => b.staffCount > staff);
    };
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
});

//from lecture 5 about map()

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {

    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
})
//03. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('create greeting messages for people from streets', ()=>{
    let streetGreet=createMessageForPeople(city.houses)
    expect(streetGreet.length).toBe(3)
    expect(streetGreet[0]).toBe('Hello people from White street')
})


