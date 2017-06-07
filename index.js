// Multiplier Object (Problem 1)

function Multiplier (number){
	this.number = number;
	this.currentValue = 1;
	this.multiply = function(){
		this.currentValue = this.number * this.currentValue;
	};
	this.getCurrentValue = function(){
		return this.currentValue;
	};
};
let multiplier = new Multiplier(3);
multiplier.multiply();
console.log(multiplier.getCurrentValue());

// Album Object (Problem 2)

function Album() {
	 this.photos = [];
	 this.newPhoto = function (here) {
	 	this.photos.push(here);
	 };
	 this.listPhotos = function () {
	 	let locArr = [];
	 	for (var i = 0; i < this.photos.length; i++) {
	 		locArr[i] = this.photos[i].location;
	 	};
	 	return locArr;
	 };
	 this.accessPhoto = function (pictures) {
	 	return this.photos[pictures];
	 };
};

function Photo(filePath, location) {
	this.filePath = filePath;
	this.location = location;
	img = function () {
		return 'File path: ' + this.filePath + ' Where picture was taken: ' + this.location;
	};
};
let img1 = new Photo ('User/Desktop/Photos/img1.jpg', 'Baghdad');
let img2 = new Photo ('User/Desktop/Photos/img2.jpg', 'Dubai');
let img3 = new Photo ('User/Desktop/Photos/img3.jpg', 'China');
let myAlbum = new Album();
myAlbum.newPhoto(img1);
myAlbum.newPhoto(img2);
myAlbum.newPhoto(img3);
console.log(myAlbum.photos);
console.log(myAlbum.accessPhoto(1));
console.log(myAlbum.listPhotos());

// Library and Book Objects (Problem 3)

function Library() {
	this.books = [];
	this.newBook = function (addBook) {
		this.books.push(addBook)
	};
	this.getBookByTitle = function (title) {
		for (var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === title){
				return this.books[i];
			};
		};
	};
	this.removeBookByTitle = function (removeTitle) {
		for (var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === removeTitle){
				this.books.splice(i, 1);
			};
		};
	};
	this.bookCount = function () {
		if (this.books.length === 1) {
			return this.books.length + ' book left in Library. Not a very extensive library...'
		} else {
			return this.books.length + ' books in Library'};
	};
};
function Book(title, author, genre) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	bk = function () {
		return this.title + ' by ' + this.author + ' Genre: ' + this.genre;
	};
};

let book1 = new Book('The King Beyond the Gate', 'David Gemmell', 'Fantasy');
let book2 = new Book('The Lord of the Rings', 'J.R.R Tolkein', 'Fantasy');
let library = new Library();
library.newBook(book1);
library.newBook(book2);
console.log(library.books);
console.log(library.getBookByTitle('The Lord of the Rings'));
console.log(library.bookCount());
library.removeBookByTitle('The Lord of the Rings');
console.log(library.books);
console.log(library.bookCount());

// Advanced problem 1

function Person(firstName, lastName, age, email) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.email = email;
	this.fullName = function () {
		return this.firstName + ' ' + this.lastName;
	};
	this.basicInfo = function () {
		return 'Hello! My name is ' + this.fullName() + '. I am ' + this.age + ' years old ' + 'and my email is: ' + this.email + '.';
	};
};
function Teacher(firstName, lastName, age, email, yrsExperience, field) {
	Person.call(this, firstName, lastName, age, email);
	this.yrsExperience = yrsExperience;
	this.field = field;
	this.getTeacherInfo = function () {
		return this.basicInfo() + ' I have been a teacher for ' + this.yrsExperience + ' I work in the ' + this.field + ' field.'
	};
};
function Student(firstName, lastName, age, email, schoolLvl, gpa, onTrackToGraduate) {
	Person.call(this, firstName, lastName, age, email);
	this.schoolLvl = schoolLvl;
	this.gpa = gpa;
	this.onTrackToGraduate = onTrackToGraduate;
	this.getStudentInfo = function () {
		return this.basicInfo() + ' I am in ' + this.schoolLvl + '. I currently have a ' + this.gpa + ' GPA. ' + this.fullName() + ' is on track to graduate: ' + this.onTrackToGraduate;
	};
};

// Advanced problem 2 

function School() {
	this.teachers = [];
	this.students = [];
	this.newPerson = function (addPerson) {
		if (addPerson instanceof Teacher) {
			this.teachers.push(addPerson);
		}else if (addPerson instanceof Student){
			this.students.push(addPerson);
		};
	};
};

let person0 = new Person('Barry', 'Rust', 78, 'Barryr@AOL.com');
console.log(person0.fullName());
let person1 = new Person('John', 'Chukee', 32, 'jc.kee@this.that');
console.log(person1.basicInfo());
let teach1 = new Teacher('Cherry', 'Smith', 27, 'Cherrrrrrryy@hotdizzle.com', 3, 'Biology');
console.log(teach1.getTeacherInfo());
let student1 = new Student('Chester', 'Franks', 17, 'Noyce34568394@hotmail.com', 'High School', '3.6', true);
console.log(student1.getStudentInfo());
let teach2 = new Teacher('Nancy', 'Vernan', 61, 'NanVV@AOL.com', 30, 'Math');
let student2 = new Student('Adrianne', 'Balboa', 12, 'non-existant', 'Junior High', '1.3', false);
let student3 = new Student('Rayne', 'Burk', 20, 'jbkurkdes@msn.com', 'College', '4.2', true);
let student4 = new Student ('Ryan', 'Tullar', 37, 'old_skewl87@harty.com', 'College', '4.0', false);
let student5 = new Student ('Brady', 'Franks', 17, 'Not-so-Noyce34568394@hotmail.com', 'High School', '3.2', true);
let school = new School();
school.newPerson(student1);
school.newPerson(teach1);
school.newPerson(teach2);
school.newPerson(student2);
school.newPerson(student3);
school.newPerson(student4);
school.newPerson(student5);
console.log(school.students);
console.log (school.teachers);
let teach3 = new Teacher('Annabelle', 'Rhoudhause', 39, 'ARhaus@gmail.com', 13, 'English');
school.newPerson(teach3);
console.log(school.teachers);
let student6 = new Student('Lester', 'Peg', 7, 'non-existant', 'Elementary School', '3.7', true);
school.newPerson(student6);
console.log(school.students);