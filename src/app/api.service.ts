import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ApiService implements InMemoryDbService {
  createDb() {
    const attendees = [
      { id: 0,  name: 'Andres' },
      { id: 11, name: 'Juan' },
      { id: 12, name: 'Rolo' },
      { id: 13, name: 'Wilson' },
      { id: 14, name: 'Moison' },
      { id: 15, name: 'Mateo' },
      { id: 16, name: 'Anguela' },
      { id: 17, name: 'Laura' }
    ];
    return {attendees};
  }
}