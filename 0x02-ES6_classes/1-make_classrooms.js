import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const maxStudents = [19, 20, 34];

  return maxStudents.map((students) => new ClassRoom(students));
}
