package tarea;

import java.util.ArrayList;
import java.util.List;

class StudentRegistrationSystem {

    List<Student> registeredStudents = new ArrayList<>();
    List<Course> availableCourses = new ArrayList<>();

    boolean registerStudent(Student student, Course course) {
        if(student==null || course==null){
            throw new IllegalArgumentException("Estudiante o curso no validos");
        } else if(!courseIsAvailable(course)){
            throw new IllegalArgumentException("Curso no disponible");
        } else if(studentIsRegistered(student)){
            System.out.println("El estudiante ya ha sido registrado");
            return false;
        }

        List<Course> studentCourses = student.getCourses();

        if(!studentCourses.contains(course)){
            student.addCourse(course);
            registeredStudents.add(student);
        }
        return true;

    }

    boolean studentIsRegistered(Student student) {
        return registeredStudents.contains(student);
    }
    boolean courseIsAvailable(Course course){
        return availableCourses.contains(course);
    }

    void registerStudent(){
        System.out.println("REGISTRANDO ESTUDIANTE");
    }
}

class Student{
    List<Course> courses = new ArrayList<>();
    public List<Course> getCourses(){
        System.out.println("CURSOS DE ESTUDIANTE---------------------------------");
        return courses;
    }

    public void addCourse(Course course){
        courses.add(course);
    }
}

class Course{

}
