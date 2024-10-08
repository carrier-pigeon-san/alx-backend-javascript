const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((student) => student.location === city)
  .map((student) => {
    const gradeProp = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: gradeProp ? gradeProp.grade : 'N/A',
    };
  });

export default updateStudentGradeByCity;
