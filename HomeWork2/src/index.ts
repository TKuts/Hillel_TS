class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas = [];
  _lecturers: string[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): any[] {
    return this._areas;
  }

  get lecturers(): string[] {
    return this._lecturers;
  }

  addArea(area: string): void {
    this._lecturers.push(area);
  }

  removeArea(area: string): void {
    this._lecturers = this._lecturers.filter(value => value !== area);
  }

  addLecturer(lacturer: string): void {
    this._lecturers.push(lacturer);
  }

  removeLecturer(lacturer: string): void {
    this._lecturers = this._lecturers.filter(value => value !== lacturer);
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels: string[] = [];
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get levels(): string[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  addLevel(level: string): void {
    this._levels.push(level);
  }

  removeLevel(level: string) {
    this._levels = this._levels.filter(valueLevel => valueLevel !== level);
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  _groups: string[] = [];
  _name: string;
  _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get groups(): string[] {
    return this._groups;
  }

  addGroup(group: string): void {
    this._groups.push(group);
  }

  removeGroup(group: string): void {
    this._groups = this._groups.filter(valueGroup => valueGroup !== group);
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _area: string = '';
  _status: string = '';
  _students: any[] = []; // Modify the array so that it has a valid toSorted method*

  _directionName: string;
  _levelName: string;

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  showPerformance(): number[] {
    const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }

  get area(): string {
    return this._area;
  }

  get status(): string {
    return this._status;
  }

  get students(): number[] {
    return this._students;
  }

  addStudents(student: string): void {
    this._students.push(student);
  }

  removeStudents(student: string) {
    this._students = this._students.filter(valueStudent => valueStudent !== student);
  }

  setStatus(status: string): void {
    this._status = status;
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  _firstName: string;
  _lastName: string;
  _birthYear: number;

  _grades: {}[] = []; // workName: mark
  _visits: {}[]= []; // lesson: present

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage: number = (this._visits.filter(present => present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }

  setGrade(workName: string, grade: number): void {
    this._grades.push({ [workName]: grade });
  }

  setVisit(lesson: string, present: boolean): void {
    this._visits.push({ [lesson]: present });
  }
}