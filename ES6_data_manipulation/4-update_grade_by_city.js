function updateStudentGradeByCity(students, city, array) {
  return students
    .filter(({ location }) => location === city)
    .map((student) => {
      const gr = array.filter((grade) => grade.studentId === student.id);
      if (gr.length !== 0) student.grade = gr[0].grade;
      else student.grade = 'N/A';
      return student;
    });
}

export default updateStudentGradeByCity;
