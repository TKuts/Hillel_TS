// // Ви маєте JS код, який потрібно перевести у TS та додати анотацію типів до примітивів. Не чіпайте обʼєкти та будь що, чого ми ще не розглядали на занятті. Замість цього ви можете зараз використовувати any, поки ми не знаємо кращого вибору. Перевіряйте код, в ньому є речі, які потрібно додати до класів, не тільки типи. Вам треба зробити рефакторинг, будьте уважні.

class School {
  private directions: string[] = [];

  addDirection(direction: string): void {
    this.directions.push(direction);
  }
}

class Direction {
  private levels: any[] = [];
  private _name: string;

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: any): void {
    this.levels.push(level);
  }
}

class Level {
  private groups: any[] = [];
  private _name: string;
  private _program: any;

  constructor(name: string, program: any) {
    this._name = name;
    this._program = program;
  }

  get name(): string {
    return this._name;
  }

  get program(): any {
    return this._program;
  }

  addGroup(group: any): void {
    this.groups.push(group);
  }
}

class Group {
  _students: string[] = [];
  directionName: string;
  levelName: string;

  get students(): string[] {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: string): void {
    this._students.push(student);
  }

  showPerformance(): string[] {
    const sortedStudents = this._students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades: { [subject: string]: number } = {};
  attendance: boolean[] = [];

  firstName: string;
  lastName: string;
  birthYear: number;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
