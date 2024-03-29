import { test, expect } from "vitest";

// ----------Solution 1----------//
//Speed:
//Memory:

function canVisitAllRooms(rooms: number[][]): boolean {
  console.log(rooms);
  // if (rooms[0].length === 0) return false;
  let roomsVisisted = [0];
  let keyStack = rooms[0];
  // console.log(rooms);
  while (keyStack.length != 0) {
    const roomNumber = keyStack.pop()!;
    // if (!roomsVisisted.includes(roomNumber))
    // roomsVisisted.push(roomNumber);
    if (rooms[roomNumber].length === 0) roomsVisisted.push(roomNumber);
    rooms[roomNumber].forEach((key) => {
      // console.log(`room ${roomNumber} visited? `, roomsVisisted.includes(key));
      roomsVisisted.push(roomNumber);
      if (!roomsVisisted.includes(key) && !keyStack.includes(key)) {
        // console.log(`checking room#${roomNumber}: `, rooms[roomNumber]);
        keyStack.push(key);
      }
      // console.log(keyStack);
    });
    // console.log("rooms:", rooms);
  }
  // console.log({ rooms, roomsVisisted });
  return roomsVisisted.length === rooms.length;
}

test("841: Keys and Rooms", () => {
  expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true);
  expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBe(false);
  expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true);
  expect(canVisitAllRooms([[1, 3, 2], [2, 3], [2, 3, 1], []])).toBe(false);
});
