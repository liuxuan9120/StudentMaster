import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassModel } from '@core/models/classes-model';
import { API } from '@core/config';
import { SubjectModel } from '@core/models/subject-model';
import { TeacherModel } from '@core/models/teacher-model';
import { Pagination } from '@core/models/pagination.model';
import { StudentModel } from '@core/models/student-model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getAllClasses() {
    return this.http.get<ClassModel[]>(API + '/api/Admin/get-all-classes');
  }
  public inviteUser(email, classId) {
    return this.http.get(API + '/api/Admin/invite-user/' + email + '/' + classId);
  }
  public removeStudentFromClass(studentId) {
    return this.http.get(API + '/api/Admin/remove-student-from-class/' + studentId);
  }
  public getClassSubjects(classId) {
    return this.http.get<SubjectModel[]>(API + '/api/Admin/get-class-subjects/' + classId);
  }
  public getAllSubjects() {
    return this.http.get<SubjectModel[]>(API + '/api/Admin/get-all-subjects');
  }
  public editSubjectsInClass(classId, subjectId) {
    return this.http.get<SubjectModel[]>(API + `/api/Admin/edit-subjects-in-class/${classId}/${subjectId}`);
  }

  public getClassTeachers(classId) {
    return this.http.get<TeacherModel[]>(API + '/api/Admin/get-class-teachers/' + classId);
  }
  public getAllTeachers() {
    return this.http.get<TeacherModel[]>(API + '/api/Admin/get-all-teachers');
  }
  public editTeachersInClass(classId, teacherId) {
    return this.http.get(API + `/api/Admin/edit-teachers-in-class/${classId}/${teacherId}`);
  }
  public getAllUsers(page: number, count: number) {
    return this.http.get<Pagination<StudentModel>>(API + '/api/Admin/get-all-users/' + page + '/' + count );
  }
  public getAllRoles() {
    return this.http.get<string[]>(API + '/api/Admin/get-all-roles');
  }
  public getRolesByUID(uid) {
    return this.http.get<string[]>(API + '/api/Admin/get-user-roles/' + uid );
  }
  public changeRolesInUser(uid, role) {
    return this.http.get<string[]>(API + '/api/Admin/edit-roles-in-user/' + uid + '/' + role );
  }
}
